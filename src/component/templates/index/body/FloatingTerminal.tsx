"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCommandLine, HiXMark } from "react-icons/hi2";

const FloatingTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "System v1.0.0 initialized...",
    "Type 'help' to see available commands."
  ]);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, () => string | void> = {
    help: () => "Available commands:\n- about: Short biography\n- skills: Technical stack\n- lab: Go to experiments\n- resume: Download CV\n- contact: Social links\n- clear: Clear screen",
    about: () => "I'm a Frontend Developer focused on creative coding, 3D interfaces, and high-performance web apps.",
    skills: () => "• Core: React, Next.js, TypeScript\n• Styling: Tailwind CSS, Framer Motion\n• 3D: Three.js, WebGL\n• Tools: Git, Redux, Node.js",
    lab: () => {
      window.location.href = "/lab";
      return "Redirecting to Lab...";
    },
    resume: () => {
      window.open("/resume.pdf", "_blank");
      return "Opening resume in new tab...";
    },
    contact: () => "Email: alirezza.dev2@gmail.com\nLinkedIn: linkedin.com/in/alirezza-mo\nGitHub: github.com/alirezza-mo",
    clear: () => {
      setHistory([]);
      return "";
    } ,
    matrix: () => {
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    setTimeout(() => document.body.style.filter = "none", 2000);
    return "Matrix mode activated... just kidding!";
  }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.visualViewport) {
      const handleResize = () => {
        const vv = window.visualViewport;
        const offset = window.innerHeight - (vv?.height || window.innerHeight);
        setKeyboardHeight(offset > 0 ? offset : 0);
      };
      window.visualViewport.addEventListener("resize", handleResize);
      return () => window.visualViewport?.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = input.toLowerCase().trim();
    if (!cleanInput) return;

    let response = "";
    if (commands[cleanInput]) {
      const result = commands[cleanInput]();
      if (cleanInput === "clear") return;
      response = result as string;
    } else {
      response = `Command not found: ${cleanInput}. Type 'help' for assistance.`;
    }

    setHistory((prev) => [...prev, `user@portfolio:~$ ${input}`, response]);
    setInput("");
  };

  return (
    <div 
      className="fixed z-[9999] transition-all duration-300 ease-out"
      style={{ 
        bottom: keyboardHeight > 0 ? `${keyboardHeight + 20}px` : "24px",
        left: "24px" 
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="mb-4 w-[88vw] md:w-[420px] bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col"
            style={{ maxHeight: keyboardHeight > 0 ? "35vh" : "450px" }}
          >
            {/* Window Header */}
            <div className="bg-white/5 p-3.5 flex justify-between items-center border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Main Terminal</span>
              <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
                <HiXMark className="text-lg" />
              </button>
            </div>

            <div 
              ref={scrollRef} 
              className="p-5 h-72 overflow-y-auto font-mono text-xs md:text-sm text-gray-300 space-y-2 leading-relaxed custom-scrollbar text-left"
              dir="ltr"
            >
              {history.map((line, i) => (
                <div key={i} className={`whitespace-pre-line ${line.startsWith("user") ? "text-cyan-400 font-bold" : "opacity-90"}`}>
                  {line}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="p-4 bg-white/5 flex gap-3 items-center border-t border-white/5" dir="ltr">
              <span className="text-cyan-500 font-mono font-bold">$</span>
              <input
                autoFocus
                className="bg-transparent border-none outline-none text-white font-mono text-sm flex-1 placeholder:text-white/10"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'help'..."
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border transition-all duration-500 ${
          isOpen 
          ? "bg-red-500/10 border-red-500/50 text-red-500 rotate-90" 
          : "bg-headingTextDark border-white/20 text-white hover:border-cyan-500/50 shadow-cyan-500/10"
        }`}
      >
        <HiCommandLine className="text-2xl" />
      </motion.button>
    </div>
  );
};

export default FloatingTerminal;