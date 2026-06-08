interface ProjectsProps {
  isDark: boolean;
}

export default function Projects({ isDark }: ProjectsProps) {
  const projects = [
    {
      title: 'Physics-Informed Neural Networks (PINNs)',
      description: 'Re-implemented research papers applying PINNs to solve nonlinear PDEs with experimental validation. Developed a transformer-assisted PINN for 3-D Navier-Stokes equations.',
      status: 'Ongoing',
      tags: ['PyTorch', 'Research', 'Numerical Methods', 'Scientific ML'],
    },
    {
      title: 'AlphaZero-style Board Game Engine',
      description: 'Self-play reinforcement learning engine combining Monte Carlo Tree Search with neural network policy/value predictions. Trained agents to master Connect4, Chess, and Go from scratch.',
      status: 'Completed',
      tags: ['RL', 'MCTS', 'Neural Networks', 'Games'],
    },
    {
      title: 'Robotic Simulations & RL Training',
      description: 'Built custom quadruped, car-like, and humanoid robot models in MuJoCo. Implemented RL algorithms for locomotion and complex task execution in life-like environments.',
      status: 'Ongoing',
      tags: ['MuJoCo', 'Reinforcement Learning', 'Robotics', 'Simulation'],
    },
    {
      title: 'Spatial Reasoning Research',
      description: 'Member of PRAGYA research group at BITS Goa, working on spatial reasoning problems with focus on geometric understanding and visual intelligence.',
      status: 'Ongoing',
      tags: ['Research', 'Spatial Analysis', 'Computer Vision'],
    },
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-black border-t border-gray-800' : 'bg-white border-t border-gray-200'
    }`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Projects</h2>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-gray-900 hover:bg-gray-800 border border-gray-800'
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className={`text-sm mt-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                  project.status === 'Ongoing'
                    ? isDark
                      ? 'bg-green-900 text-green-200'
                      : 'bg-green-100 text-green-800'
                    : isDark
                    ? 'bg-blue-900 text-blue-200'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className={`px-2 py-1 rounded text-xs transition-colors duration-200 ${
                      isDark
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tag}
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
