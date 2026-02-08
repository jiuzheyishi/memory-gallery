'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, X, Heart, Sparkles } from 'lucide-react';
import MonetBackground from '../components/MonetBackground';

export default function Report() {
  const [showFinalGift, setShowFinalGift] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <MonetBackground />
      
      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ background: 'linear-gradient(180deg, rgba(253,248,240,0.9) 0%, transparent 100%)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-4xl mx-auto">
          <Link href="/gallery">
            <motion.button whileHover={{ x: -5 }} className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-serif">返回画廊</span>
            </motion.button>
          </Link>
        </div>
      </motion.nav>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="max-w-2xl w-full">
          <div className="p-8 md:p-12 rounded-lg relative" style={{ background: `linear-gradient(135deg, #FDF8F0 0%, #F5EDE0 100%)`, boxShadow: `0 30px 60px rgba(0,0,0,0.15), inset 0 0 100px rgba(139, 119, 101, 0.1)`, border: '1px solid rgba(139, 119, 101, 0.2)' }}>
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-700/30" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-700/30" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-700/30" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-700/30" />

            <div className="text-center mb-8">
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">《时光策展案》</h1>
                <p className="text-xl font-serif text-gray-600">结案报告</p>
              </motion.div>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-700/50 to-transparent mx-auto my-4" />
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-6 text-center">
              <p className="text-gray-600 font-serif">调查周期：五年（NUS至今）</p>
            </motion.div>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="border-t border-amber-700/20 my-6" />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="space-y-4 mb-8">
              <h2 className="text-lg font-serif font-bold text-gray-700 mb-4">所有"神秘事件"均已破解：</h2>
              {[
                { icon: '🦁', text: '狮子玩偶 = 凌晨三点的刺绣' },
                { icon: '🍻', text: '第七座位 = 跨时区视频干杯' },
                { icon: '🌈', text: '彩虹伞 = 四人剧组制造的偶遇' },
                { icon: '🧸', text: '甜心病毒 = 室友的P图 surprise' },
                { icon: '🌼', text: '第零案件 = Operation Daisy' },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + index * 0.1 }} className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700 font-serif">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 }} className="my-8 p-6 rounded-lg text-center" style={{ background: 'linear-gradient(135deg, #F4E4C133, #E8C4C433)', border: '1px dashed rgba(139, 119, 101, 0.3)' }}>
              <p className="text-xl font-serif font-bold text-gray-800 mb-2">你以为是"被记录者"</p>
              <p className="text-xl font-serif font-bold text-gray-800">其实是"被守护者"</p>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8, type: 'spring' }} className="mt-4">
                <Heart className="w-8 h-8 text-red-400 mx-auto fill-red-400" />
              </motion.div>
            </motion.div>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.6, duration: 0.8 }} className="border-t border-amber-700/20 my-6" />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} className="text-right">
              <p className="text-gray-600 font-serif mb-1">策展人：niner</p>
              <p className="text-gray-500 font-serif text-sm">日期：2026.2.16</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="mt-10 text-center">
              <motion.button onClick={() => setShowFinalGift(true)} className="px-10 py-4 rounded-full text-lg font-medium" style={{ background: 'linear-gradient(135deg, #F4E4C1, #E8C4C4, #B8D4E3, #C4D4C4)', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-serif">查看最终祝福</span>
                  <Sparkles className="w-5 h-5" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showFinalGift && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.9)' }} onClick={() => setShowFinalGift(false)}>
            <motion.button onClick={() => setShowFinalGift(false)} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="relative max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white">
                <Image src="/images/final-gift.png" alt="最终祝福" width={600} height={800} className="w-full h-auto max-h-[70vh] object-contain" unoptimized priority />
                <div className="absolute inset-0 border-4 border-white/30 rounded-lg pointer-events-none" />
              </div>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center text-white/90 mt-6 font-serif text-lg max-w-md">
              愿我们的友谊如睡莲般永恒绽放 🪷
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
