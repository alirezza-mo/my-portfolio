"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const PhysicsPlayground: React.FC = () => {
  const constraintsRef = useRef(null);

  const technologies = [
    { id: 1, name: "React", color: "bg-cyan-500" },
    { id: 2, name: "Next.js", color: "bg-white" },
    { id: 3, name: "Tailwind", color: "bg-blue-400" },
    { id: 4, name: "Framer", color: "bg-purple-500" },
    { id: 5, name: "TypeScript", color: "bg-blue-600" },
  ];

  return (
    <div className="relative w-full h-full bg-slate-900/50 flex items-center justify-center overflow-hidden p-10">
     
      <div 
        ref={constraintsRef} 
        className="w-full h-full border-2 border-dashed border-white/10 rounded-3xl relative flex flex-wrap gap-4 items-center justify-center"
      >
        <p className="absolute top-4 text-white/20 text-xs pointer-events-none">
          آیتم‌ها را بکشید و پرتاب کنید
        </p>

        {technologies.map((tech) => (
          <motion.div
            key={tech.id}
            drag
            dragConstraints={constraintsRef} 
            dragElastic={0.2} 
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} 
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            className={`${tech.color} px-6 py-3 rounded-2xl shadow-2xl cursor-grab flex items-center justify-center font-bold text-slate-950`}
          >
            {tech.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhysicsPlayground;