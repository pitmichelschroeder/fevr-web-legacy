import { setRequestLocale } from 'next-intl/server';
import { WaitlistForm } from '@/components/WaitlistForm';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: 'FEVR - The Future of VR Casino Gaming',
    description: 'Join the waitlist for FEVR, the revolutionary VR casino experience. Immerse yourself in the future of online gaming.',
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                FEVR
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto">
              The Future of VR Casino Gaming
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Experience the thrill of Las Vegas in virtual reality. Play poker, blackjack, roulette, and slots in immersive VR environments with players from around the world.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Immersive Casino Games</h3>
              <p className="text-gray-300">Experience classic casino games like never before in stunning VR environments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Social Gaming</h3>
              <p className="text-gray-300">Connect and compete with players worldwide in realistic virtual casino environments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Fair</h3>
              <p className="text-gray-300">Blockchain-powered transparency ensures fair play and secure transactions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Be First to Experience FEVR
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our exclusive waitlist and get early access to the future of VR casino gaming.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <WaitlistForm />
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="py-16 bg-black bg-opacity-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
          <p className="text-gray-300">
            FEVR is currently in development. Join our waitlist to be notified when we launch and receive exclusive early access.
          </p>
        </div>
      </div>
    </div>
  );
}
