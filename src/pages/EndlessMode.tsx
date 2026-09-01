import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

// HSL to HEX to ensure colors are valid
const hslToHex = (h: number, s: number, l: number) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

export const EndlessMode: React.FC = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(1); // One mistake and you die
  const [options, setOptions] = useState<string[]>([]);
  const [targetColor, setTargetColor] = useState('');
  const [gameOver, setGameOver] = useState(false);
  
  useEffect(() => {
    resetRound();
  }, []);

  const resetRound = () => {
    // Generate increasingly similar colors based on score
    const similarity = Math.min(30, 2 + score / 50); 
    const baseH = Math.floor(Math.random() * 360);
    const baseS = 60 + Math.floor(Math.random() * 40);
    const baseL = 40 + Math.floor(Math.random() * 20);

    const newColors = [];
    const count = score > 1000 ? 9 : (score > 300 ? 6 : 4);

    for(let i = 0; i < count; i++) {
        // Vary HSL slightly
        const h = (baseH + (Math.random() * similarity - similarity/2)) % 360;
        const s = Math.max(0, Math.min(100, baseS + (Math.random() * similarity - similarity/2)));
        const l = Math.max(0, Math.min(100, baseL + (Math.random() * similarity - similarity/2)));
        newColors.push(hslToHex(h, s, l));
    }
    setOptions(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * newColors.length)]);
  };

  const handleGuess = (color: string) => {
    if (gameOver) return;
    if (color === targetColor) {
        setScore(s => s + 10);
        resetRound();
    } else {
        setGameOver(true);
    }
  };

  const restart = () => {
      setScore(0);
      setGameOver(false);
      resetRound();
  };

  if (gameOver) {
      return (
          <>
            <div className="bg-grid"></div>
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 animate__animated animate__fadeIn">
                <h1 className="text-6xl font-game text-danger drop-shadow-lg">GAME OVER</h1>
                <div className="text-3xl">Endless Score: <span className="text-primary">{score}</span></div>
                <div className="flex gap-4 mt-8">
                    <Button onClick={restart} variant="primary" size="lg">Play Again</Button>
                    <Button onClick={() => navigate('/')} variant="outline" size="lg">Home</Button>
                </div>
            </div>
          </>
      );
  }

  const gridClass = options.length > 6 ? 'grid-cols-3' : 'grid-cols-2';

  return (
    <>
      <div className="bg-grid"></div>
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 animate__animated animate__fadeIn">
        <div className="flex justify-between w-full max-w-2xl px-4 mt-4 absolute top-4">
          <Button onClick={() => navigate('/')} variant="outline">Home</Button>
          <div className="text-2xl font-game flex gap-6 drop-shadow-md">
              <span className="text-primary">Score: {score}</span>
          </div>
        </div>
        
        <h1 className="text-4xl font-game mt-20">Endless Mode</h1>
        
        <div className="flex flex-col items-center gap-12 mt-8">
          <div 
            className="w-48 h-48 target-box transition-colors duration-200"
            style={{ backgroundColor: targetColor }}
          />
          
          <div className={`grid ${gridClass} gap-6`}>
            {options.map((color, idx) => (
              <div 
                key={idx}
                onClick={() => handleGuess(color)}
                className="w-24 h-24 sm:w-32 sm:h-32 color-box cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
