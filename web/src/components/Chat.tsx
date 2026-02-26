import { useState } from 'react';
import type { ChatMessage } from '../types';

interface Props {
  messages: ChatMessage[];
}

export default function Chat({ messages: initialMessages }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    setMessages(prev => [
      ...prev,
      { role: 'user', content: input.trim(), time },
      { role: 'assistant', content: '正在思考中...', time },
    ]);
    setInput('');
    // Mock response
    setTimeout(() => {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: '这是一个 Demo 演示环境，实际使用时 AI 会根据您的文档内容给出专业回答。', time },
      ]);
    }, 1500);
  };

  if (!expanded) {
    return (
      <div
        onClick={() => setExpanded(true)}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors z-50"
      >
        <span className="text-sm text-gray-500">💬 有问题？点击展开对话</span>
        <span className="text-gray-400 text-xs">▲ 展开</span>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[45vh] bg-white border-t border-gray-200 flex flex-col z-50 shadow-lg">
      <div
        onClick={() => setExpanded(false)}
        className="flex items-center justify-between px-6 py-2.5 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-medium text-gray-700">💬 对话</span>
        <span className="text-gray-400 text-xs">▼ 收起</span>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] ${msg.role === 'user' ? 'order-1' : 'order-0'}`}>
              <div
                className={`px-4 py-2.5 rounded-2xl text-sm ${
                  msg.role === 'user'
                    ? 'bg-gold text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}
              >
                {msg.content}
              </div>
              <p className={`text-[10px] text-gray-400 mt-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.role === 'user' ? '👤' : '🤖'} {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-3 border-t border-gray-100">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="输入消息..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-gold text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors"
          >
            发送
          </button>
        </div>
      </div>
    </div>
  );
}
