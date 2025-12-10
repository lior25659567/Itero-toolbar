import React, { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-34vouhfnvt";
import svgPathsPrepEdit from "../imports/svg-76kjqgrbiw";
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

function MonoChomrNew() {
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

function FeedbackNew() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Feedback new">
      <TrimArea1 />
      <Frame3 />
    </div>
  );
}

// Prep edit icon component - using Frame2 structure (same as HorizontalTopToolbarScan)
function Icons() {
  return <div className="absolute left-0 size-[48px] top-0" data-name="Icons" />;
}

function Icons1() {
  return (
    <div className="absolute left-0 size-[48px] top-0" data-name="Icons">
      <Icons />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[32.2px] left-[calc(50%-0.18px)] top-[calc(50%+0.1px)] translate-x-[-50%] translate-y-[-50%] w-[43.636px]">
      <div className="absolute bottom-0 left-0 right-0 top-[-2.48%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 33">
          <g id="Frame 1618872990">
            <g id="trim area">
              <path d={svgPathsPrepEdit.p2b201d80} fill="var(--fill-0, #FFD6D6)" id="Vector" />
              <path d={svgPathsPrepEdit.p16a0d0e0} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #3D3935)" strokeMiterlimit="10" strokeWidth="1.4" />
            </g>
            <g id="Shape">
              <path d={svgPathsPrepEdit.pabd600} fill="var(--fill-0, #009ACE)" />
              <path clipRule="evenodd" d={svgPathsPrepEdit.p21b85980} fill="white" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPathsPrepEdit.p1ba64c70} fill="white" fillRule="evenodd" />
              <path d={svgPathsPrepEdit.p34f3c300} stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="0.8" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function PrepQc() {
  return (
    <div className="absolute left-1/2 size-[48px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Prep Qc">
      <Icons1 />
      <Frame2 />
    </div>
  );
}

function PrepEditNew() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="Prep edit new">
      <PrepQc />
    </div>
  );
}

// InfoIcon component (matching top toolbar)
function InfoIcon() {
  return (
    <svg className="block size-[32px]" viewBox="0 0 24 24" fill="none" stroke="#3e3d40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </svg>
  );
}

function Button() {
  return (
    <div className="content-stretch flex size-[60px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Button">
      <div className="rotate-[90deg]">
        <InfoIcon />
      </div>
    </div>
  );
}

function AohsButton3({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="content-stretch flex flex-col items-center justify-between relative rounded-[4px] size-[60px] cursor-pointer overflow-hidden" 
      data-name="AOHS button"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Button />
    </motion.div>
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
    <div className="bg-white rounded-[4px] flex items-center font-['Roboto'] p-[8px] h-[76px]">
      <div className="flex items-center gap-[16px] px-[8px]">
        {/* Button 0: Monochrome */}
        <motion.div 
          className={`${activeButtons.has(0) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
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
          <MonoChomrNew />
        </motion.div>

        {/* Button 1: Feedback */}
        <motion.div 
          className={`${activeButtons.has(1) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
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
          <FeedbackNew />
        </motion.div>

        {/* Button 2: Prep Edit */}
        <motion.div 
          className={`${activeButtons.has(2) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
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
          <PrepEditNew />
        </motion.div>
      </div>

      {/* Expand button */}
      <div className="flex h-[76px] items-center justify-center relative shrink-0 w-[76px] bg-white border-l border-[rgba(0,0,0,0.1)] rounded-r-[4px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rotate-[270deg]">
            <AohsButton3 onClick={() => onButtonClick(3)} />
          </div>
        </div>
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
    <div className="bg-white rounded-[4px] flex items-center font-['Roboto'] py-[12px] px-[12px] min-h-[120px]">
      <div className="flex items-center gap-[16px] flex-1 px-[8px]">
        {/* Button 0: Monochrome */}
        <motion.div 
          className={`${activeButtons.has(0) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[8px] py-[12px] cursor-pointer flex flex-col items-center justify-center gap-[4px] relative overflow-hidden`}
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
              <MonoChomrNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Monochrome</p>
        </motion.div>

        {/* Button 1: Feedback */}
        <motion.div 
          className={`${activeButtons.has(1) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[8px] py-[12px] cursor-pointer flex flex-col items-center justify-center gap-[4px] relative overflow-hidden`}
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
              <FeedbackNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Scan assist</p>
        </motion.div>

        {/* Button 2: Prep Edit */}
        <motion.div 
          className={`${activeButtons.has(2) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[8px] py-[12px] cursor-pointer flex flex-col items-center justify-center gap-[4px] relative overflow-hidden`}
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
              <PrepEditNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Prep edit</p>
        </motion.div>
      </div>

      {/* Expand button */}
      <div className="flex min-h-[120px] items-center justify-center relative shrink-0 bg-white border-l border-[rgba(0,0,0,0.1)] rounded-r-[4px] py-[12px] px-[12px]">
        <div className="rotate-[270deg]">
          <AohsButton3 onClick={() => onButtonClick(3)} />
        </div>
      </div>
    </div>
  );
}

// Main export that switches between collapsed and expanded
export function HorizontalBottomToolbarScan({
  activeButtons,
  onButtonClick,
  microAnimations = true
}: {
  activeButtons: Set<number>;
  onButtonClick: (index: number) => void;
  microAnimations?: boolean;
}) {
  const isExpanded = activeButtons.has(3);

  if (isExpanded) {
    return <ExpandedToolbar activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} />;
  }

  return <CollapsedToolbar activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} />;
}
