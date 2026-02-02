
import React from 'react';

const HeartValentine: React.FC = () => {
  // Путь к твоему видео (проверь имя файла!)
  const videoUrl = '/images/my-video.mp4';  // ← измени my-video.mp4 на реальное имя твоего файла

  return (
    <div className="relative flex items-center justify-center scale-95 sm:scale-100 md:scale-110 lg:scale-120 mt-0 mb-6 animate-heartbeat">
      
      {/* Световые эффекты за сердцем */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-600 opacity-40 blur-[80px] rounded-full animate-pulse"></div>
      <div className="absolute inset-0 bg-yellow-200 opacity-20 blur-[50px] rounded-full animate-pulse delay-100"></div>

      {/* Контейнер SVG для сердца */}
      <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)] overflow-visible">
          <defs>
            {/* Маска для видео */}
            <clipPath id="heartClip">
              <path d="M100 185.35l-14.5-13.2C34 125.36 0 94.28 0 56.5 0 25.42 24.2 1 55 1c17.4 0 34.1 8.1 45 20.9C110.9 9.1 127.6 1 145 1c30.8 0 55 24.42 55 55.5 0 37.78-34 68.86-85.5 115.54L100 185.35z" />
            </clipPath>
            
            {/* Золотой градиент для рамки */}
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bf953f" />
              <stop offset="25%" stopColor="#fcf6ba" />
              <stop offset="50%" stopColor="#b38728" />
              <stop offset="75%" stopColor="#fbf5b7" />
              <stop offset="100%" stopColor="#aa771c" />
            </linearGradient>
          </defs>

          {/* Внешняя золотая рамка */}
          <path
            d="M100 185.35l-14.5-13.2C34 125.36 0 94.28 0 56.5 0 25.42 24.2 1 55 1c17.4 0 34.1 8.1 45 20.9C110.9 9.1 127.6 1 145 1c30.8 0 55 24.42 55 55.5 0 37.78-34 68.86-85.5 115.54L100 185.35z"
            fill="url(#goldGrad)"
            className="filter drop-shadow-[0_0_15px_rgba(252,246,186,0.9)]"
          />

          {/* Видео внутри сердца */}
          <g clipPath="url(#heartClip)">
            <foreignObject x="0" y="0" width="200" height="200">
              <div className="w-full h-full p-1.5">
                <div className="w-full h-full overflow-hidden" style={{ clipPath: 'path("M100 185.35l-14.5-13.2C34 125.36 0 94.28 0 56.5 0 25.42 24.2 1 55 1c17.4 0 34.1 8.1 45 20.9C110.9 9.1 127.6 1 145 1c30.8 0 55 24.42 55 55.5 0 37.78-34 68.86-85.5 115.54L100 185.35z")' }}>
                  
                  <video
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover brightness-110 contrast-110"
                    onError={(e) => {
                      console.error("Видео не загрузилось:", e);
                      // Можно добавить fallback фото сюда, если хочешь
                      // e.target.poster = '/images/fallback.jpg';
                    }}
                  />

                  {/* Эффект гламурного сияния поверх видео */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-white/30 pointer-events-none"></div>
                </div>
              </div>
            </foreignObject>
          </g>

          {/* Тонкая белая линия для блеска по краю */}
          <path
            d="M100 180l-13-12C36 122 5 92 5 56.5 5 28 28 5 55 5c16 0 32 8 45 20 13-12 29-20 45-20 27 0 50 22 50 51.5 0 35.5-31 65.5-82 112L100 180z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>

        {/* Сверкающие звезды */}
        <div className="absolute -top-4 left-1/4 text-3xl animate-pulse">✨</div>
        <div className="absolute top-1/4 -right-4 text-4xl animate-bounce delay-150">✨</div>
        <div className="absolute bottom-4 left-0 text-3xl animate-pulse delay-500">🌟</div>
        <div className="absolute -bottom-6 right-1/2 text-4xl animate-bounce">💖</div>
      </div>

      {/* Летающие блестки по краям */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-yellow-200/20 blur-2xl rounded-full animate-ping"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-pink-200/20 blur-2xl rounded-full animate-ping delay-1000"></div>
    </div>
  );
};

export default HeartValentine;