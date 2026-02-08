'use client';

import { useEffect, useRef } from 'react';

export default function MonetBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = {
      yellow: { r: 244, g: 228, b: 193 },
      pink: { r: 232, g: 196, b: 196 },
      blue: { r: 184, g: 212, b: 227 },
      green: { r: 196, g: 212, b: 196 },
      purple: { r: 212, g: 196, b: 212 },
      waterLily: { r: 232, g: 244, b: 248 },
    };

    const blobs = [
      { x: 0.3, y: 0.3, radius: 0.4, color: colors.yellow, speed: 0.0003, phase: 0 },
      { x: 0.7, y: 0.4, radius: 0.35, color: colors.pink, speed: 0.0004, phase: Math.PI / 3 },
      { x: 0.5, y: 0.7, radius: 0.45, color: colors.blue, speed: 0.00035, phase: Math.PI * 2 / 3 },
      { x: 0.2, y: 0.6, radius: 0.3, color: colors.green, speed: 0.00025, phase: Math.PI },
      { x: 0.8, y: 0.6, radius: 0.38, color: colors.purple, speed: 0.00045, phase: Math.PI * 4 / 3 },
      { x: 0.5, y: 0.5, radius: 0.5, color: colors.waterLily, speed: 0.0002, phase: Math.PI * 5 / 3 },
    ];

    const animate = () => {
      timeRef.current += 1;
      const t = timeRef.current;

      ctx.fillStyle = '#FDF8F0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        const centerX = canvas.width * (blob.x + Math.sin(t * blob.speed + blob.phase) * 0.1);
        const centerY = canvas.height * (blob.y + Math.cos(t * blob.speed * 0.7 + blob.phase) * 0.08);
        const radius = Math.min(canvas.width, canvas.height) * blob.radius;

        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, radius
        );

        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.6)`);
        gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.3)`);
        gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 8;
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
      }
      ctx.putImageData(imageData, 0, 0);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ 
        background: 'linear-gradient(135deg, #FDF8F0 0%, #F4E4C1 25%, #E8C4C4 50%, #B8D4E3 75%, #C4D4C4 100%)',
      }}
    />
  );
}
