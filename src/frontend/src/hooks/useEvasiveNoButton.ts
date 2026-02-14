import { useState, useCallback, CSSProperties } from 'react';

export function useEvasiveNoButton() {
  const [noButtonStyle, setNoButtonStyle] = useState<CSSProperties>({
    position: 'relative',
    transition: 'all 0.3s ease-out',
  });

  const moveButton = useCallback(() => {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Button approximate size (accounting for padding and text)
    const buttonWidth = 180;
    const buttonHeight = 80;
    
    // Calculate safe boundaries (with padding from edges)
    const padding = 20;
    const maxX = viewportWidth - buttonWidth - padding;
    const maxY = viewportHeight - buttonHeight - padding;
    
    // Generate random position within safe boundaries
    const randomX = Math.random() * Math.max(maxX - padding, 100) + padding;
    const randomY = Math.random() * Math.max(maxY - padding, 100) + padding;
    
    setNoButtonStyle({
      position: 'fixed',
      left: `${randomX}px`,
      top: `${randomY}px`,
      transition: 'all 0.3s ease-out',
      zIndex: 50,
    });
  }, []);

  const handleNoHover = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    moveButton();
  }, [moveButton]);

  const handleNoTouch = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  }, [moveButton]);

  return {
    noButtonStyle,
    handleNoHover,
    handleNoTouch,
  };
}
