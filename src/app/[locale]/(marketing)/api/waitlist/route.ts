import type { NextRequest } from 'next/server';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { waitlistSchema } from '@/models/Schema';
import { WaitlistValidation } from '@/validations/WaitlistValidation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request data
    const validatedData = WaitlistValidation.parse(body);

    // Check if email already exists
    const existingEntry = await db
      .select()
      .from(waitlistSchema)
      .where(eq(waitlistSchema.email, validatedData.email))
      .limit(1);

    if (existingEntry.length > 0) {
      return NextResponse.json(
        { error: 'Email already registered for waitlist' },
        { status: 409 },
      );
    }

    // Insert new waitlist entry
    const newEntry = await db
      .insert(waitlistSchema)
      .values({
        email: validatedData.email,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        isVrOwner: validatedData.isVrOwner,
        vrHeadset: validatedData.vrHeadset,
        referralCode: validatedData.referralCode,
      })
      .returning();

    logger.info('New waitlist signup', {
      email: validatedData.email,
      position: newEntry[0]?.waitlistPosition,
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist',
      position: newEntry[0]?.waitlistPosition,
    });
  } catch (error) {
    if (error instanceof Error && 'issues' in error) {
      // Zod validation error
      return NextResponse.json(
        { error: 'Invalid data', details: error.issues },
        { status: 400 },
      );
    }

    logger.error('Waitlist signup error', { error });

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
