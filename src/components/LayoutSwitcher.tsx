import React from 'react';

interface LayoutSwitcherProps {
  currentLayout: 'home' | 'vertical' | 'horizontal-top' | 'horizontal-bottom';
  onNavigateToLayout: (layout: 'home' | 'vertical' | 'horizontal-top' | 'horizontal-bottom') => void;
  onBackToHome?: () => void;
}

// Home Icon
function HomeIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? '#2563eb' : '#6b7280';
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Vertical Layout Icon (toolbar on right)
function VerticalIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? '#2563eb' : '#6b7280';
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="2" width="4" height="20" rx="1" fill={color} opacity="0.3" />
      <rect x="18" y="4" width="4" height="3" rx="0.5" fill={color} />
      <rect x="18" y="9" width="4" height="3" rx="0.5" fill={color} />
      <rect x="18" y="14" width="4" height="3" rx="0.5" fill={color} />
      <rect x="18" y="19" width="4" height="3" rx="0.5" fill={color} />
    </svg>
  );
}

// Top Horizontal Layout Icon (toolbar at top)
function TopHorizontalIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? '#2563eb' : '#6b7280';
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="4" rx="1" fill={color} opacity="0.3" />
      <rect x="4" y="3" width="3" height="2" rx="0.5" fill={color} />
      <rect x="9" y="3" width="3" height="2" rx="0.5" fill={color} />
      <rect x="14" y="3" width="3" height="2" rx="0.5" fill={color} />
      <rect x="19" y="3" width="3" height="2" rx="0.5" fill={color} />
    </svg>
  );
}

// Bottom Horizontal Layout Icon (toolbar at bottom)
function BottomHorizontalIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? '#2563eb' : '#6b7280';
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="18" width="20" height="4" rx="1" fill={color} opacity="0.3" />
      <rect x="4" y="19" width="3" height="2" rx="0.5" fill={color} />
      <rect x="9" y="19" width="3" height="2" rx="0.5" fill={color} />
      <rect x="14" y="19" width="3" height="2" rx="0.5" fill={color} />
      <rect x="19" y="19" width="3" height="2" rx="0.5" fill={color} />
    </svg>
  );
}

const layouts = [
  { id: 'home' as const, label: 'Home', icon: HomeIcon },
  { id: 'vertical' as const, label: 'Vertical', icon: VerticalIcon },
  { id: 'horizontal-top' as const, label: 'Top', icon: TopHorizontalIcon },
  { id: 'horizontal-bottom' as const, label: 'Bottom', icon: BottomHorizontalIcon },
];

export default function LayoutSwitcher({ currentLayout, onNavigateToLayout, onBackToHome }: LayoutSwitcherProps) {
  const handleClick = (layoutId: typeof layouts[number]['id']) => {
    if (layoutId === 'home' && onBackToHome) {
      onBackToHome();
    } else {
      onNavigateToLayout(layoutId);
    }
  };

  return (
    <div className="flex items-center gap-1 bg-white rounded-md p-1 shadow-md border border-gray-200">
      {layouts.map((layout) => {
        const Icon = layout.icon;
        const isActive = currentLayout === layout.id;
        
        return (
          <button
            key={layout.id}
            onClick={() => handleClick(layout.id)}
            className={`
              flex items-center justify-center p-2.5 rounded transition-all duration-150
              ${isActive 
                ? 'bg-blue-50' 
                : 'hover:bg-gray-50'
              }
            `}
            title={layout.label}
          >
            <Icon isActive={isActive} />
          </button>
        );
      })}
    </div>
  );
}
