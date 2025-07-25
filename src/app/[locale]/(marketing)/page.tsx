'use client';

import { WaitlistForm } from '@/components/WaitlistForm';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-indigo-950 text-white relative overflow-hidden">
      {/* Animated Morphing Circles Background */}
      <div className="absolute inset-0">
        {/* Large Morphing Circles */}
        <div className="absolute inset-0">
          {/* Circle 1 - Top Left */}
          <div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-2xl animate-morphCircle1"
            style={{
              top: '10%',
              left: '10%',
              animationDelay: '0s',
            }}
          >
          </div>

          {/* Circle 2 - Top Right */}
          <div
            className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/15 to-pink-400/15 blur-2xl animate-morphCircle2"
            style={{
              top: '20%',
              right: '15%',
              animationDelay: '2s',
            }}
          >
          </div>

          {/* Circle 3 - Bottom Left */}
          <div
            className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/12 to-indigo-400/12 blur-2xl animate-morphCircle3"
            style={{
              bottom: '25%',
              left: '20%',
              animationDelay: '4s',
            }}
          >
          </div>

          {/* Circle 4 - Bottom Right */}
          <div
            className="absolute w-88 h-88 rounded-full bg-gradient-to-r from-cyan-400/8 to-teal-400/8 blur-2xl animate-morphCircle4"
            style={{
              bottom: '15%',
              right: '10%',
              animationDelay: '1s',
            }}
          >
          </div>

          {/* Circle 5 - Center */}
          <div
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-violet-400/10 to-purple-400/10 blur-3xl animate-morphCircle5"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: '3s',
            }}
          >
          </div>

          {/* Circle 6 - Middle Left */}
          <div
            className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-emerald-400/8 to-green-400/8 blur-2xl animate-morphCircle6"
            style={{
              top: '40%',
              left: '5%',
              animationDelay: '5s',
            }}
          >
          </div>
        </div>


      </div>

      {/* Header with darker background area */}
      <div className="absolute top-0 left-0 w-full h-24 bg-black/40 backdrop-blur-sm border-b border-green-400/10 z-20"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30 animate-fadeInDown flex items-center justify-center h-24">
        <div className="relative">
          <h1
            className="text-5xl font-bold text-green-400 drop-shadow-lg animate-pulse"
            style={{
              fontFamily: 'var(--font-orbitron)',
              textShadow: '0 0 20px rgba(57, 255, 20, 0.8), 0 0 40px rgba(57, 255, 20, 0.5), 0 0 60px rgba(57, 255, 20, 0.3)',
            }}
          >
            FEVR
          </h1>
          {/* Glowing border around logo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-green-400/20 to-purple-400/20 rounded-xl blur-lg animate-pulse" style={{ animationDuration: '2s' }}></div>
        </div>
      </div>

      {/* Blackjack Cards Background - Hero Section */}
      <div className="absolute top-0 right-0 w-full h-screen pointer-events-none z-5">
        <div className="relative w-full h-full">
          {/* Position cards next to waitlist form in hero section */}
          <div className="absolute top-1/2 right-8 w-96 h-80 opacity-60 transform -translate-y-1/2" style={{ transform: 'translateY(calc(-50% + 18rem))' }}>
            
            {/* Floating sparkles/particles */}
            <div className="absolute top-10 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
            <div className="absolute top-32 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '2s' }}></div>
            <div className="absolute top-64 right-32 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '2.5s', animationDuration: '2.5s' }}></div>

            {/* Card 1 - Ace of Spades */}
            <div className="absolute top-0 right-0 w-36 h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border-2 border-cyan-400/40 transform rotate-15 shadow-2xl animate-slideInRight animate-floatCard1" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)', animationDelay: '1.0s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl"></div>
              <div className="p-3 text-cyan-400 text-xl font-bold" style={{ fontFamily: 'var(--font-orbitron)' }}>A</div>
              <div className="flex items-center justify-center h-full">
                <svg className="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))' }}>
                  <path d="M50 10 L35 35 L10 35 L30 55 L22 80 L50 65 L78 80 L70 55 L90 35 L65 35 Z" />
                </svg>
              </div>
              <div className="absolute bottom-3 right-3 text-cyan-400 text-xl font-bold transform rotate-180" style={{ fontFamily: 'var(--font-orbitron)' }}>A</div>
              <div className="absolute top-3 right-3 text-cyan-400 text-sm">♠</div>
            </div>

            {/* Card 2 - King of Hearts */}
            <div className="absolute top-12 right-12 w-36 h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border-2 border-red-400/40 transform -rotate-8 shadow-2xl animate-slideInRight animate-floatCard2" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 0, 100, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)', animationDelay: '1.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/5 to-transparent rounded-2xl"></div>
              <div className="p-3 text-red-400 text-xl font-bold" style={{ fontFamily: 'var(--font-orbitron)' }}>K</div>
              <div className="flex items-center justify-center h-full">
                <svg className="w-14 h-14 text-red-400" fill="currentColor" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 0, 100, 0.8))' }}>
                  <path d="M50 20 C60 20 70 30 70 40 C70 50 60 60 50 60 C40 60 30 50 30 40 C30 30 40 20 50 20 Z M35 65 L50 50 L65 65 L50 80 Z" />
                </svg>
              </div>
              <div className="absolute bottom-3 right-3 text-red-400 text-xl font-bold transform rotate-180" style={{ fontFamily: 'var(--font-orbitron)' }}>K</div>
              <div className="absolute top-3 right-3 text-red-400 text-sm">♥</div>
            </div>

            {/* Card 3 - Queen of Diamonds */}
            <div className="absolute top-24 right-24 w-36 h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border-2 border-orange-400/40 transform rotate-4 shadow-2xl animate-slideInRight animate-floatCard3" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 165, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)', animationDelay: '1.6s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-2xl"></div>
              <div className="p-3 text-orange-400 text-xl font-bold" style={{ fontFamily: 'var(--font-orbitron)' }}>Q</div>
              <div className="flex items-center justify-center h-full">
                <svg className="w-14 h-14 text-orange-400" fill="currentColor" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.8))' }}>
                  <path d="M50 20 L70 50 L50 80 L30 50 Z" />
                </svg>
              </div>
              <div className="absolute bottom-3 right-3 text-orange-400 text-xl font-bold transform rotate-180" style={{ fontFamily: 'var(--font-orbitron)' }}>Q</div>
              <div className="absolute top-3 right-3 text-orange-400 text-sm">♦</div>
            </div>

            {/* Card 4 - Jack of Clubs */}
            <div className="absolute top-36 right-36 w-36 h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border-2 border-green-400/40 transform -rotate-12 shadow-2xl animate-slideInRight animate-floatCard4" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 255, 100, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)', animationDelay: '1.9s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl"></div>
              <div className="p-3 text-green-400 text-xl font-bold" style={{ fontFamily: 'var(--font-orbitron)' }}>J</div>
              <div className="flex items-center justify-center h-full">
                <svg className="w-14 h-14 text-green-400" fill="currentColor" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 100, 0.8))' }}>
                  <path d="M30 20 L50 20 L70 40 L70 60 L50 80 L30 60 L30 40 Z M40 30 L60 30 L60 50 L40 50 Z" />
                </svg>
              </div>
              <div className="absolute bottom-3 right-3 text-green-400 text-xl font-bold transform rotate-180" style={{ fontFamily: 'var(--font-orbitron)' }}>J</div>
              <div className="absolute top-3 right-3 text-green-400 text-sm">♣</div>
            </div>

            {/* Card 5 - 10 of Spades */}
            <div className="absolute top-48 right-48 w-36 h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border-2 border-purple-400/40 transform rotate-8 shadow-2xl animate-slideInRight animate-floatCard5" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 25px rgba(150, 0, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)', animationDelay: '2.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent rounded-2xl"></div>
              <div className="p-3 text-purple-400 text-xl font-bold" style={{ fontFamily: 'var(--font-orbitron)' }}>10</div>
              <div className="flex items-center justify-center h-full">
                <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 10px rgba(150, 0, 255, 0.8))' }}>
                  <path d="M50 10 L35 35 L10 35 L30 55 L22 80 L50 65 L78 80 L70 55 L90 35 L65 35 Z" />
                </svg>
              </div>
              <div className="absolute bottom-3 right-3 text-purple-400 text-xl font-bold transform rotate-180" style={{ fontFamily: 'var(--font-orbitron)' }}>10</div>
              <div className="absolute top-3 right-3 text-purple-400 text-sm">♠</div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full max-w-6xl mx-auto text-center">

            {/* Main Headline Section */}
            <section className="pt-40 pb-16 sm:pt-48 sm:pb-20 lg:pt-56 lg:pb-24 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-6 lg:space-y-8 relative">

                <div className="relative animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight relative z-10"
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      background: 'linear-gradient(45deg, #00ff88, #00ccff, #ff00ff, #ffff00, #00ff88)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      animation: 'gradientShift 8s ease-in-out infinite',
                    }}
                  >
                    THE FUTURE OF GAMING
                  </h1>

                  {/* Subtle text glow effect */}
                  <div className="absolute inset-0 z-0">
                    <h1
                      className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight opacity-20 blur-sm"
                      style={{
                        fontFamily: 'var(--font-orbitron)',
                        color: '#00ff88',
                        textShadow: '0 0 15px rgba(0, 255, 136, 0.4)',
                      }}
                    >
                      THE FUTURE OF GAMING
                    </h1>
                  </div>
                </div>

                <div className="relative animate-slideInLeft" style={{ animationDelay: '0.9s' }}>
                  <p
                    className="text-lg sm:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed animate-pulse"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      color: '#00ccff',
                      textShadow: '0 0 15px rgba(0, 204, 255, 0.6)',
                    }}
                  >
                    FEVR is coming. The game will never feel the same again.
                  </p>

                </div>
              </div>
            </section>

            <style jsx>
              {`
              @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
              
              @keyframes morphCircle1 {
                0%, 100% { 
                  transform: scale(1) translate(0, 0);
                  border-radius: 50%;
                }
                25% { 
                  transform: scale(1.3) translate(20px, -30px);
                  border-radius: 60% 40% 30% 70%;
                }
                50% { 
                  transform: scale(0.8) translate(-15px, 25px);
                  border-radius: 30% 60% 70% 40%;
                }
                75% { 
                  transform: scale(1.1) translate(10px, -20px);
                  border-radius: 40% 30% 60% 70%;
                }
              }
              
              @keyframes morphCircle2 {
                0%, 100% { 
                  transform: scale(1) translate(0, 0);
                  border-radius: 50%;
                }
                33% { 
                  transform: scale(1.2) translate(-25px, 20px);
                  border-radius: 70% 30% 50% 50%;
                }
                66% { 
                  transform: scale(0.9) translate(30px, -15px);
                  border-radius: 40% 60% 30% 70%;
                }
              }
              
              @keyframes morphCircle3 {
                0%, 100% { 
                  transform: scale(1) translate(0, 0);
                  border-radius: 50%;
                }
                20% { 
                  transform: scale(1.4) translate(15px, -20px);
                  border-radius: 60% 40% 80% 20%;
                }
                60% { 
                  transform: scale(0.7) translate(-20px, 30px);
                  border-radius: 20% 80% 40% 60%;
                }
                80% { 
                  transform: scale(1.1) translate(25px, -10px);
                  border-radius: 50% 50% 30% 70%;
                }
              }
              
              @keyframes morphCircle4 {
                0%, 100% { 
                  transform: scale(1) translate(0, 0);
                  border-radius: 50%;
                }
                40% { 
                  transform: scale(1.1) translate(-30px, -25px);
                  border-radius: 30% 70% 60% 40%;
                }
                70% { 
                  transform: scale(1.3) translate(20px, 15px);
                  border-radius: 70% 30% 40% 60%;
                }
              }
              
              @keyframes morphCircle5 {
                0%, 100% { 
                  transform: translate(-50%, -50%) scale(1);
                  border-radius: 50%;
                }
                30% { 
                  transform: translate(-50%, -50%) scale(1.2);
                  border-radius: 40% 60% 70% 30%;
                }
                60% { 
                  transform: translate(-50%, -50%) scale(0.8);
                  border-radius: 60% 40% 30% 70%;
                }
              }
              
              @keyframes morphCircle6 {
                0%, 100% { 
                  transform: scale(1) translate(0, 0);
                  border-radius: 50%;
                }
                50% { 
                  transform: scale(1.5) translate(35px, -40px);
                  border-radius: 80% 20% 50% 50%;
                }
              }
              
              .animate-morphCircle1 {
                animation: morphCircle1 12s ease-in-out infinite;
              }
              
              .animate-morphCircle2 {
                animation: morphCircle2 15s ease-in-out infinite;
              }
              
              .animate-morphCircle3 {
                animation: morphCircle3 18s ease-in-out infinite;
              }
              
              .animate-morphCircle4 {
                animation: morphCircle4 14s ease-in-out infinite;
              }
              
              .animate-morphCircle5 {
                animation: morphCircle5 16s ease-in-out infinite;
              }
              
              .animate-morphCircle6 {
                animation: morphCircle6 20s ease-in-out infinite;
              }
              
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              
              @keyframes fadeInUp {
                from { 
                  opacity: 0;
                  transform: translate3d(0, 30px, 0);
                }
                to { 
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }
              
              @keyframes fadeInDown {
                from { 
                  opacity: 0;
                  transform: translate3d(0, -30px, 0);
                }
                to { 
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }
              
              @keyframes slideInLeft {
                from { 
                  opacity: 0;
                  transform: translate3d(-50px, 0, 0);
                }
                to { 
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }
              
              @keyframes slideInRight {
                from { 
                  opacity: 0;
                  transform: translate3d(50px, 0, 0);
                }
                to { 
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }
              
              @keyframes scaleIn {
                from { 
                  opacity: 0;
                  transform: scale(0.8);
                }
                to { 
                  opacity: 1;
                  transform: scale(1);
                }
              }
              
              .animate-fadeIn {
                animation: fadeIn 0.8s ease-out forwards;
                opacity: 0;
              }
              
              .animate-fadeInUp {
                animation: fadeInUp 0.8s ease-out forwards;
                opacity: 0;
              }
              
              .animate-fadeInDown {
                animation: fadeInDown 0.8s ease-out forwards;
                opacity: 0;
              }
              
              .animate-slideInLeft {
                animation: slideInLeft 0.8s ease-out forwards;
                opacity: 0;
              }
              
              .animate-slideInRight {
                animation: slideInRight 0.8s ease-out forwards;
                opacity: 0;
              }
              
              .animate-scaleIn {
                animation: scaleIn 0.8s ease-out forwards;
                opacity: 0;
              }

              @keyframes floatCard1 {
                0%, 100% { transform: rotate(15deg) translateY(0px); }
                50% { transform: rotate(15deg) translateY(-8px); }
              }

              @keyframes floatCard2 {
                0%, 100% { transform: rotate(-8deg) translateY(0px); }
                50% { transform: rotate(-8deg) translateY(-12px); }
              }

              @keyframes floatCard3 {
                0%, 100% { transform: rotate(4deg) translateY(0px); }
                50% { transform: rotate(4deg) translateY(-6px); }
              }

              @keyframes floatCard4 {
                0%, 100% { transform: rotate(-12deg) translateY(0px); }
                50% { transform: rotate(-12deg) translateY(-10px); }
              }

              @keyframes floatCard5 {
                0%, 100% { transform: rotate(8deg) translateY(0px); }
                50% { transform: rotate(8deg) translateY(-7px); }
              }

              .animate-floatCard1 {
                animation: floatCard1 4s ease-in-out infinite;
              }

              .animate-floatCard2 {
                animation: floatCard2 5s ease-in-out infinite;
              }

              .animate-floatCard3 {
                animation: floatCard3 4.5s ease-in-out infinite;
              }

              .animate-floatCard4 {
                animation: floatCard4 5.5s ease-in-out infinite;
              }

              .animate-floatCard5 {
                animation: floatCard5 4.2s ease-in-out infinite;
              }
            `}
            </style>

            {/* Call to Action Section */}
            <section className="py-12 sm:py-16 lg:py-20 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
              <div className="space-y-8 lg:space-y-12">
                <div className="max-w-sm mx-auto animate-scaleIn" style={{ animationDelay: '1.5s' }}>
                  <WaitlistForm />
                </div>

                <p className="text-sm text-gray-500 max-w-md mx-auto animate-fadeIn" style={{ fontFamily: 'var(--font-inter)', animationDelay: '1.8s' }}>
                  Join thousands already on the list. Be first to experience FEVR.
                </p>
              </div>
            </section>

            {/* Feature Boxes Section */}
            <section className="py-16 sm:py-20 lg:py-24 relative animate-fadeInUp" style={{ animationDelay: '2.1s' }}>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto relative z-10">

                {/* Trust Box */}
                <div className="group relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 border border-green-400/30 rounded-xl p-6 lg:p-8 text-center backdrop-blur-md hover:border-green-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20 animate-slideInLeft" style={{ animationDelay: '2.4s' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full flex items-center justify-center border border-green-400/40">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                  </div>

                  <h3
                    className="text-lg lg:text-xl font-bold mb-2 relative z-10"
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      color: '#00ff88',
                      textShadow: '0 0 10px rgba(0, 255, 136, 0.6)',
                    }}
                  >
                    Built on trust
                  </h3>
                  <p className="text-sm text-gray-300 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Blockchain security
                  </p>
                </div>

                {/* Crypto Box */}
                <div className="group relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 border border-purple-400/30 rounded-xl p-6 lg:p-8 text-center backdrop-blur-md hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/20 animate-fadeInUp" style={{ animationDelay: '2.7s' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center border border-purple-400/40">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>

                  <h3
                    className="text-lg lg:text-xl font-bold mb-2 relative z-10"
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      color: '#ff00ff',
                      textShadow: '0 0 10px rgba(255, 0, 255, 0.6)',
                    }}
                  >
                    Powered by crypto
                  </h3>
                  <p className="text-sm text-gray-300 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Instant transactions
                  </p>
                </div>

                {/* Thrill Box */}
                <div className="group relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 border border-cyan-400/30 rounded-xl p-6 lg:p-8 text-center backdrop-blur-md hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 animate-slideInRight" style={{ animationDelay: '3.0s' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full flex items-center justify-center border border-cyan-400/40">
                      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>

                  <h3
                    className="text-lg lg:text-xl font-bold mb-2 relative z-10"
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      color: '#00ccff',
                      textShadow: '0 0 10px rgba(0, 204, 255, 0.6)',
                    }}
                  >
                    Designed for thrill
                  </h3>
                  <p className="text-sm text-gray-300 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Adrenaline rush
                  </p>
                </div>
              </div>
            </section>

            {/* Social Links Section */}
            <section className="py-12 sm:py-16 lg:py-20 animate-fadeInUp" style={{ animationDelay: '3.3s' }}>
              <div className="flex justify-center space-x-6 lg:space-x-8">
                <button type="button" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button type="button" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </button>
                <button type="button" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575-.105.79-.25.79-.546v-1.916c-3.194.696-3.864-1.55-3.864-1.50-.522-1.328-1.274-1.681-1.274-1.681-1.043-.714.08-.7.08-.7 1.15.08 1.756 1.18 1.756 1.18 1.026 1.756 2.693 1.248 3.349.954.104-.741.402-1.249.733-1.537-2.559-.29-5.253-1.28-5.253-5.696 0-1.258.45-2.286 1.18-3.09-.118-.29-.511-1.46.112-3.04 0 0 .963-.309 3.158 1.179.916-.255 1.9-.382 2.875-.386.975.004 1.963.131 2.881.386 2.192-1.488 3.154-1.179 3.154-1.179.625 1.58.232 2.75.114 3.04.733.804 1.179 1.832 1.179 3.09 0 4.428-2.7 5.403-5.274 5.686.415.359.785 1.065.785 2.148v3.184c0 .299.217.646.798.538C20.709 21.637 24 17.34 24 12.25 24 5.896 18.854.75 12.5.75z" />
                  </svg>
                </button>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-fadeIn" style={{ animationDelay: '3.6s' }}>
        <div className="flex space-x-4 text-xs text-gray-500">
          <button type="button" className="hover:text-gray-300 transition-colors">Privacy Policy</button>
          <span>•</span>
          <button type="button" className="hover:text-gray-300 transition-colors">Terms</button>
        </div>
      </div>

    </div>
  );
}
