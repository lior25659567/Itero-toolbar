import React, { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-34vouhfnvt";

function InfoIcon() {
  return (
    <svg className="block size-[32px]" viewBox="0 0 24 24" fill="none" stroke="#3e3d40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </svg>
  );
}
import NiriIonNew from "../imports/NiriIonNew";
import OcculsgramNew from "../imports/OcculsgramNew";
import MarginLineNew from "../imports/MarginLineNew";
import PrepQcNew from "../imports/PrepQcNew";
import TrimNew from "../imports/TrimNew";

// Monochrome Icon
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
                <path d={svgPaths.p32843ca8} stroke="var(--stroke-0, #6A6A6A)" strokeLinecap="round" strokeMiterlimit="13.6293" strokeWidth="1.36293" />
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

type ViewButtonConfig = {
  label: string;
  Icon: React.ComponentType;
};

const viewButtons: ViewButtonConfig[] = [
  { label: "Monochrome", Icon: MonoChomrNew },
  { label: "Review Tool", Icon: NiriIonNew },
  { label: "Occlusalgram", Icon: OcculsgramNew },
  { label: "Margin line", Icon: MarginLineNew },
  { label: "Prep QC", Icon: PrepQcNew },
  { label: "Trim", Icon: TrimNew },
];

function IconButton({
  isActive,
  onClick,
  Icon,
  microAnimations = true,
  buttonIndex
}: {
  isActive: boolean;
  onClick?: () => void;
  Icon: React.ComponentType;
  microAnimations?: boolean;
  buttonIndex?: number;
}) {
  const [pressedButton, setPressedButton] = useState<number | null>(null);
  
  const animationProps = microAnimations ? { 
    whileTap: { 
      scale: 0.85,
      transition: {
        type: "spring" as const,
        stiffness: 600,
        damping: 15
      }
    } 
  } : {};
  
  const handleTapStart = () => {
    if (buttonIndex !== undefined) {
      setPressedButton(buttonIndex);
    }
  };
  
  const handleTapEnd = () => {
    setTimeout(() => setPressedButton(null), 300);
  };

  return (
    <motion.div 
      className={`${isActive ? 'bg-[#DFF5FC]' : 'bg-white'} content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[60px] cursor-pointer overflow-hidden p-[6px]`} 
      data-name="AOHS button"
      onClick={onClick}
      onTapStart={handleTapStart}
      onTapEnd={handleTapEnd}
      {...animationProps}
    >
      {pressedButton === buttonIndex && (
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
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon />
    </motion.div>
  );
}

function ExpandedButton({
  label,
  Icon,
  isActive,
  onClick,
  microAnimations = true,
  stackVertical = false,
  buttonIndex
}: {
  label: string;
  Icon: React.ComponentType;
  isActive: boolean;
  onClick: () => void;
  microAnimations?: boolean;
  stackVertical?: boolean;
  buttonIndex?: number;
}) {
  const [pressedButton, setPressedButton] = useState<number | null>(null);
  
  const animationProps = microAnimations ? { 
    whileTap: { 
      scale: 0.88,
      transition: {
        type: "spring" as const,
        stiffness: 600,
        damping: 15
      }
    } 
  } : {};
  
  const handleTapStart = () => {
    if (buttonIndex !== undefined) {
      setPressedButton(buttonIndex);
    }
  };
  
  const handleTapEnd = () => {
    setTimeout(() => setPressedButton(null), 300);
  };

  return (
    <motion.div
      className={`${isActive ? 'bg-[#DFF5FC]' : ''} flex ${stackVertical ? 'flex-col items-center justify-center gap-[2px]' : 'items-center gap-[8px]'} py-[2px] px-[8px] rounded-[4px] cursor-pointer relative overflow-hidden`}
      onClick={onClick}
      onTapStart={handleTapStart}
      onTapEnd={handleTapEnd}
      {...animationProps}
    >
      {pressedButton === buttonIndex && (
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
      {stackVertical ? (
        <div className="scale-[0.5] origin-center">
          <IconButton isActive={isActive} Icon={Icon} microAnimations={microAnimations} buttonIndex={buttonIndex} />
        </div>
      ) : (
        <IconButton isActive={isActive} Icon={Icon} microAnimations={microAnimations} buttonIndex={buttonIndex} />
      )}
      <p className={`font-['Roboto'] text-black whitespace-nowrap text-center ${stackVertical ? 'text-[12px] leading-[14px]' : 'text-[14px] leading-[16px]'}`}>{label}</p>
    </motion.div>
  );
}

// Close/Collapse Icon (X icon for expanded state)
function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d="M15 5L5 15M5 5L15 15" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    </div>
  );
}

// Expanded Toolbar - all buttons with horizontal text labels
function ExpandedToolbar({
  activeButtons,
  onButtonClick,
  microAnimations = true,
  stackVertical = false
}: {
  activeButtons: Set<number>;
  onButtonClick: (index: number) => void;
  microAnimations?: boolean;
  stackVertical?: boolean;
}) {
  return (
    <div className="bg-white flex gap-[8px] items-stretch p-[8px] relative rounded-bl-[4px] rounded-tl-[4px] h-[76px]">
      
      {viewButtons.map((btn, index) => (
        <React.Fragment key={btn.label}>
          <ExpandedButton
            label={btn.label}
            Icon={btn.Icon}
            isActive={activeButtons.has(index)}
            onClick={() => onButtonClick(index)}
            microAnimations={microAnimations}
            stackVertical={stackVertical}
            buttonIndex={index}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

function Frame4({
  activeButtons,
  onButtonClick,
  microAnimations = true
}: {
  activeButtons: Set<number>;
  onButtonClick: (index: number) => void;
  microAnimations?: boolean;
}) {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[8px] relative rounded-bl-[4px] rounded-tl-[4px] self-stretch shrink-0 h-[76px]">
      {viewButtons.map((btn, index) => (
        <React.Fragment key={btn.label}>
          <IconButton
            isActive={activeButtons.has(index)}
            onClick={() => onButtonClick(index)}
            Icon={btn.Icon}
            microAnimations={microAnimations}
            buttonIndex={index}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

// Hamburger Menu Icon
function Icon() {
  return (
    <div className="relative shrink-0 size-[20.001px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M2.5 5H17.5" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 10H17.5" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 15H17.5" id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
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

function Frame3({ onButtonClick }: { onButtonClick: (index: number) => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col h-[76px] items-center justify-center relative rounded-bl-[4px] rounded-br-[4px] w-[76px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rotate-[270deg]">
          <AohsButton6 onClick={() => onButtonClick(6)} />
        </div>
      </div>
    </div>
  );
}

export function HorizontalTopToolbarView({
  activeButtons,
  onButtonClick,
  microAnimations = true,
  stackVertical = false
}: {
  activeButtons: Set<number>;
  onButtonClick: (index: number) => void;
  microAnimations?: boolean;
  stackVertical?: boolean;
}) {
  const isExpanded = activeButtons.has(6);

  if (isExpanded) {
    return (
      <div className="content-stretch flex items-start relative rounded-bl-[4px] rounded-tl-[4px] font-['Roboto'] h-[76px]">
        <ExpandedToolbar activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} stackVertical={stackVertical} />
        <div className="relative h-[76px] w-[76px] shrink-0 flex items-center justify-center overflow-hidden bg-white rounded-br-[4px]">
          <div aria-hidden="true" className="absolute inset-0 border-l border-[rgba(0,0,0,0.1)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rotate-[270deg]">
              <AohsButton6 onClick={() => onButtonClick(6)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-stretch flex items-start relative rounded-bl-[4px] rounded-tl-[4px] h-[76px] font-['Roboto']">
      <Frame4 activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} />
      <div className="flex h-[76px] items-center justify-center relative shrink-0 w-[76px] bg-white border-l border-[rgba(0,0,0,0.1)]" style={{ "--transform-inner-width": "60", "--transform-inner-height": "60" } as React.CSSProperties}>
        <Frame3 onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}