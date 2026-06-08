import { useState, useRef, useEffect } from 'react';

interface CopilotProps {
  isDark: boolean;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function Copilot({ isDark }: CopilotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! I\'m Saatwik\'s AI Career Copilot. Ask me anything about his projects, skills, experience, or goals.',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          userMessage: inputValue,
        }),
      });

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 z-40 ${
          isDark
            ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
        } shadow-lg hover:shadow-xl`}
        title="AI Career Copilot"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
            <path d="M6 11h8m-4-3v6" opacity="0" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-96 max-h-96 rounded-lg shadow-2xl flex flex-col transition-all duration-300 z-40 ${
          isDark
            ? 'bg-gray-900 border border-gray-800'
            : 'bg-white border border-gray-200'
        }`}>
          <div className={`p-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <h3 className="font-semibold">AI Career Copilot</h3>
            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Ask about projects, skills, or experience
            </p>
          </div>

          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
            isDark ? 'bg-black' : 'bg-gray-50'
          }`}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    message.role === 'user'
                      ? isDark
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-600 text-white'
                      : isDark
                      ? 'bg-gray-800 text-gray-200'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`px-4 py-2 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-current animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className={`p-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me something..."
                disabled={isLoading}
                className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors duration-200 disabled:opacity-50 ${
                  isDark
                    ? 'bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    : 'bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                }`}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className={`px-3 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 ${
                  isDark
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
