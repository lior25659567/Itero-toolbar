import { motion } from "framer-motion";
import svgPaths from "./svg-4m16l2fjs5";
import NiriIonNew from "./NiriIonNew";
import OcculsgramNew from "./OcculsgramNew";
import MarginLineNew from "./MarginLineNew";
import PrepQcNew from "./PrepQcNew";
import TrimNew from "./TrimNew";

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

function Frame() {
  return (
    <div className="absolute h-[31px] left-1/2 overflow-clip top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[50px]">
      <TrimArea />
    </div>
  );
}

function MonoChomrNew({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative rounded-[8.75px] shrink-0 size-[60px]" data-name="Mono chomr new">
      <Frame />
    </div>
  );
}

function AohsButton({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[10px] shrink-0 size-[60px]" data-name="AOHS button">
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <MonoChomrNew isActive={isActive} />
    </div>
  );
}

function ToolbarTextLabel({ isActive, onClick, isExpanded, microAnimations = true }: { isActive: boolean; onClick: () => void; isExpanded?: boolean; microAnimations?: boolean }) {
  const animationProps = microAnimations ? {
    animate: {
      scale: isActive ? 1.08 : 1,
    },
    whileTap: { scale: 0.92 },
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 10
    }
  } : {};

  return (
    <motion.div 
      className={`${isActive ? 'bg-[#DFF5FC]' : ''} flex flex-row items-center ${isExpanded ? 'px-[8px]' : ''} py-0 gap-[4px] h-[60px] relative rounded-[4px] shrink-0 cursor-pointer self-stretch`} 
      data-name="Toolbar Text label"
      onClick={onClick}
      {...animationProps}
    >
      <AohsButton isActive={isActive} />
      {isExpanded && <p className="font-['Roboto'] leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-nowrap text-center">Monochrome</p>}
    </motion.div>
  );
}

function AohsButton1({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[10px] shrink-0 size-[60px]" data-name="AOHS button">
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <NiriIonNew />
    </div>
  );
}

function ToolbarTextLabel1({ isActive, onClick, isExpanded }: { isActive: boolean; onClick: () => void; isExpanded?: boolean }) {
  return (
    <motion.div 
      className={`${isActive ? 'bg-[#DFF5FC]' : ''} flex flex-row items-center ${isExpanded ? 'px-[8px]' : ''} py-0 gap-[4px] h-[60px] relative rounded-[4px] shrink-0 cursor-pointer self-stretch`} 
      data-name="Toolbar Text label"
      onClick={onClick}
      animate={{
        scale: isActive ? 1.08 : 1,
      }}
      whileTap={{ scale: 0.92 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 10
      }}
    >
      <AohsButton1 isActive={isActive} />
      {isExpanded && <p className="font-['Roboto'] leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-nowrap text-center">Niri+ Ion</p>}
    </motion.div>
  );
}

function AohsButton2({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[10px] shrink-0 size-[60px]" data-name="AOHS button">
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <OcculsgramNew />
    </div>
  );
}

function ToolbarTextLabel2({ isActive, onClick, isExpanded }: { isActive: boolean; onClick: () => void; isExpanded?: boolean }) {
  return (
    <motion.div 
      className={`${isActive ? 'bg-[#DFF5FC]' : ''} flex flex-row items-center ${isExpanded ? 'px-[8px]' : ''} py-0 gap-[4px] h-[60px] relative rounded-[4px] shrink-0 cursor-pointer self-stretch`} 
      data-name="Toolbar Text label"
      onClick={onClick}
      animate={{
        scale: isActive ? 1.08 : 1,
      }}
      whileTap={{ scale: 0.92 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 10
      }}
    >
      <AohsButton2 isActive={isActive} />
      {isExpanded && <p className="font-['Roboto'] leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-nowrap text-center">Occulsgram</p>}
    </motion.div>
  );
}

function AohsButton3Margin({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[10px] shrink-0 size-[60px]" data-name="AOHS button">
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <MarginLineNew />
    </div>
  );
}

function ToolbarTextLabel3({ isActive, onClick, isExpanded }: { isActive: boolean; onClick: () => void; isExpanded?: boolean }) {
  return (
    <motion.div 
      className={`${isActive ? 'bg-[#DFF5FC]' : ''} flex flex-row items-center ${isExpanded ? 'px-[8px]' : ''} py-0 gap-[4px] h-[60px] relative rounded-[4px] shrink-0 cursor-pointer self-stretch`} 
      data-name="Toolbar Text label"
      onClick={onClick}
      animate={{
        scale: isActive ? 1.08 : 1,
      }}
      whileTap={{ scale: 0.92 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 10
      }}
    >
      <AohsButton3Margin isActive={isActive} />
      {isExpanded && <p className="font-['Roboto'] leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-nowrap text-center">Margin line</p>}
    </motion.div>
  );
}

function AohsButton4PrepQc({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[10px] shrink-0 size-[60px]" data-name="AOHS button">
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <PrepQcNew />
    </div>
  );
}

