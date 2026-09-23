interface ProjectsProps {
  isDark: boolean;
}
export default function Projects({ isDark }: ProjectsProps) {
  const projects = [
    {
      title: 'Crystal AI Coding Assistant',
      category: 'AI Systems, Software Engineering',
      period: 'Nov 2025: Present',
      description:
        'Built an AI coding harness for real-time coding suggestions and repo-wide code generation/debugging via programming aligned LLMs.',
      bullets: [
        'Built an AI coding harness for real-time coding suggestions and repo-wide code generation/debugging via programming aligned LLMs; indexed 1,000+ files/min and achieved sub-2s TTFT using dependency graphs, semantic search, and RAG.',
        'Debugged and optimized production bottlenecks in FastAPI/Node.js backends, attaining sub-1s message latency; implemented LLM-driven Plan Mode and testing blocks for reliable code generation and execution.',
        'Engineered a FastAPI/Node.js backend combining REST APIs and WebSocket communication, supporting 10+ simultaneous users with low message latency.',
      ],
      tags: ['React', 'FastAPI', 'Node.js', 'WebSocket', 'Tree-sitter', 'LLMs'],
      github: 'https://github.com/Saatwik-ss/Crystal',
      live: 'https://blaid.duckdns.org/',
    },
    {
      title: 'OptiMover - Multiplayer Game Platform & Adaptive AlphaZero',
      category: 'Full-stack, RL, Game AI',
      period: 'Feb 2025: Apr 2025',
      description:
        'Architected a full-stack multiplayer board-game platform with Prisma ORM, persistent sessions, Elo rankings, match history and multi-level AI agents.',
      bullets: [
        'Architected a full-stack multiplayer board-game platform with Prisma ORM, persistent sessions, Elo rankings, match history and multi-level Al agents; tested with 20+ concurrent users achieving sub-100ms real-time update latency.',
        'Integrated an AlphaZero-based reinforcement learning system using Monte Carlo Tree Search with policy/value networks for strategic board games, achieving 52-74% win rates against human players and baseline minimax algorithms.',
        'Addressed cold-start inefficiency through warm-start initialization with smaller CNN policy networks, reducing sample complexity and accelerating MCTS convergence versus standard self-play from scratch.',
        'Engineered state-dependent MCTS depth allocation, dynamically adapting rollout budgets and network capacity across domains such as Connect-4 and Chess for improved compute efficiency and convergence.',
        'Implemented an Elo-based ranking system with persistent users, matches, ratings, and game history while achieving sub-100ms real-time update latency.',
      ],
      tags: ['React', 'Node.js', 'TypeScript', 'WebSocket', 'Prisma', 'RL', 'AlphaZero'],
      github: 'https://github.com/Saatwik-ss/OptiMover',
      live: 'https://optimover-1.onrender.com',
    },
    {
      title: 'AIMVL GitHub for ML Models',
      category: 'Machine Learning Systems, MLOps',
      period: 'May 2025: Dec 2025',
      description:
        'Implemented a full-stack AI model registry supporting PyTorch, TensorFlow, and ONNX models with versioning, training, inference, lifecycle management, and deployment.',
      bullets: [
        'Implemented a full-stack Al model registry using React and Node.js, supporting PyTorch, TensorFlow, and ONNX models with versioning, training, inference, lifecycle management, and deployment through a unified interface.',
        'Designed 15+ training recipes across 8+ architectures and engineered an asynchronous scheduler for concurrent GPU-accelerated jobs with Bayesian hyperparameter optimization, achieving 10-30% performance gains over baseline configurations.',
        'Built an end-to-end reproducible ML pipeline with dataset versioning, artifact storage, and evaluation dashboards, reducing model deployment time from 1 hour to 5 minutes.',
      ],
      tags: ['React', 'Node.js', 'PyTorch', 'TensorFlow', 'ONNX', 'MLOps'],
      github: 'https://github.com/Saatwik-ss/ML-Models',
    },
    {
      title: 'PIRL - Physics-Informed Reinforcement Learning',
      category: 'RL, Control Theory, Scientific ML',
      period: 'Jan 2026 : Mar 2026',
      description:
        'Developed a framework combining physical constraints with deep reinforcement learning for optimal control of nonlinear systems.',
      bullets: [
        'Developed a framework combining physical constraints with deep reinforcement learning for optimal control of nonlinear systems, using physics-guided loss functions to enforce physical invariants during training.',
        'Achieved 8.7x lower training time than Vanilla PINN through smart initialization, eliminating costly hyperparameter tuning while improving training efficiency.',
        'Achieved 100% convergence across tested cases versus 33% for Vanilla PINN at λ=1 with R² ≥ 0.999 for inlet-velocity prediction.',
      ],
      tags: ['PIRL', 'PINNs', 'Reinforcement Learning', 'Optimal Control', 'Scientific ML'],
    },
    {
      title: 'Adaptive Multi-Horizon Decision Transformer (AMH-DT)',
      category: 'Reinforcement Learning, Finance',
      period: 'Jan 2026 : Present',
      status: 'Ongoing',
      description:
        'Developed hierarchical RL for multi-asset forecasting with hypergraph-based dependencies and regime-specific Decision Transformers.',
      bullets: [
        'Developed hierarchical RL for multi-asset forecasting with hypergraph-based dependencies and regime-specific Decision Transformers, improving stock performance by 18% over vanilla sequence-modelling architectures.',
        'Achieved 1.21 Sharpe ratio, 13% outperformance vs standard Decision Transformer, and 0.575% monthly alpha via adaptive policy routing with learned credit assignment across market regimes.',
        'Trained regime-specific Decision Transformers on K-step trajectories with return-to-go conditioning and L-BFGS turnover penalties, using adaptive policy routing based on learned credit assignment.',
      ],
      tags: ['Sequence Modelling', 'Reinforcement Learning', 'Finance', 'Decision Transformers'],
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
                {project.status && (
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
                )}
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