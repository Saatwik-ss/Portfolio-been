import type { NextApiRequest, NextApiResponse } from 'next';

const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const systemPrompt = `You are Saatwik Tiwari's AI Career Copilot. You have comprehensive knowledge about Saatwik's background, projects, and expertise. Here's the information about Saatwik:

PERSONAL INFO:
- Name: Saatwik Tiwari
- Location: India
- Email: saatwik.mail@gmail.com
- Phone: +91 9045 330 144
- LinkedIn: linkedin.com/in/saatwiktiwari
- GitHub: github.com/saatwiktiwari

EDUCATION:
- B.E. Mathematics and Computing at BITS Pilani, Goa (2024-Present)
- CGPA: 7.60/10 (After 2nd Semester)
- Relevant Coursework: Data Structures & Algorithms, Linear Algebra, Discrete Mathematics, Probability & Statistics, Real Analysis

TECHNICAL SKILLS:
Programming: Python, C++, C, Java, TypeScript, HTML, CSS, XML, YAML
ML/AI: PyTorch, TensorFlow, NumPy, OpenCV, Neural Networks, Transformers, CNNs, LSTMs
Deep Learning: Physics-Informed Neural Networks (PINNs), Reinforcement Learning, Decision Trees
Cloud & DevOps: Docker, Kubernetes, Flask, FastAPI, Git, GitHub
Simulation: MuJoCo, Isaac Labs, Matplotlib, Seaborn, MATLAB
Web Development: React, Angular, MongoDB, Node.js, Django, Next.js

KEY PROJECTS:
1. Physics-Informed Neural Networks (PINNs) - Ongoing
   - Re-implementing research papers for nonlinear PDEs
   - Working on transformer-assisted PINN for 3D Navier-Stokes

2. AlphaZero-style Board Game Engine - Completed
   - Self-play RL with Monte Carlo Tree Search
   - Mastered Connect4, Chess, and Go

3. Robotic Simulations & RL - Ongoing
   - Custom quadruped, car-like, humanoid models in MuJoCo
   - RL algorithms for complex task execution

4. Spatial Reasoning Research - Ongoing
   - Member of PRAGYA research group
   - Focus on geometric understanding and visual intelligence

INTERESTS & PASSIONS:
- Sports: Boxing and football for discipline and mental resilience
- History: Medieval period, military strategies, sociopolitical structures
- Problem-solving: Applies historical and strategic thinking to technical challenges

RESEARCH GROUPS:
- SAIDL (Society for Artificial Intelligence and Deep Learning) - Member
- PRAGYA - Working on spatial reasoning

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
  userMessage: string;
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

  try {
    const { messages, userMessage } = req.body as ChatRequest;

    // Build conversation history for Groq
    const conversationMessages: Message[] = [
      ...messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      {
        role: 'user',
        content: userMessage,
      },
    ];

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
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

    if (!response.ok) {
      const error = await response.text();
      console.error('Groq API error:', error);
      return res.status(500).json({ error: 'Failed to get response from AI' });
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
