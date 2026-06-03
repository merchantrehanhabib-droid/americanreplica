import { useEffect, useState } from "react";
import { X, Send, BookOpen } from "lucide-react";

const AGENT = {
  name: "Sarah",
  role: "Publishing Consultant",
  avatar: "/author-2.png",
};

type Message = { from: "agent" | "user"; text: string };

const INITIAL_MESSAGES: Message[] = [
  { from: "agent", text: "Hi there! 👋 Ready to publish your book? 📖" },
  { from: "agent", text: "I'm Sarah, your personal publishing consultant. What kind of book are you working on?" },
];

const QUICK_REPLIES = [
  "I have a manuscript ready",
  "I need a ghostwriter",
  "Tell me about pricing",
  "I want to self-publish",
];

export default function ChatPopup() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);

  /* Show after 30 s, only once per session */
  useEffect(() => {
    const seen = sessionStorage.getItem("chat-seen");
    if (seen) return;
    const timer = setTimeout(() => {
      setShow(true);
      setMessages(INITIAL_MESSAGES);
      setUnread(INITIAL_MESSAGES.length);
    }, 30_000);
    return () => clearTimeout(timer);
  }, []);

  function openChat() {
    setOpen(true);
    setUnread(0);
    sessionStorage.setItem("chat-seen", "1");
  }

  function dismiss() {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("chat-seen", "1");
  }

  function agentReply(userText: string) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      let reply = "Thanks for reaching out! One of our publishing experts will be in touch shortly. In the meantime, feel free to call us at +1 (800) 555-0199.";
      const t = userText.toLowerCase();
      if (t.includes("manuscript") || t.includes("ready"))
        reply = "That's exciting! Our editors and publishing team can get your manuscript publish-ready in as little as 2 weeks. Would you like a free consultation? 🚀";
      else if (t.includes("ghost") || t.includes("write"))
        reply = "We have an amazing team of U.S.-based ghostwriters covering every genre. They'll capture your unique voice perfectly. Want to see some samples? ✍️";
      else if (t.includes("pric") || t.includes("cost") || t.includes("package"))
        reply = "Our packages start at $999 and go up depending on the service. We also offer custom bundles! Want me to walk you through the options? 💰";
      else if (t.includes("self") || t.includes("publish"))
        reply = "Self-publishing is our specialty! We handle Amazon KDP, IngramSpark, distribution, and you keep 100% of your royalties. Want to learn more? 📚";
      setMessages((prev) => [...prev, { from: "agent", text: reply }]);
    }, 1400);
  }

  function sendMessage(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    agentReply(text);
  }

  if (!show && !open) return null;

  return (
    <div className="fixed bottom-24 left-5 z-50 flex flex-col items-start gap-2">

      {/* Open chat window */}
      {open ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-[320px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-200" style={{ maxHeight: 480 }}>
          {/* Header */}
          <div className="bg-navy px-4 py-3 flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <img
                src={AGENT.avatar}
                alt={AGENT.name}
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover border-2 border-gold"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-navy" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">{AGENT.name}</p>
              <p className="text-gray-400 text-xs">{AGENT.role} · Online now</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white transition-colors ml-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ minHeight: 200, maxHeight: 260 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                {msg.from === "agent" && (
                  <img src={AGENT.avatar} alt={AGENT.name} width={24} height={24} className="w-6 h-6 rounded-full object-cover mr-2 mt-1 flex-shrink-0" />
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-snug ${
                    msg.from === "user"
                      ? "bg-gold text-navy rounded-br-sm font-medium"
                      : "bg-white text-gray-700 shadow-sm rounded-bl-sm border border-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start items-end gap-2">
                <img src={AGENT.avatar} alt={AGENT.name} width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
                <div className="bg-white shadow-sm border border-gray-100 px-4 py-2.5 rounded-2xl rounded-bl-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-3 pt-2 pb-1 flex flex-wrap gap-1.5 bg-gray-50 border-t border-gray-100">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs bg-white border border-gold/50 text-navy font-semibold px-2.5 py-1.5 rounded-full hover:bg-gold hover:text-navy hover:border-gold transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex items-center gap-2 px-3 py-3 border-t border-gray-100 bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-8 h-8 bg-gold text-navy rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors disabled:opacity-40"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      ) : (
        /* Collapsed bubble — shown after 30 s */
        !dismissed && (
          <div className="flex flex-col items-start gap-2 animate-in slide-in-from-bottom-4 duration-300">
            {/* Chat bubble preview */}
            <div className="relative bg-white rounded-2xl rounded-bl-none shadow-xl border border-gray-100 px-4 py-3 max-w-[260px]">
              <button onClick={dismiss} className="absolute -top-2 -right-2 w-5 h-5 bg-gray-300 hover:bg-gray-400 text-white rounded-full flex items-center justify-center transition-colors">
                <X className="w-3 h-3" />
              </button>
              <p className="text-navy text-sm font-semibold leading-snug">
                Hi! Ready to publish your book? 📖
              </p>
              <p className="text-gray-500 text-xs mt-1">Chat with a publishing consultant →</p>
            </div>

            {/* Avatar button */}
            <button onClick={openChat} className="flex items-center gap-2 group">
              <div className="relative">
                <img
                  src={AGENT.avatar}
                  alt={AGENT.name}
                  width={52}
                  height={52}
                  className="w-13 h-13 rounded-full object-cover border-3 border-gold shadow-lg group-hover:scale-105 transition-transform"
                  style={{ width: 52, height: 52, borderWidth: 3 }}
                />
                <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                {unread > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {unread}
                  </span>
                )}
              </div>
              <div className="bg-navy text-white text-xs font-bold px-3 py-1.5 rounded-full shadow group-hover:bg-gold group-hover:text-navy transition-colors">
                Chat with {AGENT.name}
              </div>
            </button>
          </div>
        )
      )}
    </div>
  );
}
