interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div>
            <p className={`text-sm font-semibold tracking-wider mb-4 ${
              isDark ? 'text-teal-400' : 'text-teal-600'
            }`}>
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Saatwik Tiwari
            </h1>
            <p className={`mt-2 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              B.E. Mathematics & Computing - BITS Pilani Goa
            </p>
          </div>

          <p className={`text-lg leading-relaxed max-w-2xl ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Hi there, I am Saatwik
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center ${
                isDark
                  ? 'bg-teal-600 hover:bg-teal-700 text-white'
                  : 'bg-teal-600 hover:bg-teal-700 text-white'
              }`}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center border-2 ${
                isDark
                  ? 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black'
                  : 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
              }`}
            >
              Get in Touch
            </a>

            <a
              href="#Resume"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center ${
                isDark
                  ? 'bg-teal-600 hover:bg-teal-700 text-white'
                  : 'bg-teal-600 hover:bg-teal-700 text-white'              }`}
            >
              View Resume
            </a>
          </div>

          <div className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <p className={`text-sm font-semibold mb-4 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              CONTACT
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:saatwik.mail@gmail.com"
                className={`flex items-center gap-2 transition-colors duration-200 ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                <span className="text-sm font-medium">Email</span>
              </a>
              <a
                href="tel:+919045330144"
                className={`flex items-center gap-2 transition-colors duration-200 ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                <span className="text-sm font-medium">+91 9045 330 144</span>
              </a>
              <a
                href="https://www.linkedin.com/in/saatwik-tiwari-336b86301/"
                className={`flex items-center gap-2 transition-colors duration-200 ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Saatwik-ss"
                className={`flex items-center gap-2 transition-colors duration-200 ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
