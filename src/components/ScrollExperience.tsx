import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(Math.max(currentProgress, 0), 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#8B1425] via-[#C61F37] to-[#ED2749] transition-all duration-75 ease-out relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Glow head indicator */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#ED2749] rounded-full blur-[4px] opacity-80 shadow-[0_0_12px_#ED2749]" />
      </div>
    </div>
  );
};

export const ScrollFloatingWidget: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const percent = Math.round((window.scrollY / totalScroll) * 100);
        setScrollPercent(percent);
        setIsVisible(window.scrollY > 350);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Radius for SVG circular progress
  const size = 44;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#0E0E12]/90 hover:bg-[#16161C] border border-white/15 text-white/80 hover:text-white shadow-xl hover:shadow-2xl hover:shadow-[#C61F37]/20 backdrop-blur-md transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label="Rolar para o topo"
            title="Voltar ao início"
          >
            {/* SVG Circular Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox={`0 0 ${size} ${size}`}
            >
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-white/10"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              {/* Progress circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-[#ED2749] transition-all duration-100 ease-out"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Icon */}
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-[#ED2749]" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ScrollAmbientParallax: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle floating ambient red glow shifting with scroll up/down */}
      <div
        className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#C61F37]/[0.025] blur-[120px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />
      <div
        className="absolute top-[55%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#8B1425]/[0.02] blur-[140px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translateY(${-scrollY * 0.06}px)`,
        }}
      />
      <div
        className="absolute top-[80%] left-[20%] w-[450px] h-[450px] rounded-full bg-[#C61F37]/[0.015] blur-[130px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      />
    </div>
  );
};
