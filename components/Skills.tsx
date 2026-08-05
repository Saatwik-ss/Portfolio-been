interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'SQL'],
    },
    {
      title: 'Web Technologies',
      skills: ['React.js', 'Node.js', 'FastAPI', 'Flask', 'Express.js', 'WebSockets', 'HTML/CSS', 'Prisma ORM'],
    },
    {
      title: 'Databases & Storage',
      skills: ['PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'ML/AI Tools',
      skills: ['PyTorch', 'TensorFlow', 'ONNX', 'JAX', 'ChromaDB'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Linux', 'AWS', 'GitHub'],
    },
    {
      title: 'Other',
      skills: ['REST APIs', 'Machine Learning', 'Pandas', 'NumPy'],
    },
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-black border-t border-gray-800' : 'bg-white border-t border-gray-200'
    }`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg transition-all duration-300 ${
                isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                      isDark
                        ? 'bg-teal-900 text-teal-200 hover:bg-teal-800'
                        : 'bg-teal-100 text-teal-800 hover:bg-teal-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
