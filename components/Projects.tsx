interface ProjectsProps {
  isDark: boolean;
}

export default function Projects({ isDark }: ProjectsProps) {
  const projects = [
    {
      title: 'Crystal: AI Coding Assistant',
      category: 'Software Engineering, AI Systems',
      period: 'Nov 2025: Present',
      status: 'Ongoing',
      description:
        'End-to-end AI coding assistant with real-time repository-wide editing, indexing, and streaming LLM inference over WebSockets.',
      bullets: [
        'Built with React, FastAPI, Node.js, and WebSocket for progressive code completion and repository indexing.',
        'Context-aware sidebar assistant grounded in the active file, achieving < 2s time-to-first-token (TTFT).',
        'Multi-language code intelligence pipeline (Python, JavaScript, TypeScript) using semantic search and Tree-sitter, indexing > 1,000 files/min.',
      ],
      tags: ['React', 'FastAPI', 'Node.js', 'WebSocket', 'Tree-sitter', 'LLMs'],
      github: 'https://github.com/Saatwik-ss/Crystal',
      live: 'https://blaid.duckdns.org/',
    },
    {
      title: 'OptiMover: Multiplayer Board Game Platform',
      category: 'Full-stack Development',
      period: 'Feb 2025: Apr 2025',
      status: 'Completed',
      description:
        'Full-stack multiplayer board game platform with real-time human vs RL-AI gameplay, auth, and persistent sessions.',
      bullets: [
        'Built with React, Node.js, TypeScript, WebSocket, and Prisma for real-time gameplay and authentication.',
        'Integrated an AlphaZero-based RL model with MCTS achieving 52–74% win rate against human players.',
        'Sub-100ms latency game updates and Elo-based ranking with Prisma ORM for users, matches, and history.',
      ],
      tags: ['React', 'Node.js', 'TypeScript', 'WebSocket', 'Prisma', 'RL'],
      github: 'https://github.com/Saatwik-ss/OptiMover',
      live: 'https://optimover-1.onrender.com',
    },
    {
      title: 'AIMvL: GitHub for ML Models',
      category: 'Machine Learning, Full-stack Development',
      period: 'May 2025: Dec 2025',
      status: 'Completed',
      description:
        'AI model registry supporting PyTorch, TensorFlow, and ONNX with training, inference, and lifecycle management.',
      bullets: [
        'Full-stack registry with React, FastAPI, and Node.js for upload, versioning, training, and deployment.',
        'Training job scheduler with Bayesian hyperparameter optimization and GPU resource scheduling.',
        'Automated execution and evaluation pipeline across 10+ machine learning models.',
      ],
      tags: ['React', 'FastAPI', 'Node.js', 'PyTorch', 'TensorFlow', 'ONNX'],
      github: 'https://github.com/Saatwik-ss/ML-Models',
    },
    {
      title: 'Differential Actor',
      category: 'Reinforcement Learning, Mathematics',
      period: 'Jan 2026 : Mar 2026',
      status: 'Completed',
      description:
        'Physics-informed reinforcement learning framework for optimal control of non-linear systems with input constraints.',
      bullets: [
        'Developed a physics-informed reinforcement learning (PIRL) framework to solve optimal control problems for non-linear systems with input constraints.',
        'Architected coupled Physics-Informed Neural Networks (PINNs) incorporating asymptotic stability loss terms and policy iteration convergence constraints to approximate value function and control policy.',
        'Formulated physics-guided loss functions that enforce physical invariants during training, eliminating the need for explicit dynamic system models or extensive empirical rollout data.',
      ],
      tags: ['PIRL', 'PINNs', 'Reinforcement Learning', 'Optimal Control', 'Mathematics'],
    },
    {
      title: 'AMH-DT: Adaptive Model-based Hierarchical Deep Tree',
      category: 'Reinforcement Learning, Mathematics, Finance, Sequence Modelling',
      period: 'Jan 2026 : Present',
      status: 'Ongoing',
      description:
        'Adaptive DT based architecture to apply reinforcement learning and sequence modelling in long range, multi-step decision-making scenarios like stock market prediction.',
      bullets: [
                'Constructed a hierarchical encoder discovering latent asset dependency structures via hypergraph classification maps raw multi-asset price data to learned latent embeddings capturing cross-asset temporal dynamics and structural relationships.',
                'Trained a causal policy on K-step trajectories conditioned on return-to-go targets with L-BFGS turnover penalties; weight prediction objective delivered a 1.21 Sharpe ratio and 18% outperformance relative to standard DT through state-specific decision routing on rolling windows.',
                'Allocates specialized Decision Transformers to each market regime, solving the non-stationary MDP problem—avoids mode collapse of single policies by learning regime-specific credit assignment; enables 0.575% monthly alpha through specialized policy optimization within distinct market behavioral states.',
      ],
      tags: ['Sequence Modelling', 'Reinforcement Learning', 'Quantitative Analysis', 'Finance','Decision Transformers'],
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
                    isDark ? 'text-teal-400' : 'text-teal-600'
                  }`}>
                    {project.category} · {project.period}
                  </p>
                  <p className={`text-sm mt-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                  project.status === 'Ongoing'
                    ? isDark
                      ? 'bg-teal-900 text-teal-200'
                      : 'bg-teal-100 text-teal-800'
                    : isDark
                    ? 'bg-cyan-900 text-cyan-200'
                    : 'bg-cyan-100 text-cyan-800'
                }`}>
                  {project.status}
                </span>
              </div>

              <ul className={`mb-4 space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">●</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-2 mb-4">
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

              <div className="flex flex-wrap gap-3 pt-2 border-t border-dashed border-gray-700/40">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isDark
                        ? 'bg-teal-900/40 text-teal-300 hover:bg-teal-800/50'
                        : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub Repo
                  </a>
                ) : (
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm border border-dashed ${
                      isDark ? 'border-gray-700 text-gray-500' : 'border-gray-300 text-gray-400'
                    }`}
                    title="Add github URL in Projects.tsx"
                  >
                    GitHub Repo
                  </span>
                )}

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isDark
                        ? 'bg-cyan-900/40 text-cyan-300 hover:bg-cyan-800/50'
                        : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                ) : (
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm border border-dashed ${
                      isDark ? 'border-gray-700 text-gray-500' : 'border-gray-300 text-gray-400'
                    }`}
                    title="Add live URL in Projects.tsx"
                  >
                    Live Demo
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
