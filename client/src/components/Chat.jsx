import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'other', time: '10:30 AM' },
    { id: 2, text: 'Hi there!', sender: 'me', time: '10:31 AM' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="flex h-screen w-full bg-whatsapp-teal">
      {/* Sidebar */}
     

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-whatsapp-chat-bg bg-chat-pattern">
        {/* Chat Header */}
        <div className="bg-whatsapp-green p-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
          <div>
            <h2 className="font-medium text-white">User 1</h2>
            <p className="text-xs text-white/90">online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[65%] rounded-lg p-2 ${
                  msg.sender === 'me'
                    ? 'bg-[#65ae95]'
                    : 'bg-white'
                } shadow`}
              >
                <p className="text-gray-800">{msg.text}</p>
                <div className="flex justify-end">
                  <span className="text-xs text-gray-500 mt-1">{msg.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-black p-4">
          <form onSubmit={handleSendMessage} className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="flex-1 py-2 px-4 bg-white rounded-full focus:outline-none text-gray-700"
            />
            <button
              type="submit"
              className="ml-2 bg-whatsapp-light-green p-2 rounded-full text-white hover:bg-whatsapp-green transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
