import React from 'react';

interface LayoutSwitcherProps {
  currentLayout: 'home' | 'vertical' | 'horizontal-top' | 'horizontal-bottom';
  onNavigateToLayout: (layout: 'home' | 'vertical' | 'horizontal-top' | 'horizontal-bottom') => void;
  onBackToHome?: () => void;
  combinedPanelMode?: boolean;
  onCombinedPanelModeChange?: (enabled: boolean) => void;
}

// Layouts available from inside any layout, matching Figma order and labels
const layouts = [
  { id: 'home' as const, label: 'Home' },
  { id: 'vertical' as const, label: 'Vertical' },
  { id: 'horizontal-bottom' as const, label: 'Bottom' },
  { id: 'horizontal-top' as const, label: 'Top' },
];

export default function LayoutSwitcher({ 
  currentLayout, 
  onNavigateToLayout, 
  onBackToHome,
  combinedPanelMode = false,
  onCombinedPanelModeChange
}: LayoutSwitcherProps) {
  const handleClick = (layoutId: typeof layouts[number]['id']) => {
    if (layoutId === 'home' && onBackToHome) {
      onBackToHome();
    } else {
      onNavigateToLayout(layoutId);
    }
  };

  const handleToggleCombined = () => {
    if (onCombinedPanelModeChange) {
      onCombinedPanelModeChange(!combinedPanelMode);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-[4px] px-2 py-1 gap-4">
      {/* Combined toggle */}
      <div
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={handleToggleCombined}
      >
        {onCombinedPanelModeChange && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleToggleCombined();
            }}
            className="relative h-[28px] w-[42px] flex-shrink-0"
            role="switch"
            aria-checked={combinedPanelMode}
          >
            {/* Track – light gray when OFF, darker gray when ON */}
            <div
              className={`
                absolute left-0 top-1/2 h-4 w-[42px] -translate-y-1/2 rounded-full
                transition-colors
                ${combinedPanelMode ? 'bg-[#b0b1b3]' : 'bg-[#e0e0e0]'}
              `}
            />
            {/* Knob – slides left/right, inverts light/dark gray for stronger contrast */}
            <div
              className={`
                absolute top-1/2 size-5 -translate-y-1/2 rounded-full
                shadow-[0_1px_2px_rgba(0,0,0,0.25)]
                transition-transform transition-colors
                ${combinedPanelMode
                  ? 'translate-x-[20px] bg-[#e0e0e0]'
                  : 'translate-x-0 bg-[#b0b1b3]'}
              `}
            />
          </button>
        )}
        <span
          className={`
            text-[18px] leading-[28px]
            ${combinedPanelMode ? 'font-semibold text-[#1f2933]' : 'font-normal text-[#3e3d40]'}
          `}
        >
          Combined
        </span>
      </div>

      {/* Layout buttons, matching Figma style */}
      <div className="flex items-center gap-[9px]">
        {layouts.map((layout) => {
          const isActive = currentLayout === layout.id;

          return (
            <button
              key={layout.id}
              onClick={() => handleClick(layout.id)}
              className={`
                flex min-w-[80px] flex-1 items-center justify-center gap-[10px]
                rounded-[8px] px-[10px] py-[10px]
                text-[22px] leading-none
                font-normal
                ${isActive ? 'bg-[#e0e0e0] text-black' : 'bg-white text-black hover:bg-[#f2f2f2]'}
              `}
            >
              {layout.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
