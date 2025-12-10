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

  const handleNavigateToLayout = (layout: 'home' | 'vertical' | 'horizontal' | 'horizontal-top' | 'horizontal-bottom') => {
    setCurrentView(layout);
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
          onNavigateToLayout={handleNavigateToLayout}
        />
      )}
      
      {currentView === 'horizontal' && (
        <ScreenTemplate 
          initialPage="scan"
          microAnimations={true}
          onBackToHome={handleBackToHome}
          onNavigateToLayout={handleNavigateToLayout}
          layout="horizontal"
        />
      )}
      
      {currentView === 'horizontal-top' && (
        <ScreenTemplate 
          initialPage="scan"
          microAnimations={true}
          onBackToHome={handleBackToHome}
          onNavigateToLayout={handleNavigateToLayout}
          layout="horizontal-top"
        />
      )}

      {currentView === 'horizontal-bottom' && (
        <ScreenTemplate 
          initialPage="scan"
          microAnimations={true}
          onBackToHome={handleBackToHome}
          onNavigateToLayout={handleNavigateToLayout}
          layout="horizontal-bottom"
        />
      )}

    </div>
  );
}