import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-34vouhfnvt";
import NiriIonNew from "../imports/NiriIonNew";
import OcculsgramNew from "../imports/OcculsgramNew";
import MarginLineNew from "../imports/MarginLineNew";
import PrepQcNew from "../imports/PrepQcNew";
import TrimNew from "../imports/TrimNew";

// Monochrome icon component (same as scan toolbar)
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
  const [tappedButton, setTappedButton] = useState<number | null>(null);
  
  const animationProps = microAnimations ? {
    animate: (isActive: boolean) => ({
      scale: isActive ? 1.05 : 1,
    }),
    whileTap: { scale: 0.95 },
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 10
    }
  } : {};
  
  const handleButtonClick = (index: number) => {
    setTappedButton(index);
    setTimeout(() => setTappedButton(null), 400);
    onButtonClick(index);
  };

  return (
    <div className="bg-white rounded-[4px] size-full flex items-center font-['Roboto']">
      <div className="flex items-center gap-[8px] px-[16px] py-[16px] flex-1">
        {/* Button 0: Monochrome */}
        <motion.div 
          className={`${activeButtons.has(0) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
          custom={activeButtons.has(0)}
          onClick={() => handleButtonClick(0)}
          {...animationProps}
        >
          {tappedButton === 0 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="scale-100">
            <MonoChomrNew />
          </div>
        </motion.div>

        {/* Button 1: Review Tool */}
        <motion.div 
          className={`${activeButtons.has(1) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
          custom={activeButtons.has(1)}
          onClick={() => handleButtonClick(1)}
          {...animationProps}
        >
          {tappedButton === 1 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="scale-100">
            <NiriIonNew />
          </div>
        </motion.div>

        {/* Button 2: Occlusalgram */}
        <motion.div 
          className={`${activeButtons.has(2) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
          custom={activeButtons.has(2)}
          onClick={() => handleButtonClick(2)}
          {...animationProps}
        >
          {tappedButton === 2 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="scale-100">
            <OcculsgramNew />
          </div>
        </motion.div>

        {/* Button 3: Margin Line */}
        <motion.div 
          className={`${activeButtons.has(3) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
          custom={activeButtons.has(3)}
          onClick={() => handleButtonClick(3)}
          {...animationProps}
        >
          {tappedButton === 3 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="scale-100">
            <MarginLineNew />
          </div>
        </motion.div>

        {/* Button 4: Prep QC */}
        <motion.div 
          className={`${activeButtons.has(4) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
          custom={activeButtons.has(4)}
          onClick={() => handleButtonClick(4)}
          {...animationProps}
        >
          {tappedButton === 4 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="scale-100">
            <PrepQcNew />
          </div>
        </motion.div>

        {/* Button 5: Trim */}
        <motion.div 
          className={`${activeButtons.has(5) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] cursor-pointer flex items-center justify-center size-[60px] relative overflow-hidden`}
          custom={activeButtons.has(5)}
          onClick={() => handleButtonClick(5)}
          {...animationProps}
        >
          {tappedButton === 5 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="scale-100">
            <TrimNew />
          </div>
        </motion.div>
      </div>

      {/* Expand button */}
      <div className="bg-white border-l border-[rgba(0,0,0,0.1)] h-full flex items-center justify-center px-[12px] cursor-pointer rounded-r-[4px]" onClick={() => onButtonClick(6)}>
        <ExpandIcon />
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
  const [tappedButton, setTappedButton] = useState<number | null>(null);
  
  const animationProps = microAnimations ? {
    animate: (isActive: boolean) => ({
      scale: isActive ? 1.05 : 1,
    }),
    whileTap: { scale: 0.95 },
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 10
    }
  } : {};
  
  const handleButtonClick = (index: number) => {
    setTappedButton(index);
    setTimeout(() => setTappedButton(null), 400);
    onButtonClick(index);
  };

  return (
    <div className="bg-white rounded-[4px] size-full flex items-center font-['Roboto'] p-[12px]">
      <div className="flex items-center gap-[8px] flex-1">
        {/* Button 0: Monochrome */}
        <motion.div 
          className={`${activeButtons.has(0) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[6px] cursor-pointer flex items-center gap-[6px] h-[60px] relative overflow-hidden`}
          custom={activeButtons.has(0)}
          onClick={() => handleButtonClick(0)}
          {...animationProps}
        >
          {tappedButton === 0 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
            <div className="scale-[0.7]">
              <MonoChomrNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[11px] leading-[14px] text-black whitespace-nowrap">Monochrome</p>
        </motion.div>

        {/* Button 1: Review Tool */}
        <motion.div 
          className={`${activeButtons.has(1) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[6px] cursor-pointer flex items-center gap-[6px] h-[60px] relative overflow-hidden`}
          custom={activeButtons.has(1)}
          onClick={() => handleButtonClick(1)}
          {...animationProps}
        >
          {tappedButton === 1 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
            <div className="scale-[0.7]">
              <NiriIonNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[11px] leading-[14px] text-black whitespace-nowrap">Review Tool</p>
        </motion.div>

        {/* Button 2: Occlusalgram */}
        <motion.div 
          className={`${activeButtons.has(2) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[6px] cursor-pointer flex items-center gap-[6px] h-[60px] relative overflow-hidden`}
          custom={activeButtons.has(2)}
          onClick={() => handleButtonClick(2)}
          {...animationProps}
        >
          {tappedButton === 2 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
            <div className="scale-[0.7]">
              <OcculsgramNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[11px] leading-[14px] text-black whitespace-nowrap">Occlusalgram</p>
        </motion.div>

        {/* Button 3: Margin Line */}
        <motion.div 
          className={`${activeButtons.has(3) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[6px] cursor-pointer flex items-center gap-[6px] h-[60px] relative overflow-hidden`}
          custom={activeButtons.has(3)}
          onClick={() => handleButtonClick(3)}
          {...animationProps}
        >
          {tappedButton === 3 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
            <div className="scale-[0.7]">
              <MarginLineNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[11px] leading-[14px] text-black whitespace-nowrap">Margin line</p>
        </motion.div>

        {/* Button 4: Prep QC */}
        <motion.div 
          className={`${activeButtons.has(4) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[6px] cursor-pointer flex items-center gap-[6px] h-[60px] relative overflow-hidden`}
          custom={activeButtons.has(4)}
          onClick={() => handleButtonClick(4)}
          {...animationProps}
        >
          {tappedButton === 4 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
            <div className="scale-[0.7]">
              <PrepQcNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[11px] leading-[14px] text-black whitespace-nowrap">Prep QC</p>
        </motion.div>

        {/* Button 5: Trim */}
        <motion.div 
          className={`${activeButtons.has(5) ? 'bg-[#DFF5FC]' : ''} rounded-[4px] px-[6px] cursor-pointer flex items-center gap-[6px] h-[60px] relative overflow-hidden`}
          custom={activeButtons.has(5)}
          onClick={() => handleButtonClick(5)}
          {...animationProps}
        >
          {tappedButton === 5 && (
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(10px)',
              }}
            />
          )}
          <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
            <div className="scale-[0.7]">
              <TrimNew />
            </div>
          </div>
          <p className="font-['Roboto'] text-[11px] leading-[14px] text-black whitespace-nowrap">Trim</p>
        </motion.div>
      </div>

      {/* Expand button */}
      <div className="bg-white border-l border-[rgba(0,0,0,0.1)] h-full flex items-center justify-center px-[12px] cursor-pointer rounded-r-[4px]" onClick={() => onButtonClick(6)}>
        <ExpandIcon />
      </div>
    </div>
  );
}

// Main export that switches between collapsed and expanded
export function HorizontalViewToolbar({
  activeButtons,
  onButtonClick,
  microAnimations = true
}: {
  activeButtons: Set<number>;
  onButtonClick: (index: number) => void;
  microAnimations?: boolean;
}) {
  const isExpanded = activeButtons.has(6);

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