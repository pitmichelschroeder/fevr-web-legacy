'use client';

import { WaitlistForm } from '@/components/WaitlistForm';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-indigo-950 text-white relative overflow-hidden">
      {/* Dynamic Matrix Background */}
      <div className="absolute inset-0">
        {/* Animated Matrix Rain */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={`matrix-${i}-${Math.random().toString(36).substr(2, 9)}`}
              className="absolute text-green-400 text-xs font-mono animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 100}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationIterationCount: 'infinite',
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-6 h-6 border-2 border-cyan-400 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-40 right-20 w-8 h-8 border-2 border-purple-400 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-4 h-4 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-60 left-1/3 w-10 h-10 border-2 border-pink-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-60 right-1/3 w-6 h-6 bg-blue-400 transform rotate-45 animate-bounce" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Enhanced Animated Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-400/10 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-400/5 to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>

        {/* Pulsing Orbs with Different Colors */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>

        {/* Blackjack Cards Background */}
        <div className="absolute bottom-0 right-0 w-2/5 h-3/5 opacity-40 pointer-events-none">
          <div className="relative w-full h-full">
            {/* Card 1 - Ace of Spades */}
            <div className="absolute bottom-16 right-16 w-40 h-56 bg-gray-800/90 rounded-2xl border-4 border-green-400/30 transform rotate-12 shadow-2xl animate-slideInRight" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(57, 255, 20, 0.2)', animationDelay: '1.0s' }}>
              <div className="p-4 text-green-400 text-lg font-bold">A</div>
              <div className="flex items-center justify-center h-full">
                <svg className="w-16 h-16 text-green-400" fill="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.6))' }}>
                  <path d="M12 2L8.5 8.5H2L7 12L5 18.5L12 15L19 18.5L17 12L22 8.5H15.5L12 2Z" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 text-green-400 text-lg font-bold transform rotate-180">A</div>
            </div>

            {/* Card 2 - King */}
            <div className="absolute bottom-24 right-28 w-40 h-56 bg-gray-800/90 rounded-2xl border-4 border-green-400/30 transform -rotate-6 shadow-2xl animate-slideInRight" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(57, 255, 20, 0.2)', animationDelay: '1.3s' }}>
              <div className="p-4 text-green-400 text-lg font-bold">K</div>
              <div className="flex items-center justify-center h-full">
                <svg className="w-14 h-14 text-green-400" fill="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.6))' }}>
                  <path d="M12 6C13.1 6 14 6.9 14 8S13.1 10 12 10 10 9.1 10 8 10.9 6 12 6M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V7H19V9Z" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 text-green-400 text-lg font-bold transform rotate-180">K</div>
            </div>

            {/* Card 3 - Queen */}
            <div className="absolute bottom-32 right-40 w-40 h-56 bg-gray-800/90 rounded-2xl border-4 border-green-400/30 transform rotate-3 shadow-2xl animate-slideInRight" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(57, 255, 20, 0.2)', animationDelay: '1.6s' }}>
              <div className="p-4 text-green-400 text-lg font-bold">Q</div>
              <div className="flex items-center justify-center h-full">
                <svg className="w-14 h-14 text-green-400" fill="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.6))' }}>
                  <path d="M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19V9Z" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 text-green-400 text-lg font-bold transform rotate-180">Q</div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10 animate-fadeInDown">
        <div className="relative">
          <h1
            className="text-5xl font-bold text-green-400 drop-shadow-lg animate-pulse"
            style={{
              fontFamily: 'Oxanium, monospace',
              textShadow: '0 0 20px rgba(57, 255, 20, 0.8), 0 0 40px rgba(57, 255, 20, 0.5), 0 0 60px rgba(57, 255, 20, 0.3)',
            }}
          >
            FEVR
          </h1>
          {/* Glowing border around logo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-green-400/20 to-purple-400/20 rounded-xl blur-lg animate-pulse" style={{ animationDuration: '2s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full max-w-6xl mx-auto text-center">

            {/* Main Headline Section */}
            <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-6 lg:space-y-8 relative">
                {/* Animated Background Elements */}
                <div className="absolute -inset-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-32 h-32 border border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute top-0 right-0 w-24 h-24 border border-purple-400/30 animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 border border-green-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative animate-slideInRight" style={{ animationDelay: '0.6s' }}>
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight relative z-10"
                    style={{
                      fontFamily: 'Oxanium, monospace',
                      background: 'linear-gradient(45deg, #00ff88, #00ccff, #ff00ff, #ffff00, #00ff88)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      animation: 'gradientShift 3s ease-in-out infinite',
                    }}
                  >
                    THE FUTURE OF GAMING
                  </h1>

                  {/* Text glow effect */}
                  <div className="absolute inset-0 z-0">
                    <h1
                      className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight opacity-50 blur-sm"
                      style={{
                        fontFamily: 'Oxanium, monospace',
                        color: '#00ff88',
                        textShadow: '0 0 30px rgba(0, 255, 136, 0.8)',
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
                      fontFamily: 'Oxanium, monospace',
                      color: '#00ccff',
                      textShadow: '0 0 15px rgba(0, 204, 255, 0.6)',
                    }}
                  >
                    FEVR is coming. The game will never feel the same again.
                  </p>

                  {/* Typing effect simulation */}
                  <div className="absolute right-0 top-0 w-1 h-8 bg-cyan-400 animate-pulse" style={{ animationDuration: '1s' }}></div>
                </div>
              </div>
            </section>

            <style jsx>
              {`
              @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
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
            `}
            </style>

            {/* Call to Action Section */}
            <section className="py-12 sm:py-16 lg:py-20 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
              <div className="space-y-8 lg:space-y-12">
                <div className="max-w-sm mx-auto animate-scaleIn" style={{ animationDelay: '1.5s' }}>
                  <WaitlistForm />
                </div>

                <p className="text-sm text-gray-500 max-w-md mx-auto animate-fadeIn" style={{ fontFamily: 'Oxanium, monospace', animationDelay: '1.8s' }}>
                  Join thousands already on the list. Be first to experience FEVR.
                </p>
              </div>
            </section>

            {/* Feature Boxes Section */}
            <section className="py-16 sm:py-20 lg:py-24 relative animate-fadeInUp" style={{ animationDelay: '2.1s' }}>
              {/* Section Background Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-20 right-20 w-6 h-6 border-2 border-purple-400 rotate-45 animate-spin" style={{ animationDuration: '6s' }}></div>
                <div className="absolute bottom-10 left-1/4 w-5 h-5 bg-green-400 animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>

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
                      fontFamily: 'Oxanium, monospace',
                      color: '#00ff88',
                      textShadow: '0 0 10px rgba(0, 255, 136, 0.6)',
                    }}
                  >
                    Built on trust
                  </h3>
                  <p className="text-sm text-gray-300 relative z-10" style={{ fontFamily: 'Oxanium, monospace' }}>
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
                      fontFamily: 'Oxanium, monospace',
                      color: '#ff00ff',
                      textShadow: '0 0 10px rgba(255, 0, 255, 0.6)',
                    }}
                  >
                    Powered by crypto
                  </h3>
                  <p className="text-sm text-gray-300 relative z-10" style={{ fontFamily: 'Oxanium, monospace' }}>
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
                      fontFamily: 'Oxanium, monospace',
                      color: '#00ccff',
                      textShadow: '0 0 10px rgba(0, 204, 255, 0.6)',
                    }}
                  >
                    Designed for thrill
                  </h3>
                  <p className="text-sm text-gray-300 relative z-10" style={{ fontFamily: 'Oxanium, monospace' }}>
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
