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

export const ClassicMode: React.FC = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [lives, setLives] = useState(3);
  const [options, setOptions] = useState<string[]>([]);
  const [targetColor, setTargetColor] = useState('');
  const [gameOver, setGameOver] = useState(false);
  
  useEffect(() => {
    resetRound();
  }, []);

  const resetRound = () => {
    const newColors = generateColors(4);
    setOptions(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * newColors.length)]);
  };

  const handleGuess = (color: string) => {
    if (gameOver) return;
    if (color === targetColor) {
        setScore(s => s + 10 * combo);
        setCombo(c => c + 1);
        resetRound();
    } else {
        const newLives = lives - 1;
        setLives(newLives);
        setCombo(1);
        if (newLives <= 0) {
            setGameOver(true);
        }
    }
  };

  const restart = () => {
      setScore(0);
      setCombo(1);
      setLives(3);
      setGameOver(false);
      resetRound();
  };

  if (gameOver) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen gap-6">
              <h1 className="text-4xl font-bold text-danger">GAME OVER</h1>
              <div className="text-2xl">Final Score: {score}</div>
              <div className="flex gap-4 mt-4">
                  <Button onClick={restart} variant="primary">Play Again</Button>
                  <Button onClick={() => navigate('/')} variant="outline">Home</Button>
              </div>
          </div>
      );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <div className="flex justify-between w-full max-w-2xl px-4">
        <Button onClick={() => navigate('/')} variant="outline">Home</Button>
        <div className="text-xl font-bold flex gap-4">
            <span className="text-primary">Score: {score}</span>
            <span className="text-warning">Combo: x{combo}</span>
            <span className="text-danger">Lives: {lives}</span>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold">Classic Mode</h1>
      
      <div className="flex flex-col items-center gap-8 mt-8">
        <div 
          className="w-48 h-48 rounded-2xl shadow-lg border-4 border-white transition-colors duration-200"
          style={{ backgroundColor: targetColor }}
        />
        
        <div className="grid grid-cols-2 gap-4">
          {options.map((color, idx) => (
            <div 
              key={idx}
              onClick={() => handleGuess(color)}
              className="w-32 h-32 rounded-xl cursor-pointer shadow hover:scale-105 active:scale-95 transition-all duration-150"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
