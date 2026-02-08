'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowLeft, Lock, Unlock } from 'lucide-react';
import MonetBackground from '../components/MonetBackground';
import CaseCard from '../components/CaseCard';

const cases = [
  {
    id: '001',
    caseNumber: 'CASE-001',
    title: '狮子的守护契约',
    imageSrc: '/images/case-001.jpg',
    frontStory: 'NUS狮子玩偶传说，凌晨三点出现在宿舍门口。是谁在深夜留下了这份神秘的毕业礼物？',
    backTruth: '真相：闺蜜们绣了一周的刺绣，学生时代的最后一课。那个凌晨三点的便签，是她们熬了三个通宵准备的惊喜。"给最勇敢的你，毕业快乐"——原来被守护的人，一直是你。',
    clueIcon: '🦁',
    clueText: '线索「凌晨三点的便签」已收集\n"给最勇敢的你，毕业快乐"',
    accentColor: '#F4E4C1',
  },
  {
    id: '002',
    caseNumber: 'CASE-002',
    title: '第七个座位的预留',
    imageSrc: '/images/case-002.jpg',
    frontStory: '七人桌只坐六人，第七位置酸梅汤续了三次。那个空位，是在等谁？',
    backTruth: '真相：给异国朋友开的云出席视频，废片成为正式合影。酸梅汤是特意为她点的，虽然隔着屏幕，但干杯的声音同步响起。距离从来不是缺席的理由，有些友谊可以跨越大洲。',
    clueIcon: '🍻',
    clueText: '线索「跨时区干杯记录」已收集\n"距离从来不是缺席的理由"',
    accentColor: '#E8C4C4',
  },
  {
    id: '003',
    caseNumber: 'CASE-003',
    title: '彩虹伞的时空坐标',
    imageSrc: '/images/case-003.jpg',
    frontStory: '重庆第13级台阶，彩虹伞从天而降。是巧合，还是有人精心策划的"偶遇"？',
    backTruth: '真相：四人剧组制造偶遇，爬六楼+打光+喷壶造雨。那把彩虹伞在闲鱼蹲了半个月，只为拍出"偶然"的浪漫。最好的友情，就是愿意为你制造一场雨，然后再为你撑起一把伞。',
    clueIcon: '🌈',
    clueText: '线索「剧组人员名单」已收集\n导演/摄影/道具/场务：闺蜜团',
    accentColor: '#B8D4E3',
  },
  {
    id: '004',
    caseNumber: 'CASE-004',
    title: '甜心病毒的源代码',
    imageSrc: '/images/case-004.jpg',
    frontStory: '相册被入侵，每次自拍神秘出现贴纸。是谁在深夜"篡改"了你的照片？',
    backTruth: '真相：室友凌晨四点学P图，讨论小熊左移5像素。她们建了一个"美学研究"群，专门研究怎么自然地出现在你的照片里。原来那些"不经意"的贴纸，都是爱的代码。',
    clueIcon: '🧸',
    clueText: '线索「室友群聊记录」已收集\n"小熊再左移5像素会不会太刻意"',
    accentColor: '#D4C4D4',
  },
  {
    id: '005',
    caseNumber: 'CASE-005',
    title: '第零号案件：花束的时区',
    imageSrc: '/images/case-005.jpg',
    frontStory: '2002.02.16的《金融时报》包装，凌晨5:20凭空出现。时间、地点、包装，一切都太过完美，是谁在暗中策划了这一切？',
    backTruth: '真相：全员共犯，五人小群"Operation Daisy"策划14天。那天的凌晨5:20，是她们约定好的"我爱你"时刻。最精密的计划，只为给你最自然的惊喜。',
    clueIcon: '🌼',
    clueText: '线索「绝密行动计划」已收集\n代号：雏菊行动 | 目标：制造惊喜',
    accentColor: '#C4D4C4',
  },
];

export default function Gallery() {
  const [foundClues, setFoundClues] = useState<Set<string>>(new Set());
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);

  const handleClueFound = (caseId: string) => {
    setFoundClues((prev) => {
      const newSet = new Set(prev);
      newSet.add(caseId);
      if (newSet.size === 5 && prev.size === 4) {
        setShowUnlockAnimation(true);
        setTimeout(() => setShowUnlockAnimation(false), 3000);
      }
      return newSet;
    });
  };

  const allCluesFound = foundClues.size === 5;

  return (
    <main className="min-h-screen relative overflow-hidden">
      <MonetBackground />
      
      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ background: 'linear-gradient(180deg, rgba(253,248,240,0.9) 0%, transparent 100%)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <motion.button whileHover={{ x: -5 }} className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-serif">返回</span>
            </motion.button>
          </Link>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-serif">线索收集</span>
            <div className="flex gap-1">
              {cases.map((c) => (
                <motion.div key={c.id} className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: foundClues.has(c.id) ? c.accentColor : '#e5e5e5' }} animate={foundClues.has(c.id) ? { scale: [1, 1.2, 1] } : {}}>
                  {foundClues.has(c.id) ? <Sparkles className="w-3 h-3 text-gray-700" /> : <Lock className="w-3 h-3 text-gray-400" />}
                </motion.div>
              ))}
            </div>
            <span className="text-sm font-bold text-gray-700">{foundClues.size}/5</span>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10 pt-24 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">调查档案室</h1>
            <p className="text-gray-600 font-serif">寻找线索，揭开真相，收集5个线索解锁最终报告</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <motion.div key={caseItem.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }}>
                <CaseCard {...caseItem} onClueFound={() => handleClueFound(caseItem.id)} isClueFound={foundClues.has(caseItem.id)} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {allCluesFound && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <Link href="/report">
              <motion.button className="px-8 py-4 rounded-full flex items-center gap-3 text-lg font-medium" style={{ background: 'linear-gradient(135deg, #F4E4C1, #E8C4C4, #B8D4E3)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} animate={{ boxShadow: ['0 10px 30px rgba(0,0,0,0.2)', '0 15px 40px rgba(244,228,193,0.5)', '0 10px 30px rgba(0,0,0,0.2)'] }} transition={{ boxShadow: { duration: 2, repeat: Infinity } }}>
                <Unlock className="w-5 h-5" />
                <span className="font-serif">查看结案报告</span>
                <Sparkles className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showUnlockAnimation && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none" style={{ background: 'rgba(0,0,0,0.3)' }}>
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.5, opacity: 0 }} className="text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1 }} className="text-6xl mb-4">🔓</motion.div>
              <h2 className="text-3xl font-serif font-bold text-white mb-2">所有线索已收集</h2>
              <p className="text-white/80">结案报告已解锁</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
