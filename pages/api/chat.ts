import type { NextApiRequest, NextApiResponse } from 'next';

const GROQ_API_KEY = "env.GROQ_API_KEY"; // Ensure this is set in your environment variables
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

if (!GROQ_API_KEY) {
  console.error('GROQ_API_KEY is not set in environment variables');
}

const systemPrompt = `You are Saatwik Tiwari's AI Career Copilot. You have comprehensive knowledge about Saatwik's background, projects, and expertise. Here's the information about Saatwik:

PERSONAL INFO:
- Name: Saatwik Tiwari
- Location: India
- Email: saatwik.mail@gmail.com
- Phone: +91 9045 330 144
// - LinkedIn: linkedin.com/in/hb jnkmmn bivsaatwiktiwari,
- GitHub: github.com/saatwiktiwari

EDUCATION:
- B.E. Mathematics and Computing at BITS Pilani, Goa (2024-Present)
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
    return res.status(500).json({ error: 'API configuration error' });
  }

  try {
    const { messages } = req.body as ChatRequest;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    // Convert messages to Groq format
    const conversationMessages: Message[] = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    console.log('Sending to Groq:', {
      model: 'llama-3.1-8b-instant',
      messageCount: conversationMessages.length,
    });

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
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
        error: responseData.error?.message || 'Failed to get response from Groq API' 
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
      error: error instanceof Error ? error.message : 'Internal server error' 
    });
  }
}
