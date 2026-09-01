import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

const generateColors = (count: number) => {
    const chars = '0123456789ABCDEF';
    const colors = [];
    for(let i = 0; i < count; i++) {
        let color = '#';
        for(let j=0; j<6; j++) color += chars[Math.floor(Math.random() * 16)];
        colors.push(color);
    }
    return colors;
};

export const MemoryMode: React.FC = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [sequence, setSequence] = useState<string[]>([]);
  const [playerSeq, setPlayerSeq] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [showing, setShowing] = useState(true);
  const [activeColor, setActiveColor] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const startLevel = (lvl: number) => {
      const palette = generateColors(4);
      setOptions(palette);
      const newSeq = [];
      for(let i=0; i<lvl+2; i++) {
          newSeq.push(palette[Math.floor(Math.random() * palette.length)]);
      }
      setSequence(newSeq);
      setPlayerSeq([]);
      setShowing(true);
  };

  useEffect(() => {
      if (gameOver) return;
      startLevel(level);
  }, [level, gameOver]);

  useEffect(() => {
      if (!showing || sequence.length === 0 || gameOver) return;
      
      let i = 0;
      const interval = setInterval(() => {
          setActiveColor(sequence[i]);
          setTimeout(() => setActiveColor(''), 500); // blank gap
          i++;
          if (i >= sequence.length) {
              clearInterval(interval);
              setTimeout(() => setShowing(false), 800);
          }
      }, 1000);

      return () => clearInterval(interval);
  }, [sequence, showing, gameOver]);

  const handleGuess = (color: string) => {
      if (showing || gameOver) return;

      const newPlayerSeq = [...playerSeq, color];
      setPlayerSeq(newPlayerSeq);

      // Check correctness
      const currentIndex = newPlayerSeq.length - 1;
      if (sequence[currentIndex] !== color) {
          const newLives = lives - 1;
          setLives(newLives);
          if (newLives <= 0) {
              setGameOver(true);
          } else {
              // Retry same level
              setPlayerSeq([]);
              setShowing(true);
          }
          return;
      }

      if (newPlayerSeq.length === sequence.length) {
          // Success! Next level
          setLevel(l => l + 1);
      }
  };

  const restart = () => {
      setLevel(1);
      setLives(3);
      setGameOver(false);
  };

  if (gameOver) {
      return (
          <div className="bg-grid"></div>
    <div className="flex flex-col animate__animated animate__fadeIn" items-center justify-center min-h-screen gap-6">
              <h1 className="text-4xl font-bold text-danger">GAME OVER</h1>
              <div className="text-2xl">Reached Level: {level}</div>
              <div className="flex gap-4 mt-4">
                  <Button onClick={restart} variant="primary">Play Again</Button>
                  <Button onClick={() => navigate('/')} variant="outline">Home</Button>
              </div>
          </div>
      );
  }

  return (
    <div className="bg-grid"></div>
    <div className="flex flex-col animate__animated animate__fadeIn" items-center justify-center min-h-screen gap-6">
      <div className="flex justify-between w-full max-w-2xl px-4">
        <Button onClick={() => navigate('/')} variant="outline">Home</Button>
        <div className="text-xl font-bold flex gap-4">
            <span className="text-primary">Level: {level}</span>
            <span className="text-danger">Lives: {lives}</span>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold">Memory Mode</h1>
      
      <div className="bg-grid"></div>
    <div className="flex flex-col animate__animated animate__fadeIn" items-center gap-8 mt-8">
        <div className="h-12 flex items-center">
            {showing ? (
                <span className="text-warning text-2xl font-bold animate-pulse">Watch the sequence...</span>
            ) : (
                <span className="text-success text-2xl font-bold">Your turn! ({playerSeq.length}/{sequence.length})</span>
            )}
        </div>

        <div 
          className="w-48 h-48 rounded-2xl shadow-lg border-4 border-white transition-colors duration-100"
          style={{ backgroundColor: activeColor || '#1e293b' }}
        />
        
        <div className="grid grid-cols-2 gap-4">
          {options.map((color, idx) => (
            <div 
              key={idx}
              onClick={() => handleGuess(color)}
              className={`w-32 h-32 rounded-xl cursor-pointer shadow transition-all duration-150 ${showing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
