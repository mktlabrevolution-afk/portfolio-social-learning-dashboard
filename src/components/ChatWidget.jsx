import { useState, useRef, useEffect } from 'react';
import { MessageSquareText, X, Send, Bot, User, Loader2 } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', content: 'Hola. Soy el asistente estratégico del Dashboard de Competitividad. Puedo responder tus dudas sobre el análisis de Teclab, IPP y Onmex. ¿En qué te puedo ayudar?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const history = [...messages];
    
    setMessages([...history, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content, history })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'model', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', content: `Error: ${data.error || 'Algo salió mal.'}` }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: 'Error de conexión con el servidor.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 bg-gradient-to-r"
        style={{ 
          background: 'linear-gradient(135deg, var(--accent-teclab) 0%, var(--accent-onmex) 100%)',
          display: isOpen ? 'none' : 'flex',
          border: 'none',
          cursor: 'pointer',
          color: '#000'
        }}
      >
        <MessageSquareText size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-6 right-6 z-50 flex flex-col glass-panel"
          style={{ 
            width: '380px', 
            height: '600px', 
            maxHeight: '90vh',
            maxWidth: '90vw',
            padding: 0,
            background: 'var(--bg-secondary)',
            borderColor: 'var(--accent-teclab)',
            boxShadow: '0 20px 40px rgba(0,229,255,0.1)'
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="flex items-center gap-sm">
              <Bot className="teclab-text" size={24} color="var(--accent-teclab)" />
              <h3 className="font-semibold text-lg">Asistente Estratégico</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-secondary hover:text-primary bg-transparent border-none cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-sm">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-sm ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary text-black' : 'bg-secondary text-primary'}`}
                     style={{ background: msg.role === 'user' ? 'var(--text-primary)' : 'var(--bg-tertiary)' }}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} color="var(--accent-teclab)" />}
                </div>
                
                <div 
                  className={`p-3 rounded-lg text-sm max-w-[80%] whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-opacity-20' 
                      : 'border'
                  }`}
                  style={{ 
                    background: msg.role === 'user' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.3)',
                    borderColor: msg.role === 'user' ? 'transparent' : 'rgba(255,255,255,0.05)',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-sm flex-row">
                 <div className="p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0" style={{ background: 'var(--bg-tertiary)' }}>
                  <Bot size={16} color="var(--accent-teclab)" />
                </div>
                <div className="p-3 rounded-lg border text-secondary flex items-center" style={{ background: 'rgba(0,0,0,0.3)', borderColor: 'rgba(255,255,255,0.05)' }}>
                  <Loader2 size={16} className="animate-spin" />
                  <span className="ml-2 text-sm italic">Analizando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t flex gap-sm" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre la competencia..."
              disabled={isLoading}
              className="flex-1 p-2 rounded bg-black bg-opacity-40 border text-primary"
              style={{ borderColor: 'rgba(255,255,255,0.1)', outline: 'none' }}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="p-2 rounded flex items-center justify-center border-none cursor-pointer transition-colors"
              style={{ 
                background: input.trim() ? 'var(--accent-teclab)' : 'var(--bg-tertiary)',
                color: input.trim() ? '#000' : 'var(--text-secondary)'
              }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
