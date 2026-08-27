interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-black border-t border-gray-800' : 'bg-white border-t border-gray-200'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">About</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Background</h3>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Currently a third-year student at BITS Pilani, Goa, pursuing B.E. in Mathematics and Computing. My academic focus spans Machine learning, Numerical optimization, Full-stack development, and Hardware for machine learning.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Recent work includes Crystal (an AI coding assistant), OptiMover (a multiplayer board game platform), and AIMvL (an ML model registry). I have also interned at Caarya Innovative and TCS-Research DATA-LAB, and mentored ML fundamentals for 60+ students at BITS Pilani.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Interests & Passions</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium mb-1">Personal Interests</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  I enjoy partaking in sports, I play boxing and football primarily, but i also enjoy being part of a team through team sports. I also have a deep interest in history, especially medieval history, and I enjoy reading about the sociopolitical structures and military escapades of past civilizations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <p className="font-semibold">B.E. Mathematics and Computing</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                BITS Pilani, K. K. Birla Goa Campus (2024-Present)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
