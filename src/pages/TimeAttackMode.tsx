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

export const TimeAttackMode: React.FC = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [options, setOptions] = useState<string[]>([]);
  const [targetColor, setTargetColor] = useState('');
  const [gameOver, setGameOver] = useState(false);
  
  useEffect(() => {
    resetRound();
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
        const timerId = setTimeout(() => setTimeLeft(t => t - 1), 1000);
        return () => clearTimeout(timerId);
    } else if (timeLeft <= 0) {
        setGameOver(true);
    }
  }, [timeLeft, gameOver]);

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
        setTimeLeft(t => t + 1); // bonus time
        resetRound();
    } else {
        setCombo(1);
        setTimeLeft(t => Math.max(0, t - 3)); // penalty
    }
  };

  const restart = () => {
      setScore(0);
      setCombo(1);
      setTimeLeft(60);
      setGameOver(false);
      resetRound();
  };

  if (gameOver) {
      return (
          <>
            <div className="bg-grid"></div>
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 animate__animated animate__fadeIn">
                <h1 className="text-6xl font-game text-danger drop-shadow-lg">TIME'S UP</h1>
                <div className="text-3xl">Final Score: <span className="text-primary">{score}</span></div>
                <div className="flex gap-4 mt-8">
                    <Button onClick={restart} variant="primary" size="lg">Play Again</Button>
                    <Button onClick={() => navigate('/')} variant="outline" size="lg">Home</Button>
                </div>
            </div>
          </>
      );
  }

  return (
    <>
      <div className="bg-grid"></div>
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 animate__animated animate__fadeIn">
        <div className="flex justify-between w-full max-w-2xl px-4 mt-4 absolute top-4">
          <Button onClick={() => navigate('/')} variant="outline">Home</Button>
          <div className="text-2xl font-game flex gap-6 drop-shadow-md">
              <span className="text-primary">Score: {score}</span>
              <span className="text-warning">Combo: x{combo}</span>
              <span className={`text-${timeLeft <= 10 ? 'danger' : 'success'}`}>Time: {timeLeft}s</span>
          </div>
        </div>
        
        <h1 className="text-4xl font-game mt-20">Time Attack</h1>
        
        <div className="flex flex-col items-center gap-8 mt-4">
          <p className="text-xl mb-4 opacity-80 text-center px-4">Match the target color above by clicking the correct option below!</p>
          <div 
            className="w-48 h-48 target-box transition-colors duration-200"
            style={{ backgroundColor: targetColor }}
          />
          
          <div className="grid grid-cols-2 gap-6">
            {options.map((color, idx) => (
              <button 
                key={idx}
                onClick={() => handleGuess(color)}
                className="w-32 h-32 color-box cursor-pointer outline-none"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
