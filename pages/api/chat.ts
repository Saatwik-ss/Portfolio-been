import type { NextApiRequest, NextApiResponse } from 'next';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const systemPrompt = `You are Saatwik Tiwari's AI Career Copilot. You have comprehensive knowledge about Saatwik's background, projects, and expertise. Here's the information about Saatwik:

PERSONAL INFO:
- Name: Saatwik Tiwari
- Location: India
- Email: saatwik.mail@gmail.com
- Phone: +91 9045 330 144
- LinkedIn: linkedin.com/in/saatwik-tiwari-336b86301
- GitHub: github.com/Saatwik-ss

EDUCATION:
- B.E. Mathematics and Computing at BITS Pilani, Goa (2024-Present)
- Relevant Coursework: Data Structures & Algorithms, Linear Algebra, Discrete Mathematics, Probability & Statistics, Real Analysis

WORK EXPERIENCE:
1. Intern | Caarya Innovative (May 2026: July 2026 | Remote)
   - BITS Pilani Practice School-I Program.
   - Built and deployed an AI-powered Root Cause Analysis (RCA) agent using React, Node.js, and LLM-based prompt engineering.

2. Research Intern | TCS-Research, DATA-LAB (Jan 2026: Apr 2026 | Remote)
   - Collaborated with researchers from TCS-Research through BITS Data-Lab on cutting-edge LLM research.
   - Assisted in design, implementation, and evaluation of methodologies for analyzing and mitigating sycophantic behavior in LLMs.
   - Achieved 25% improvement over contemporary sycophancy-reducing pipelines.
   - Research paper on LLM sycophancy currently under peer review.

3. Course Mentor | Center for Technical Education, BITS Pilani (Jan 2025: Mar 2025 | Goa, India)
   - Conducted ML fundamentals sessions for 60+ freshman students.
   - Explained probability, linear algebra, and basic machine learning concepts.

4. Research Member | SAiDL
   - Reinforcement learning, deep learning, transformer-based architectures, AI research projects.

5. Research Member | DataLab
   - Data science and ML research, model development, statistical analysis.

TECHNICAL SKILLS:
Languages: C++, Python, TypeScript, JavaScript, Java, C, SQL
Web Technologies: React.js, Node.js, FastAPI, Flask, Express.js, WebSockets, HTML/CSS, Prisma ORM
Databases & Storage: PostgreSQL, MongoDB, Redis
ML/AI Tools: PyTorch, TensorFlow, ONNX, JAX, ChromaDB
DevOps & Tools: Git, Linux, AWS, GitHub
Other: REST APIs, Machine Learning, Pandas, NumPy

KEY PROJECTS:
1. Crystal: AI Coding Assistant (Nov 2025: Present)
   - GitHub: https://github.com/Saatwik-ss/Crystal
   - Live: https://blaid.duckdns.org/
   - End-to-end AI coding assistant using React, FastAPI, Node.js, and WebSocket.
   - Context-aware sidebar with < 2s TTFT; Tree-sitter indexing > 1,000 files/min.

2. OptiMover: Multiplayer Board Game Platform (Feb 2025: Apr 2025)
   - GitHub: https://github.com/Saatwik-ss/OptiMover
   - Live: https://optimover-1.onrender.com
   - Full-stack multiplayer with React, Node.js, TypeScript, WebSocket, Prisma.
   - AlphaZero RL model with 52–74% win rate; Elo ranking; sub-100ms updates.

3. AIMvL: GitHub for ML Models (May 2025: Dec 2025)
   - GitHub: https://github.com/Saatwik-ss/ML-Models
   - AI model registry with React, FastAPI, Node.js (PyTorch, TensorFlow, ONNX).
   - Training scheduler with Bayesian HPO and evaluation across 10+ models.

4. Differential Actor (Jan 2026 : Mar 2026) | Reinforcement Learning, Mathematics
   - Physics-informed reinforcement learning (PIRL) for optimal control of non-linear systems with input constraints.
   - Coupled PINNs with asymptotic stability loss and policy iteration constraints for value function and control policy.
   - Physics-guided losses that enforce physical invariants without explicit dynamic models or extensive rollout data.

INTERESTS & PASSIONS:
- Sports: Boxing and football
- History: Medieval period, military strategies, sociopolitical structures

When users ask about Saatwik:
1. Provide accurate, detailed information about projects and skills
2. Highlight relevant experience for their inquiry
3. Be professional but personable
4. Suggest how Saatwik's skills might apply to their questions
5. Offer contact information when appropriate

Always be helpful, accurate, and professional. If asked something not in the knowledge base, say "I don't have that specific information, but I can help with what I know about Saatwik's background."`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  messages: Message[];
}

interface ChatResponse {
  reply: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!GROQ_API_KEY) {
    console.error('GROQ_API_KEY is missing');
    return res.status(500).json({ error: 'API configuration error: set GROQ_API_KEY in .env.local' });
  }

  try {
    const { messages } = req.body as ChatRequest;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    const conversationMessages: Message[] = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          ...conversationMessages,
        ],
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Groq API error:', {
        status: response.status,
        statusText: response.statusText,
        error: responseData,
      });

      return res.status(response.status).json({
        error: responseData.error?.message || 'Failed to get response from Groq API',
      });
    }

    if (!responseData.choices?.[0]?.message?.content) {
      console.error('Unexpected Groq response format:', responseData);
      return res.status(500).json({ error: 'Invalid response format from Groq' });
    }

    const reply = responseData.choices[0].message.content;

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
}