function ToolbarTextLabel4({ isActive, onClick, isExpanded }: { isActive: boolean; onClick: () => void; isExpanded?: boolean }) {
  return (
    <motion.div 
      className={`${isActive ? 'bg-[#DFF5FC]' : ''} flex flex-row items-center ${isExpanded ? 'px-[8px]' : ''} py-0 gap-[4px] h-[60px] relative rounded-[4px] shrink-0 cursor-pointer self-stretch`} 
      data-name="Toolbar Text label"
      onClick={onClick}
      animate={{
        scale: isActive ? 1.08 : 1,
      }}
      whileTap={{ scale: 0.92 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 10
      }}
    >
      <AohsButton4PrepQc isActive={isActive} />
      {isExpanded && <p className="font-['Roboto'] leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-nowrap text-center">Prep QC</p>}
    </motion.div>
  );
}

function AohsButton5Trim({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[10px] shrink-0 size-[60px]" data-name="AOHS button">
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <TrimNew />
    </div>
  );
}

function ToolbarTextLabel5({ isActive, onClick, isExpanded }: { isActive: boolean; onClick: () => void; isExpanded?: boolean }) {
  return (
    <motion.div 
      className={`${isActive ? 'bg-[#DFF5FC]' : ''} flex flex-row items-center ${isExpanded ? 'px-[8px]' : ''} py-0 gap-[4px] h-[60px] relative rounded-[4px] shrink-0 cursor-pointer self-stretch`} 
      data-name="Toolbar Text label"
      onClick={onClick}
      animate={{
        scale: isActive ? 1.08 : 1,
      }}
      whileTap={{ scale: 0.92 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 10
      }}
    >
      <AohsButton5Trim isActive={isActive} />
      {isExpanded && <p className="font-['Roboto'] leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-nowrap text-center">Trim</p>}
    </motion.div>
  );
}

function Frame5({ activeButtons, onButtonClick }: { activeButtons: Set<number>; onButtonClick: (index: number) => void }) {
  const isExpanded = activeButtons.has(6);
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-stretch p-[8px] relative shrink-0 w-full">
      <ToolbarTextLabel isActive={activeButtons.has(0)} onClick={() => onButtonClick(0)} isExpanded={isExpanded} />
      <ToolbarTextLabel1 isActive={activeButtons.has(1)} onClick={() => onButtonClick(1)} isExpanded={isExpanded} />
      <ToolbarTextLabel2 isActive={activeButtons.has(2)} onClick={() => onButtonClick(2)} isExpanded={isExpanded} />
      <ToolbarTextLabel3 isActive={activeButtons.has(3)} onClick={() => onButtonClick(3)} isExpanded={isExpanded} />
      <ToolbarTextLabel4 isActive={activeButtons.has(4)} onClick={() => onButtonClick(4)} isExpanded={isExpanded} />
      <ToolbarTextLabel5 isActive={activeButtons.has(5)} onClick={() => onButtonClick(5)} isExpanded={isExpanded} />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <circle cx="12" cy="12" r="10" stroke="#3e3d40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="16" x2="12" y2="12" stroke="#3e3d40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="8" x2="12" y2="8" stroke="#3e3d40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className={`content-stretch flex h-[40px] items-center ${isExpanded ? 'justify-start pl-[8px]' : 'justify-center'} relative rounded-[8px] shrink-0 w-[50px]`} data-name="Button">
      <Icon />
    </div>
  );
}

function AohsButton3({ onClick, isExpanded }: { onClick: () => void; isExpanded?: boolean }) {
  return (
    <div 
      className={`content-stretch flex flex-col h-[60px] ${isExpanded ? 'items-start' : 'items-center'} justify-center relative rounded-[10px] shrink-0 self-stretch cursor-pointer`}
      data-name="AOHS button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button isExpanded={isExpanded} />
    </div>
  );
}

function Frame4({ onButtonClick, activeButtons }: { onButtonClick: (index: number) => void; activeButtons: Set<number> }) {
  return (
    <div className="box-border flex flex-col items-center px-[8px] pb-[8px] pt-0 gap-[8px] w-full border-t border-[rgba(0,0,0,0.1)] rounded-bl-[12px] rounded-br-[12px] relative shrink-0">
      <AohsButton3 onClick={() => onButtonClick(6)} isExpanded={activeButtons.has(6)} />
    </div>
  );
}

function Frame6({ activeButtons, onButtonClick, microAnimations = true }: { activeButtons: Set<number>; onButtonClick: (index: number) => void; microAnimations?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame5 activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} />
      <Frame4 onButtonClick={onButtonClick} activeButtons={activeButtons} microAnimations={microAnimations} />
    </div>
  );
}

export default function ViewToolbar({ activeButtons, onButtonClick, microAnimations = true }: { activeButtons: Set<number>; onButtonClick: (index: number) => void; microAnimations?: boolean }) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[8px] relative rounded-[4px] w-full" data-name="Toolbar">
      <Frame6 activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} />
    </div>
  );
}