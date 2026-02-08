'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Search } from 'lucide-react';

interface CaseCardProps {
  caseNumber: string;
  title: string;
  imageSrc: string;
  frontStory: string;
  backTruth: string;
  clueIcon: string;
  clueText: string;
  accentColor: string;
  onClueFound: () => void;
  isClueFound: boolean;
}

export default function CaseCard({
  caseNumber,
  title,
  imageSrc,
  frontStory,
  backTruth,
  clueIcon,
  clueText,
  accentColor,
  onClueFound,
  isClueFound,
}: CaseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showClue, setShowClue] = useState(false);

  const handleClueClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isClueFound) {
      setShowClue(true);
      onClueFound();
      setTimeout(() => {
        setIsFlipped(true);
        setShowClue(false);
      }, 1500);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto" style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <div className="relative w-full" style={{ backfaceVisibility: 'hidden' }}>
          <motion.div className="cursor-pointer" whileHover={{ y: -5 }}>
            <div
              className="p-4 rounded-xl relative"
              style={{
                background: `linear-gradient(145deg, ${accentColor}ee, ${accentColor}bb)`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.1)`,
              }}
            >
              <div className="absolute inset-3 border-2 border-white/30 rounded-lg pointer-events-none" />
              
              <div className="flex justify-between items-center mb-3">
                <span
                  className="px-3 py-1 text-sm font-bold text-white rounded-full"
                  style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}99)` }}
                >
                  {caseNumber}
                </span>
                {isClueFound && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-yellow-500">
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                )}
              </div>

              <div className="relative overflow-hidden rounded-lg bg-white">
                <Image src={imageSrc} alt={title} width={400} height={300} className="w-full h-auto object-cover" unoptimized />
              </div>

              <h3 className="mt-4 text-xl font-serif font-bold text-center text-gray-800">{title}</h3>
              <p className="mt-3 text-sm text-center text-gray-600 px-2 leading-relaxed">{frontStory}</p>

              <div className="mt-4">
                <motion.button
                  onClick={handleClueClick}
                  disabled={isClueFound}
                  className="w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: isClueFound ? '#C4D4C4' : `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                  whileHover={!isClueFound ? { scale: 1.02 } : {}}
                  whileTap={!isClueFound ? { scale: 0.98 } : {}}
                >
                  <span className="text-xl">{clueIcon}</span>
                  <span className="font-medium text-gray-800">{isClueFound ? '线索已收集' : '寻找线索'}</span>
                  {!isClueFound && <Search className="w-4 h-4 text-gray-600" />}
                </motion.button>
              </div>

              <p className="mt-3 text-xs text-center text-gray-400">点击"寻找线索"揭开真相</p>
            </div>
          </motion.div>
        </div>

        <div
          className="absolute inset-0 w-full"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <motion.div className="h-full cursor-pointer" onClick={() => setIsFlipped(false)}>
            <div
              className="h-full p-6 rounded-xl flex flex-col"
              style={{
                background: `linear-gradient(135deg, #FDF8F0 0%, #F5EDE0 100%)`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.15), inset 0 0 60px rgba(139, 119, 101, 0.1)`,
                border: `3px solid ${accentColor}99`,
                minHeight: '400px',
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-gray-500">{caseNumber}</span>
                <button onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }} className="text-gray-400 hover:text-gray-600">✕</button>
              </div>

              <h4 className="text-xl font-serif font-bold text-gray-800 mb-4 text-center">🔍 真相档案</h4>
              <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: accentColor }} />
              <p className="text-gray-700 leading-relaxed font-serif text-base flex-grow">{backTruth}</p>
              <p className="mt-4 text-xs text-center text-gray-400">点击返回正面</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showClue && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div
              className="p-6 rounded-xl max-w-xs text-center"
              style={{ background: 'linear-gradient(135deg, #FDF8F0, #F4E4C1)', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', border: `2px solid ${accentColor}` }}
            >
              <div className="text-4xl mb-3">{clueIcon}</div>
              <p className="font-serif text-gray-800 whitespace-pre-line">{clueText}</p>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-yellow-500">
                <Sparkles className="w-6 h-6 mx-auto" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
