'use client';

import { useState } from 'react';
import ScreenTemplate from "./imports/ScreenTemplate";
import HomePage from "./components/HomePage";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'vertical' | 'horizontal' | 'horizontal-top' | 'horizontal-bottom'>('home');

  const handleSelectLayout = (layout: 'vertical' | 'horizontal' | 'horizontal-top' | 'horizontal-bottom') => {
    setCurrentView(layout);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="w-full h-full overflow-hidden relative">
      {currentView === 'home' && (
        <HomePage onSelectLayout={handleSelectLayout} />
      )}
      
      {currentView === 'vertical' && (
        <ScreenTemplate 
          initialPage="scan"
          microAnimations={true}
          onBackToHome={handleBackToHome}
        />
      )}
      
      {currentView === 'horizontal' && (
        <ScreenTemplate 
          initialPage="scan"
          microAnimations={true}
          onBackToHome={handleBackToHome}
          layout="horizontal"
        />
      )}
      
      {currentView === 'horizontal-top' && (
        <ScreenTemplate 
          initialPage="scan"
          microAnimations={true}
          onBackToHome={handleBackToHome}
          layout="horizontal-top"
        />
      )}

      {currentView === 'horizontal-bottom' && (
        <ScreenTemplate 
          initialPage="scan"
          microAnimations={true}
          onBackToHome={handleBackToHome}
          layout="horizontal-bottom"
        />
      )}

    </div>
  );
}