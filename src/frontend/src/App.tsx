import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { useEvasiveNoButton } from './hooks/useEvasiveNoButton';

function App() {
  const [accepted, setAccepted] = useState(false);
  const { noButtonStyle, handleNoHover, handleNoTouch } = useEvasiveNoButton();

  if (accepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-romantic-light via-romantic-lighter to-white">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
          <div className="space-y-4">
            <div className="flex justify-center gap-2 animate-bounce">
              <Heart className="w-12 h-12 fill-romantic-primary text-romantic-primary" />
              <Heart className="w-12 h-12 fill-romantic-accent text-romantic-accent" />
              <Heart className="w-12 h-12 fill-romantic-primary text-romantic-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-romantic-dark">
              Yay! 💕
            </h1>
            <p className="text-xl md:text-2xl text-romantic-medium font-medium">
              I knew you'd say yes, Tasbiha!
            </p>
          </div>

          <Card className="overflow-hidden shadow-2xl border-4 border-romantic-primary/20">
            <img
              src="/assets/valentine-image.jpg"
              alt="Valentine celebration"
              className="w-full h-auto object-contain"
            />
          </Card>

          <p className="text-lg md:text-xl text-romantic-medium italic">
            Happy Valentine's Day! 💖
          </p>
        </div>

        <footer className="fixed bottom-4 text-center text-sm text-romantic-medium/70">
          © {new Date().getFullYear()} · Built with <Heart className="inline w-4 h-4 fill-romantic-accent text-romantic-accent" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'valentine-app')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-romantic-primary transition-colors"
          >
            caffeine.ai
          </a>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-romantic-light via-romantic-lighter to-white">
      <div className="max-w-xl w-full text-center space-y-8 animate-in fade-in duration-500">
        <div className="space-y-4">
          <div className="flex justify-center gap-2 animate-pulse">
            <Heart className="w-10 h-10 fill-romantic-primary text-romantic-primary" />
            <Heart className="w-10 h-10 fill-romantic-accent text-romantic-accent" />
            <Heart className="w-10 h-10 fill-romantic-primary text-romantic-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-romantic-dark leading-tight">
            Hey Tasbiha! 💝
          </h1>
          
          <p className="text-xl md:text-3xl text-romantic-medium font-medium px-4">
            Will you be my Valentine?
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-xl border-2 border-romantic-primary/20 bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => setAccepted(true)}
              className="text-xl md:text-2xl px-8 md:px-12 py-6 md:py-8 h-auto bg-romantic-primary hover:bg-romantic-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[140px] md:min-w-[180px]"
            >
              Yes! 💕
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              style={noButtonStyle}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoTouch}
              className="text-xl md:text-2xl px-8 md:px-12 py-6 md:py-8 h-auto border-2 border-romantic-medium/30 text-romantic-medium hover:bg-romantic-light/50 transition-all duration-200 min-w-[140px] md:min-w-[180px]"
            >
              No
            </Button>
          </div>
        </Card>

        <p className="text-sm md:text-base text-romantic-medium/60 italic px-4">
          Choose wisely... 😉
        </p>
      </div>

      <footer className="fixed bottom-4 text-center text-sm text-romantic-medium/70">
        © {new Date().getFullYear()} · Built with <Heart className="inline w-4 h-4 fill-romantic-accent text-romantic-accent" /> using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'valentine-app')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-romantic-primary transition-colors"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

export default App;
