"use client";
import React, { useRef, useEffect } from "react";

const ParticleScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    const mouse = { x: 0, y: 0, radius: 100 };

    // تنظیم اندازه بوم
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      x: number; y: number; size: number;
      speedX: number; speedY: number; color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = "#8B5CF6"; // headingTextDark
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // برخورد با لبه‌ها
        if (this.x > canvas!.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas!.height || this.y < 0) this.speedY *= -1;

        // واکنش به موس
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          this.x -= dx / 20;
          this.y -= dy / 20;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      setCanvasSize();
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", init);
    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    init();
    animate();

    return () => window.removeEventListener("resize", init);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full bg-surfaceDark/20 rounded-2xl cursor-crosshair"
    />
  );
};

export default ParticleScene;