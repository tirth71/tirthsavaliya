import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-700 ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6 uppercase">Tirth Savaliya</p>
        <div className="w-48 h-px bg-muted relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-primary transition-all duration-200 easing-quint"
            style={{ width: `${Math.min(progress, 100)}%` }}

            
          />
        </div>
      </div>
    </div>
  );
};


