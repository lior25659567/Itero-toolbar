'use client';

import React, { useState } from 'react';
import { LayoutGrid, AlignHorizontalDistributeCenter, AlignVerticalJustifyEnd } from 'lucide-react';

export default function HomePage({ 
  onSelectLayout,
  combinedPanelMode = false,
  onCombinedPanelModeChange
}: { 
  onSelectLayout: (layout: 'vertical' | 'horizontal' | 'horizontal-top' | 'horizontal-bottom') => void;
  combinedPanelMode?: boolean;
  onCombinedPanelModeChange?: (enabled: boolean) => void;
}) {
  const handleToggleCombinedPanel = () => {
    console.log('Toggle clicked! Current state:', combinedPanelMode);
    if (onCombinedPanelModeChange) {
      const newState = !combinedPanelMode;
      console.log('Setting new state:', newState);
      onCombinedPanelModeChange(newState);
    } else {
      console.error('onCombinedPanelModeChange is undefined!');
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ 
      backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 1080\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(69.6 39.825 -70.448 38.956 960 573.75)\\'><stop stop-color=\\'rgba(178,205,227,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(221,235,242,1)\\' offset=\\'0.94792\\'/></radialGradient></defs></svg>')" 
    }}>
      <div className="flex flex-col items-center gap-8">
        <div className="text-center mb-8">
          <h1 className="mb-2">Dental Scanning Interface</h1>
          <p className="text-[#717182]">Choose your preferred toolbar layout</p>
        </div>
        
        {/* Combined Panel Mode Toggle */}
        <button
          type="button"
          onClick={handleToggleCombinedPanel}
          className="bg-white rounded-lg p-6 shadow-md border-2 mb-4 w-full max-w-2xl transition-all duration-200 cursor-pointer hover:shadow-lg"
          style={{ 
            borderColor: combinedPanelMode ? '#2563eb' : '#e5e7eb',
            backgroundColor: combinedPanelMode ? '#eff6ff' : '#ffffff'
          }}
        >
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-col flex-1 text-left">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-[#3e3d40] text-[18px]">Combined Panel Mode</h3>
                <span className={`
                  px-2 py-0.5 rounded-full text-xs font-medium
                  ${combinedPanelMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-300 text-gray-700'
                  }
                `}>
                  {combinedPanelMode ? 'ON' : 'OFF'}
                </span>
              </div>
              <p className="text-[14px] text-[#717182]">When Margin Line and Review Tool are active, show them in one combined panel</p>
            </div>
            <div className="flex-shrink-0 pointer-events-none">
              <div
                className={`
                  relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300
                  ${combinedPanelMode 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300'
                  }
                `}
              >
                {/* Toggle Switch */}
                <span
                  className={`
                    inline-block h-6 w-6 transform rounded-full bg-white transition-all duration-300 shadow-md
                    ${combinedPanelMode ? 'translate-x-7' : 'translate-x-1'}
                  `}
                />
              </div>
            </div>
          </div>
        </button>
        
        <div className="flex gap-6">
          {/* Vertical Toolbar Option */}
          <button
            onClick={() => onSelectLayout('vertical')}
            className="group relative bg-white rounded-lg p-8 w-[280px] h-[320px] flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all duration-300 border-4 hover:border-[#0284c7] ring-2 ring-offset-2 ring-offset-white ring-[#bae6fd]"
            style={{ borderColor: '#0ea5e9' }}
          >
            <div className="w-[120px] h-[160px] bg-[#f3f3f5] rounded flex items-center justify-center relative">
              <div className="absolute right-2 top-8 w-[16px] h-[80px] bg-white rounded flex flex-col gap-1 p-1 shadow-md">
                <div className="w-full h-[12px] bg-[#DFF5FC] rounded" />
                <div className="w-full h-[12px] bg-[#e9ebef] rounded" />
                <div className="w-full h-[12px] bg-[#e9ebef] rounded" />
              </div>
              <LayoutGrid className="w-8 h-8 text-[#717182]" />
            </div>
            <div className="text-center">
              <h3 className="mb-1">Vertical Toolbar</h3>
              <p className="text-[14px] text-[#717182]">Right-side vertical layout</p>
            </div>
          </button>

          {/* Horizontal Toolbar Option - Top Right */}
          <button
            onClick={() => onSelectLayout('horizontal-top')}
            className="group relative bg-white rounded-lg p-8 w-[280px] h-[320px] flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all duration-300 border-4 hover:border-[#16a34a] ring-2 ring-offset-2 ring-offset-white ring-[#bbf7d0]"
            style={{ borderColor: '#22c55e' }}
          >
            <div className="w-[120px] h-[160px] bg-[#f3f3f5] rounded flex items-center justify-center relative">
              <div className="absolute top-2 right-2 w-[80px] h-[16px] bg-white rounded flex gap-1 px-1 shadow-md">
                <div className="w-[12px] h-full bg-[#DFF5FC] rounded" />
                <div className="w-[12px] h-full bg-[#e9ebef] rounded" />
                <div className="w-[12px] h-full bg-[#e9ebef] rounded" />
              </div>
              <AlignVerticalJustifyEnd className="w-8 h-8 text-[#717182]" />
            </div>
            <div className="text-center">
              <h3 className="mb-1">Horizontal Top</h3>
              <p className="text-[14px] text-[#717182]">Top-right horizontal layout</p>
            </div>
          </button>

          {/* Horizontal Toolbar Option - Bottom (Top-style) */}
          <button
            onClick={() => onSelectLayout('horizontal-bottom')}
            className="group relative bg-white rounded-lg p-8 w-[280px] h-[320px] flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all duration-300 border-4 hover:border-[#ea580c] ring-2 ring-offset-2 ring-offset-white ring-[#fed7aa]"
            style={{ borderColor: '#f97316' }}
          >
            <div className="w-[120px] h-[160px] bg-[#f3f3f5] rounded flex items-center justify-center relative">
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80px] h-[16px] bg-white rounded flex gap-1 px-1 shadow-md">
                <div className="w-[12px] h-full bg-[#DFF5FC] rounded" />
                <div className="w-[12px] h-full bg-[#e9ebef] rounded" />
                <div className="w-[12px] h-full bg-[#e9ebef] rounded" />
              </div>
              <AlignHorizontalDistributeCenter className="w-8 h-8 text-[#717182]" />
            </div>
            <div className="text-center">
              <h3 className="mb-1">Horizontal Bottom</h3>
              <p className="text-[14px] text-[#717182]">Bottom horizontal layout</p>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}