'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MonetBackground from './components/MonetBackground';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <MonetBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block px-6 py-2 mb-6 rounded-full"
            style={{ background: 'linear-gradient(135deg, #E8C4C4cc, #B8D4E3cc)', backdropFilter: 'blur(10px)' }}
          >
            <span className="text-gray-700 font-medium">五卷温情档案 · 待开启</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4" style={{ background: 'linear-gradient(135deg, #8B7355, #A0826D, #8B7355)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            时光策展案
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-serif italic">印象派记忆画廊</p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="max-w-2xl text-center text-gray-600 mb-12 text-lg leading-relaxed">
          表面是悬疑解谜，翻开是友情故事<br />收集5个线索，解锁温暖真相
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
          <Link href="/gallery">
            <motion.button
              className="group relative px-12 py-5 rounded-full text-xl font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'linear-gradient(135deg, #F4E4C1, #E8C4C4, #B8D4E3)', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
            >
              <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} initial={{ x: '-100%' }} whileHover={{ x: '100%' }} transition={{ duration: 0.6 }} />
              <span className="relative z-10 text-gray-800 font-serif">开启调查</span>
            </motion.button>
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.2, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} className="w-2 h-2 rounded-full" style={{ background: ['#F4E4C1', '#E8C4C4', '#B8D4E3', '#C4D4C4', '#D4C4D4'][i] }} animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
