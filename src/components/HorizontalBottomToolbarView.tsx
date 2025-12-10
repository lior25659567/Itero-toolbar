import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-34vouhfnvt";
import NiriIonNew from "../imports/NiriIonNew";
import OcculsgramNew from "../imports/OcculsgramNew";
import MarginLineNew from "../imports/MarginLineNew";
import PrepQcNew from "../imports/PrepQcNew";
import TrimNew from "../imports/TrimNew";

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

// InfoIcon component (matching top toolbar)
function InfoIcon() {
  return (
    <svg className="block size-[32px]" viewBox="0 0 24 24" fill="none" stroke="#3e3d40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

function AohsButton6({ onClick }: { onClick: () => void }) {
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

// Collapsed Toolbar - just icons (6 buttons)
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
              className="absolute inset-0 rounded-full pointer-events-none"
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

        {/* Button 1: Review Tool */}
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
              className="absolute inset-0 rounded-full pointer-events-none"
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
          <NiriIonNew />
        </motion.div>

        {/* Button 2: Occlusalgram */}
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
              className="absolute inset-0 rounded-full pointer-events-none"
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
          <OcculsgramNew />
        </motion.div>

        {/* Button 3: Margin Line */}
        <motion.div 
          className={`${activeButtons.has(3) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
          custom={activeButtons.has(3)}
          onClick={() => handleButtonClick(3)}
          onTapStart={() => handleTapStart(3)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 3 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
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
          <MarginLineNew />
        </motion.div>

        {/* Button 4: Prep QC */}
        <motion.div 
          className={`${activeButtons.has(4) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
          custom={activeButtons.has(4)}
          onClick={() => handleButtonClick(4)}
          onTapStart={() => handleTapStart(4)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 4 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
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
          <div className="size-[60px]">
            <PrepQcNew />
          </div>
        </motion.div>

        {/* Button 5: Trim */}
        <motion.div 
          className={`${activeButtons.has(5) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
          custom={activeButtons.has(5)}
          onClick={() => handleButtonClick(5)}
          onTapStart={() => handleTapStart(5)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 5 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
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
          <div className="size-[60px]">
            <TrimNew />
          </div>
        </motion.div>
      </div>

      {/* Expand button */}
      <div className="flex h-[76px] items-center justify-center relative shrink-0 w-[76px] bg-white border-l border-[rgba(0,0,0,0.1)] rounded-r-[4px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rotate-[270deg]">
            <AohsButton6 onClick={() => onButtonClick(6)} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Expanded Toolbar - icons with text labels below (6 buttons)
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
      scale: isActive ? 1.05 : 1,
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
              className="absolute inset-0 rounded-full pointer-events-none"
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

        {/* Button 1: Review Tool */}
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
              className="absolute inset-0 rounded-full pointer-events-none"
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
              <NiriIonNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Review Tool</p>
        </motion.div>

        {/* Button 2: Occlusalgram */}
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
              className="absolute inset-0 rounded-full pointer-events-none"
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
              <OcculsgramNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Occlusalgram</p>
        </motion.div>

        {/* Button 3: Margin Line */}
        <motion.div 
          className={`${activeButtons.has(3) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[8px] py-[12px] cursor-pointer flex flex-col items-center justify-center gap-[4px] relative overflow-hidden`}
          custom={activeButtons.has(3)}
          onClick={() => handleButtonClick(3)}
          onTapStart={() => handleTapStart(3)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 3 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
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
              <MarginLineNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Margin line</p>
        </motion.div>

        {/* Button 4: Prep QC */}
        <motion.div 
          className={`${activeButtons.has(4) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[12px] py-[12px] cursor-pointer flex flex-col items-center justify-center gap-[4px] min-w-[70px] relative overflow-hidden`}
          custom={activeButtons.has(4)}
          onClick={() => handleButtonClick(4)}
          onTapStart={() => handleTapStart(4)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 4 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
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
          <div className="w-[32px] h-[32px] relative shrink-0">
            <div className="absolute left-1/2 top-1/2 size-[60px] origin-center" style={{ transform: 'translate(-50%, -50%) scale(1.05) translate(-2px, -2px)' }}>
              <PrepQcNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Prep QC</p>
        </motion.div>

        {/* Button 5: Trim */}
        <motion.div 
          className={`${activeButtons.has(5) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[12px] py-[12px] cursor-pointer flex flex-col items-center justify-center gap-[4px] min-w-[70px] relative overflow-hidden`}
          custom={activeButtons.has(5)}
          onClick={() => handleButtonClick(5)}
          onTapStart={() => handleTapStart(5)}
          onTapEnd={handleTapEnd}
          {...animationProps}
        >
          {pressedButton === 5 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
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
          <div className="w-[32px] h-[32px] relative shrink-0">
            <div className="absolute left-1/2 top-1/2 size-[60px] origin-center" style={{ transform: 'translate(-50%, -50%) scale(1.05)' }}>
              <TrimNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[12px] leading-[14px] text-black whitespace-nowrap">Trim</p>
        </motion.div>
      </div>

      {/* Expand button */}
      <div className="flex self-stretch items-center justify-center relative shrink-0 bg-white border-l border-[rgba(0,0,0,0.1)] rounded-r-[4px] py-[12px] px-[12px]">
        <div className="rotate-[270deg]">
          <AohsButton6 onClick={() => onButtonClick(6)} />
        </div>
      </div>
    </div>
  );
}

// Main export that switches between collapsed and expanded
export function HorizontalBottomToolbarView({
  activeButtons,
  onButtonClick,
  microAnimations = true
}: {
  activeButtons: Set<number>;
  onButtonClick: (index: number) => void;
  microAnimations?: boolean;
}) {
  const isExpanded = activeButtons.has(6);

  if (isExpanded) {
    return <ExpandedToolbar activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} />;
  }

  return <CollapsedToolbar activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} />;
}
