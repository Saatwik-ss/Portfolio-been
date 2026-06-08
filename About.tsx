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
              Currently a second-year student at BITS Pilani, Goa, pursuing B.E. in Mathematics and Computing with a CGPA of 7.60/10. My academic focus spans machine learning, numerical optimization, data structures, and artificial intelligence.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I have worked on cutting-edge projects including Physics-Informed Neural Networks for solving PDEs, reinforcement learning-based game engines, and robotic simulations. Member of SAIDL (Society for Artificial Intelligence and Deep Learning) and PRAGYA research groups.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Interests & Passions</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium mb-1">Sports & Physical Training</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Boxing and football are my primary outlets. I value discipline, strategy, and the mental resilience that comes with competitive sports.
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">History & Medieval Period</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Fascinated by medieval history, military strategies, and the sociopolitical structures of past civilizations. This shapes how I think about problem-solving and systems design.
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
              <p className={`text-sm font-medium mt-2 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                CGPA: 7.60/10 (After 2nd Semester)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
