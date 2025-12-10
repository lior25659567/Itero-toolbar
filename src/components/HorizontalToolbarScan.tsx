import React, { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-34vouhfnvt";
import feedbackSvgPaths from "../imports/svg-4m16l2fjs5";

// Monochrome icon component
function TrimArea() {
  return (
    <div className="absolute bottom-0 left-[-14%] right-[-12.5%] top-[8.56%]" data-name="trim area">
      <div className="absolute bottom-0 left-[-1.38%] right-[-1.38%] top-[-3.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 30">
          <g id="trim area">
            <path d={svgPaths.p3f793e80} fill="var(--fill-0, #FFD6D6)" id="Vector" />
            <path d={svgPaths.p3615b2c0} fill="var(--fill-0, #CCCCCC)" id="Vector_2" />
            <g id="Group 563025">
              <path d={svgPaths.p113c6810} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #3D3935)" strokeMiterlimit="10" strokeWidth="1.75" />
              <g id="Vector_4">
                <path d={svgPaths.p32843ca8} fill="var(--fill-0, #CCCCCC)" />
                <path d={svgPaths.p32843ca8} stroke="var(--stroke-0, #6A6A6A)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.36293" />
              </g>
            </g>
            <path d={svgPaths.p3ba27000} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, #3D3935)" strokeMiterlimit="10" strokeWidth="1.75" />
            <path d={svgPaths.p34459c00} fill="var(--fill-0, #CCCCCC)" id="Vector_6" stroke="var(--stroke-0, #6A6A6A)" strokeMiterlimit="10" strokeWidth="1.75" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MonoChomrNew({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative rounded-[8.75px] shrink-0 size-[60px]" data-name="Mono chomr new">
      <div className="absolute h-[31px] left-1/2 overflow-clip top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[50px]">
        <TrimArea />
      </div>
    </div>
  );
}

// Feedback icon component - using exact same icon from vertical toolbar (Toolbar.tsx)
function TrimArea1() {
  return (
    <div className="absolute inset-[18.33%_8.33%_16.67%_8.33%]" data-name="trim area">
      <div className="absolute bottom-0 left-0 right-0 top-[-2.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 41">
          <g id="trim area">
            <path d={feedbackSvgPaths.p1f4faa00} fill="var(--fill-0, #FFD6D6)" id="Vector" />
            <path d={feedbackSvgPaths.p161588f0} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #3D3935)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06414" />
            <path d={feedbackSvgPaths.p1031d180} fill="var(--fill-0, #008EC2)" id="Vector_3" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="2.06414" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return <div className="absolute left-1/2 size-[50px] top-1/2 translate-x-[-50%] translate-y-[-50%]" />;
}

function FeedbackNew({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Feedback new">
      <TrimArea1 />
      <Frame3 />
    </div>
  );
}

// Prep edit icon component
function TrimArea2() {
  return (
    <div className="absolute inset-[18.33%_7.82%_18.33%_8.85%]" data-name="trim area">
      <div className="absolute bottom-0 left-0 right-0 top-[-2.31%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 39">
          <g id="trim area">
            <path d={svgPaths.p2bdf0900} fill="var(--fill-0, #FFD6D6)" id="Vector" />
            <path d={svgPaths.p2c67eb40} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #3D3935)" strokeMiterlimit="10" strokeWidth="1.75" />
            <g id="Group">
              <path d={svgPaths.p33e16970} fill="var(--fill-0, #239B28)" id="Vector_3" />
              <path d={svgPaths.p356c8900} fill="var(--fill-0, white)" id="Vector_4" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function PrepEditNew({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Prep edit new">
      <div className="absolute left-0 size-[60px] top-0">
        <div className="absolute left-[calc(50%-0.31px)] size-[60px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="absolute left-0 size-[60px] top-0">
            <TrimArea2 />
          </div>
        </div>
      </div>
    </div>
  );
}

// Expand/Collapse icon
function ExpandIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M12.4991 10.0002H2.49878" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66672" />
          <path d="M14.1658 15.0002H2.49878" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66672" />
          <path d="M17.4992 4.99994H2.49878" id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66672" />
        </g>
      </svg>
    </div>
  );
}

// Collapsed Toolbar - just icons (3 buttons)
function CollapsedToolbar({
  activeButtons,
  onButtonClick,
  microAnimations = true
}: {
  activeButtons: Set<number>;
  onButtonClick: (index: number) => void;
  microAnimations?: boolean;
}) {
  const [pressedButton, setPressedButton] = useState<number | null>(null);
  
  const animationProps = microAnimations ? {
    animate: (isActive: boolean) => ({
      scale: isActive ? 1.08 : 1,
    }),
    whileTap: { 
      scale: 0.85,
      transition: {
        type: "spring" as const,
        stiffness: 600,
        damping: 15
      }
    },
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 10
    }
  } : {};
  
  const handleButtonClick = (index: number) => {
    onButtonClick(index);
  };
  
  const handleTapStart = (index: number) => {
    setPressedButton(index);
  };
  
  const handleTapEnd = () => {
    setTimeout(() => setPressedButton(null), 300);
  };

  return (
    <div className="bg-white rounded-[4px] size-full flex items-center font-['Roboto']">
      <div className="flex items-center gap-[16px] px-[16px] py-[16px] flex-1">
        {/* Button 0: Monochrome */}
        <motion.div 
          className={`${activeButtons.has(0) ? 'bg-[#DFF5FC]' : ''} content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[60px] cursor-pointer overflow-hidden p-[6px]`}
          custom={activeButtons.has(0)}
          onClick={() => handleButtonClick(0)}
          onTapStart={() => handleTapStart(0)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 0 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(12px)',
              }}
            />
          )}
          <div className="relative flex items-center justify-center size-full overflow-hidden">
            <MonoChomrNew isActive={activeButtons.has(0)} />
          </div>
        </motion.div>

        {/* Button 1: Feedback */}
        <motion.div 
          className={`${activeButtons.has(1) ? 'bg-[#DFF5FC]' : ''} content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[60px] cursor-pointer overflow-hidden p-[6px]`}
          custom={activeButtons.has(1)}
          onClick={() => handleButtonClick(1)}
          onTapStart={() => handleTapStart(1)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 1 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(12px)',
              }}
            />
          )}
          <div className="relative flex items-center justify-center size-full overflow-hidden">
            <FeedbackNew isActive={activeButtons.has(1)} />
          </div>
        </motion.div>

        {/* Button 2: Prep Edit */}
        <motion.div 
          className={`${activeButtons.has(2) ? 'bg-[#DFF5FC]' : ''} content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[60px] cursor-pointer overflow-hidden p-[6px]`}
          custom={activeButtons.has(2)}
          onClick={() => handleButtonClick(2)}
          onTapStart={() => handleTapStart(2)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 2 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(12px)',
              }}
            />
          )}
          <div className="relative flex items-center justify-center size-full overflow-hidden">
            <PrepEditNew isActive={activeButtons.has(2)} />
          </div>
        </motion.div>
      </div>

      {/* Expand button */}
      <div className="bg-white border-l border-[rgba(0,0,0,0.1)] h-full flex items-center justify-center px-[8px] cursor-pointer rounded-r-[4px]" onClick={() => onButtonClick(3)}>
        <ExpandIcon />
      </div>
    </div>
  );
}

