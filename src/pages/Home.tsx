import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-grid"></div>
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 animate__animated animate__zoomIn">
        <h1 className="text-6xl font-game mb-8 text-primary drop-shadow-2xl text-center">COLOR DASH ARENA</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl px-4">
          <Card className="p-8 flex flex-col items-center gap-4 bg-card rounded-2xl shadow-xl border-2 border-primary">
            <h2 className="text-3xl font-bold">Classic</h2>
            <p className="text-center opacity-80">Survival mode with increasing difficulty.</p>
            <Button onClick={() => navigate('/classic')} className="w-full">Play Classic</Button>
          </Card>
          
          <Card className="p-8 flex flex-col items-center gap-4 bg-card rounded-2xl shadow-xl border-2 border-danger">
            <h2 className="text-3xl font-bold">Time Attack</h2>
            <p className="text-center opacity-80">Race against the clock. 60 seconds.</p>
            <Button onClick={() => navigate('/time-attack')} variant="danger" className="w-full">Play Time Attack</Button>
          </Card>
          
          <Card className="p-8 flex flex-col items-center gap-4 bg-card rounded-2xl shadow-xl border-2 border-success">
            <h2 className="text-3xl font-bold">Memory</h2>
            <p className="text-center opacity-80">Remember the sequence of colors.</p>
            <Button onClick={() => navigate('/memory')} variant="success" className="w-full">Play Memory</Button>
          </Card>
          
          <Card className="p-8 flex flex-col items-center gap-4 bg-card rounded-2xl shadow-xl border-2 border-warning">
            <h2 className="text-3xl font-bold">Endless</h2>
            <p className="text-center opacity-80">Never ending progression. How far can you go?</p>
            <Button onClick={() => navigate('/endless')} variant="warning" className="w-full">Play Endless</Button>
          </Card>
        </div>

        <div className="flex gap-4 mt-8">
          <Button onClick={() => navigate('/stats')} variant="outline">Statistics</Button>
          <Button onClick={() => navigate('/settings')} variant="outline">Settings</Button>
        </div>
      </div>
    </>
  );
};
