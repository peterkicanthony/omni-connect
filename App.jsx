import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, Layout, PlayCircle, ShoppingBag, 
  Search, Send, Heart, MessageSquare, Share2, 
  Moon, Sun, ShieldCheck, Lock, Sparkles, Plus
} from 'lucide-react';

export default function OmniEliteApp() {
  const [activeTab, setActiveTab] = useState('chat');
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} h-screen flex bg-gray-100 dark:bg-black text-slate-900 dark:text-white`}>
      {/* Sidebar Lateral */}
      <nav className="w-20 md:w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 flex flex-col p-4">
        <div className="flex items-center gap-3 mb-10 text-orange-600 px-2">
          <Sparkles size={32} />
          <span className="hidden md:block font-black text-xl">OMNI ELITE</span>
        </div>

        <div className="space-y-2 flex-1">
          <MenuBtn icon={<MessageCircle />} label="Conversas" active={activeTab === 'chat'} onClick={() => setActiveTab('chat')} />
          <MenuBtn icon={<Layout />} label="Feed" active={activeTab === 'feed'} onClick={() => setActiveTab('feed')} />
          <MenuBtn icon={<PlayCircle />} label="Reels" active={activeTab === 'reels'} onClick={() => setActiveTab('reels')} />
          <MenuBtn icon={<ShoppingBag />} label="Marketplace" active={activeTab === 'market'} onClick={() => setActiveTab('market')} />
        </div>

        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center gap-4">
          {isDarkMode ? <Sun className="text-yellow-500" /> : <Moon />}
          <span className="hidden md:block font-bold text-sm">Trocar Tema</span>
        </button>
      </nav>

      {/* Conteúdo Principal */}
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'chat' && <ChatView />}
        {activeTab === 'feed' && <FeedView />}
        {activeTab === 'reels' && <ReelsView />}
        {activeTab === 'market' && <MarketView />}
      </main>
    </div>
  );
}

function MenuBtn({ icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all ${active ? 'bg-orange-600 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800'}`}>
      {icon} <span className="hidden md:block font-bold text-sm">{label}</span>
    </button>
  );
}

function ChatView() {
  return (
    <div className="flex h-full">
      <div className="w-full md:w-80 bg-white dark:bg-slate-950 border-r dark:border-slate-800 p-4">
        <h2 className="text-xl font-black mb-4">WhatsApp Omni</h2>
        <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-slate-900 rounded-2xl border border-orange-100 dark:border-slate-800">
          <div className="w-12 h-12 rounded-full bg-orange-500" />
          <div className="flex-1">
            <div className="flex justify-between"><span className="font-bold text-sm">Gráfica Kino</span><span className="text-[10px] opacity-50">16:58</span></div>
            <p className="text-xs opacity-60 truncate">Vinil perfurado 1 metro é quanto</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50 dark:bg-slate-950 flex-col">
        <Lock className="mb-4 opacity-20" size={64} />
        <p className="text-sm font-bold opacity-30 uppercase tracking-widest">Criptografia de ponta a ponta</p>
      </div>
    </div>
  );
}

function FeedView() {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border dark:border-slate-800">
        <div className="flex gap-3 mb-6"><div className="w-10 h-10 rounded-full bg-orange-600" /><span className="font-bold">Peter Anthony</span></div>
        <p className="text-lg leading-relaxed mb-6">Estoy buscando 3 nuevos editores para mi equipo. Material tipo reels. Escribir al DM!</p>
        <div className="flex gap-6 border-t dark:border-slate-800 pt-4">
          <button className="flex items-center gap-2"><Heart size={20} /> 120</button>
          <button className="flex items-center gap-2"><MessageSquare size={20} /> 15</button>
        </div>
      </div>
    </div>
  );
}

function ReelsView() {
  return (
    <div className="h-full bg-black flex justify-center py-4">
      <div className="h-full aspect-[9/16] bg-slate-900 rounded-[32px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <p className="font-bold mb-2">@grzwthz</p>
          <p className="text-sm opacity-80">Você gostou da atitude que ela tomou? 🏎️</p>
        </div>
        <div className="absolute right-4 bottom-20 space-y-6 flex flex-col items-center">
          <div className="flex flex-col items-center"><Heart size={28} /> <span className="text-[10px]">632k</span></div>
          <div className="flex flex-col items-center"><MessageSquare size={28} /> <span className="text-[10px]">4482</span></div>
        </div>
      </div>
    </div>
  );
}

function MarketView() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border dark:border-slate-800">
        <div className="h-48 bg-gray-200" />
        <div className="p-4">
          <p className="text-orange-600 font-black text-xl mb-1">7999 US$</p>
          <p className="font-bold text-sm">2017 Dodge Challenger SXT Coupe</p>
        </div>
      </div>
    </div>
  );
}
