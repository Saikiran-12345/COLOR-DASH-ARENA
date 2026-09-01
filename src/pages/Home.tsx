import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold mb-8">COLOR DASH ARENA</h1>
      
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        <Card className="p-6 flex flex-col items-center gap-4 bg-card rounded-lg shadow-lg border">
          <h2 className="text-2xl font-bold">Classic</h2>
          <p className="text-center text-sm opacity-80">Survival mode with increasing difficulty.</p>
          <Button onClick={() => navigate('/classic')} className="w-full">Play Classic</Button>
        </Card>
        
        <Card className="p-6 flex flex-col items-center gap-4 bg-card rounded-lg shadow-lg border">
          <h2 className="text-2xl font-bold">Time Attack</h2>
          <p className="text-center text-sm opacity-80">Race against the clock. 60 seconds.</p>
          <Button onClick={() => navigate('/time-attack')} variant="danger" className="w-full">Play Time Attack</Button>
        </Card>
        
        <Card className="p-6 flex flex-col items-center gap-4 bg-card rounded-lg shadow-lg border">
          <h2 className="text-2xl font-bold">Memory</h2>
          <p className="text-center text-sm opacity-80">Remember the sequence of colors.</p>
          <Button onClick={() => navigate('/memory')} variant="success" className="w-full">Play Memory</Button>
        </Card>
        
        <Card className="p-6 flex flex-col items-center gap-4 bg-card rounded-lg shadow-lg border">
          <h2 className="text-2xl font-bold">Endless</h2>
          <p className="text-center text-sm opacity-80">Never ending progression. How far can you go?</p>
          <Button onClick={() => navigate('/endless')} variant="warning" className="w-full">Play Endless</Button>
        </Card>
      </div>

      <div className="flex gap-4 mt-8">
        <Button onClick={() => navigate('/stats')} variant="outline">Statistics</Button>
        <Button onClick={() => navigate('/settings')} variant="outline">Settings</Button>
      </div>
    </div>
  );
};