// Expanded Toolbar - icons with text labels below (3 buttons)
function ExpandedToolbar({
  activeButtons,
  onButtonClick,
  microAnimations = true
}: {
  activeButtons: Set<number>;
  onButtonClick: (index: number) => void;
  microAnimations?: boolean;
}) {
  const [pressedButton, setPressedButton] = useState<number | null>(null);
  
  const animationProps = microAnimations ? {
    animate: (isActive: boolean) => ({
      scale: isActive ? 1.08 : 1,
    }),
    whileTap: { 
      scale: 0.88,
      transition: {
        type: "spring" as const,
        stiffness: 600,
        damping: 15
      }
    },
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 10
    }
  } : {};
  
  const handleButtonClick = (index: number) => {
    onButtonClick(index);
  };
  
  const handleTapStart = (index: number) => {
    setPressedButton(index);
  };
  
  const handleTapEnd = () => {
    setTimeout(() => setPressedButton(null), 300);
  };

  return (
    <div className="bg-white rounded-[4px] flex items-center font-['Roboto'] p-[12px]">
      <div className="flex items-center gap-[8px]">
        {/* Button 0: Monochrome */}
        <motion.div 
          className={`${activeButtons.has(0) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[8px] py-[4px] cursor-pointer flex flex-col items-center justify-center gap-[4px] min-h-[60px] relative overflow-hidden`}
          custom={activeButtons.has(0)}
          onClick={() => handleButtonClick(0)}
          onTapStart={() => handleTapStart(0)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 0 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(12px)',
              }}
            />
          )}
          <div className="flex items-center justify-center w-[32px] h-[32px]">
            <div className="scale-[0.53]">
              <MonoChomrNew isActive={false} />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Monochrome</p>
        </motion.div>

        {/* Button 1: Feedback */}
        <motion.div 
          className={`${activeButtons.has(1) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[8px] py-[4px] cursor-pointer flex flex-col items-center justify-center gap-[4px] min-h-[60px] relative overflow-hidden`}
          custom={activeButtons.has(1)}
          onClick={() => handleButtonClick(1)}
          onTapStart={() => handleTapStart(1)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 1 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(12px)',
              }}
            />
          )}
          <div className="flex items-center justify-center w-[32px] h-[32px]">
            <div className="scale-[0.53]">
              <FeedbackNew isActive={false} />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Scan assist</p>
        </motion.div>

        {/* Button 2: Prep Edit */}
        <motion.div 
          className={`${activeButtons.has(2) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[8px] py-[4px] cursor-pointer flex flex-col items-center justify-center gap-[4px] min-h-[60px] relative overflow-hidden`}
          custom={activeButtons.has(2)}
          onClick={() => handleButtonClick(2)}
          onTapStart={() => handleTapStart(2)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 2 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(12px)',
              }}
            />
          )}
          <div className="flex items-center justify-center w-[32px] h-[32px]">
            <div className="scale-[0.53]">
              <PrepEditNew isActive={false} />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Prep edit</p>
        </motion.div>
      </div>

      {/* Expand button */}
      <div className="bg-white border-l border-[rgba(0,0,0,0.1)] h-full flex items-center justify-center px-[8px] cursor-pointer rounded-r-[4px]" onClick={() => onButtonClick(3)}>
        <ExpandIcon />
      </div>
    </div>
  );
}

// Main export that switches between collapsed and expanded
export function HorizontalScanToolbar({
  activeButtons,
  onButtonClick,
  microAnimations = true
}: {
  activeButtons: Set<number>;
  onButtonClick: (index: number) => void;
  microAnimations?: boolean;
}) {
  const isExpanded = activeButtons.has(3);

  return isExpanded ? (
    <ExpandedToolbar 
      activeButtons={activeButtons} 
      onButtonClick={onButtonClick} 
      microAnimations={microAnimations} 
    />
  ) : (
    <CollapsedToolbar 
      activeButtons={activeButtons} 
      onButtonClick={onButtonClick} 
      microAnimations={microAnimations} 
    />
  );
}