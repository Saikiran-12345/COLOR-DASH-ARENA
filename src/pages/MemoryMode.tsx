import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const MemoryMode: React.FC = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [lives, setLives] = useState(3);
  const [targetColor, setTargetColor] = useState('#ef4444');
  const [options, setOptions] = useState<string[]>(['#ef4444', '#3b82f6', '#22c55e', '#f59e0b']);
  
  const handleGuess = (color: string) => {
    if (color === targetColor) {
        setScore(s => s + 10 * combo);
        setCombo(c => c + 1);
        setTargetColor(options[Math.floor(Math.random() * options.length)]);
    } else {
        setLives(l => l - 1);
        setCombo(1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <div className="flex justify-between w-full max-w-2xl px-4">
        <Button onClick={() => navigate('/')} variant="outline">← Home</Button>
        <div className="text-xl font-bold">Score: {score} | Combo: x{combo} | Lives: {lives}</div>
      </div>
      
      <h1 className="text-3xl font-bold">Memory Mode</h1>
      
      <div className="flex flex-col items-center gap-8 mt-8">
        <div 
          className="w-48 h-48 rounded-2xl shadow-lg border-4 border-white"
          style={{ backgroundColor: targetColor }}
        />
        
        <div className="grid grid-cols-2 gap-4">
          {options.map((color, idx) => (
            <div 
              key={idx}
              onClick={() => handleGuess(color)}
              className="w-32 h-32 rounded-xl cursor-pointer shadow hover:scale-105 transition"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

    </div>
  );
};