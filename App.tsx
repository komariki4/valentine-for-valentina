import React, { useState, useEffect, useRef } from 'react';
import GlitterCanvas from './components/GlitterCanvas';
import HeartValentine from './components/HeartValentine';
import Cupid from './components/Cupid';
import FallingDecorations from './components/FallingDecorations';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  // Для музыки
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Опционально: тихая громкость по умолчанию
    if (audioRef.current) {
      audioRef.current.volume = 0.25; // 25% — не оглушает
    }
  }, []);

  if (!mounted) return null;

  // Функция включения музыки
  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;           // снимаем mute
      audioRef.current.play().catch(err => {
        console.log("Автозапуск заблокирован:", err);
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-['Montserrat'] bg-[#c9184a]">
      {/* Фоновый слой с блестками */}
      <GlitterCanvas />
      
      {/* Падающие сердечки и розы */}
      <FallingDecorations />
      
      {/* Декоративные размытые пятна */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-400 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-red-500 opacity-20 blur-[150px] rounded-full"></div>

      {/* Аудио элемент — скрытый */}
      <audio ref={audioRef} loop>
        <source src="/music/romantic-valentine-loop.mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио.
      </audio>

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 px-4 text-center w-full max-w-5xl pt-20 sm:pt-10 md:pt-16 lg:pt-18 -translate-y-4 sm:-translate-y-6 md:-translate-y-8">
        {/* Заголовок с отступом сверху */}
        <h1 className="gold-text font-['Great_Vibes'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] sm:leading-[1.25] md:leading-[1.3] drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] px-2 md:px-4 pt-2 sm:pt-4 mb-8 sm:mb-4 md:mb-8 lg:mb-12">
          С днем святого Валентина,<br className="sm:hidden" /> , сладкая
        </h1>

        {/* Сердце */}
        <div className="mt-6 sm:mt-8 md:mt-10 scale-100 sm:scale-110 md:scale-125">
          <HeartValentine />
        </div>
      </div>

      {/* Кнопка включения музыки — фиксированная внизу справа */}
      <button
        onClick={playMusic}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-red-600 text-white px-5 py-3 rounded-full shadow-xl hover:from-pink-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 z-50 flex items-center gap-2 font-medium"
      >
        ♡ Включить музыку ♡
      </button>

      {/* Купидоны */}
      <Cupid position={{ top: '5%', left: '5%' }} delay={0} />
      <Cupid position={{ top: '80%', left: '85%' }} delay={1.5} />
      <Cupid position={{ top: '10%', right: '10%' }} delay={3} mirrored />
      <Cupid position={{ bottom: '10%', left: '10%' }} delay={4.5} />
      <Cupid position={{ bottom: '40%', right: '5%' }} delay={2.2} mirrored />
    </div>
  );
};

export default App;