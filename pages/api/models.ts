import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not set.' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/models', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (_) {
      data = { error: responseText };
    }

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error instanceof Error ? error.message : 'Internal server error' });
  }
}
