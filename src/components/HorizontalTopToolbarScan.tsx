import React from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-76kjqgrbiw";

function InfoIcon() {
  return (
    <svg className="block size-[20px]" viewBox="0 0 24 24" fill="none" stroke="#3e3d40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </svg>
  );
}

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

function MonoChomrNew() {
  return (
    <div className="relative rounded-[8.75px] shrink-0 size-[60px]" data-name="Mono chomr new">
      <Frame />
    </div>
  );
}

function AohsButton({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <motion.div 
      className={`${isActive ? 'bg-[#DFF5FC]' : 'bg-white'} content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[60px] cursor-pointer overflow-hidden p-[6px]`} 
      data-name="AOHS button"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="relative flex items-center justify-center size-full overflow-hidden">
        <MonoChomrNew />
      </div>
    </motion.div>
  );
}

function ToolbarTextLabel({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  // No change here, this is just a wrapper for the button
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Toolbar Text label">
      <AohsButton isActive={isActive} onClick={onClick} />
    </div>
  );
}

// Feedback Icon
function TrimArea1() {
  return (
    <div className="absolute inset-[18.33%_8.33%_16.67%_8.33%]" data-name="trim area">
      <div className="absolute bottom-0 left-0 right-0 top-[-2.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 41">
          <g id="trim area">
            <path d={svgPaths.p1f4faa00} fill="var(--fill-0, #FFD6D6)" id="Vector" />
            <path d={svgPaths.p161588f0} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #3D3935)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06414" />
            <path d={svgPaths.p1031d180} fill="var(--fill-0, #008EC2)" id="Vector_3" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="2.06414" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return <div className="absolute left-1/2 size-[50px] top-1/2 translate-x-[-50%] translate-y-[-50%]" />;
}

function FeedbackNew() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Feedback new">
      <TrimArea1 />
      <Frame1 />
    </div>
  );
}

function AohsButton1({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <motion.div 
      className={`${isActive ? 'bg-[#DFF5FC]' : 'bg-white'} content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[60px] cursor-pointer overflow-hidden p-[6px]`} 
      data-name="AOHS button"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="relative flex items-center justify-center size-full overflow-hidden">
        <FeedbackNew />
      </div>
    </motion.div>
  );
}

function ToolbarTextLabel1({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  // No change here, this is just a wrapper for the button
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Toolbar Text label">
      <AohsButton1 isActive={isActive} onClick={onClick} />
    </div>
  );
}

// Prep QC / Panel Icon
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
              <path d={svgPaths.p2b201d80} fill="var(--fill-0, #FFD6D6)" id="Vector" />
              <path d={svgPaths.p16a0d0e0} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #3D3935)" strokeMiterlimit="10" strokeWidth="1.4" />
            </g>
            <g id="Shape">
              <path d={svgPaths.pabd600} fill="var(--fill-0, #009ACE)" />
              <path clipRule="evenodd" d={svgPaths.p21b85980} fill="white" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1ba64c70} fill="white" fillRule="evenodd" />
              <path d={svgPaths.p34f3c300} stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="0.8" />
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

function PrepEditToTest() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="Prep edit to test">
      <PrepQc />
    </div>
  );
}

function AohsButton2({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <motion.div 
      className={`${isActive ? 'bg-[#DFF5FC]' : 'bg-white'} content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[60px] cursor-pointer overflow-hidden p-[6px]`} 
      data-name="AOHS button"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="relative flex items-center justify-center size-full overflow-hidden">
        <PrepEditToTest />
      </div>
    </motion.div>
  );
}

function ToolbarTextLabel2({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  // No change here, this is just a wrapper for the button
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Toolbar Text label">
      <AohsButton2 isActive={isActive} onClick={onClick} />
    </div>
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

// Expanded Toolbar - all buttons with vertical text labels for compact design
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
    <div className="bg-white flex gap-[8px] items-stretch p-[8px] relative rounded-bl-[4px] rounded-tl-[4px] font-['Roboto'] h-[76px]">
      
      {/* Monochrome */}
      <motion.div 
        className={`${activeButtons.has(0) ? 'bg-[#DFF5FC]' : ''} flex ${stackVertical ? 'flex-col items-center justify-center gap-[4px]' : 'items-center gap-[8px]'} py-[2px] px-[8px] rounded-[4px] cursor-pointer`}
        onClick={() => onButtonClick(0)}
        whileTap={{ scale: 0.95 }}
      >
        <AohsButton isActive={activeButtons.has(0)} onClick={() => {}} />
        <p className="font-['Roboto'] text-[14px] leading-[16px] text-black whitespace-nowrap text-center">Monochrome</p>
      </motion.div>

      {/* Feedback */}
      <motion.div 
        className={`${activeButtons.has(1) ? 'bg-[#DFF5FC]' : ''} flex ${stackVertical ? 'flex-col items-center justify-center gap-[4px]' : 'items-center gap-[8px]'} py-[2px] px-[8px] rounded-[4px] cursor-pointer`}
        onClick={() => onButtonClick(1)}
        whileTap={{ scale: 0.95 }}
      >
        <AohsButton1 isActive={activeButtons.has(1)} onClick={() => {}} />
        <p className="font-['Roboto'] text-[14px] leading-[16px] text-black whitespace-nowrap text-center">Scan assist</p>
      </motion.div>

      {/* Prep Edit */}
      <motion.div 
        className={`${activeButtons.has(2) ? 'bg-[#DFF5FC]' : ''} flex ${stackVertical ? 'flex-col items-center justify-center gap-[4px]' : 'items-center gap-[8px]'} py-[2px] px-[8px] rounded-[4px] cursor-pointer`}
        onClick={() => onButtonClick(2)}
        whileTap={{ scale: 0.95 }}
      >
        <AohsButton2 isActive={activeButtons.has(2)} onClick={() => {}} />
        <p className="font-['Roboto'] text-[14px] leading-[16px] text-black whitespace-nowrap text-center">Prep edit</p>
      </motion.div>
    </div>
  );
}

function Frame4({ activeButtons, onButtonClick }: { activeButtons: Set<number>; onButtonClick: (index: number) => void }) {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[8px] relative rounded-bl-[4px] rounded-tl-[4px] self-stretch shrink-0 h-[76px]">
      <ToolbarTextLabel isActive={activeButtons.has(0)} onClick={() => onButtonClick(0)} />
      <ToolbarTextLabel1 isActive={activeButtons.has(1)} onClick={() => onButtonClick(1)} />
      <ToolbarTextLabel2 isActive={activeButtons.has(2)} onClick={() => onButtonClick(2)} />
    </div>
  );
}

// Hamburger Menu Icon
function Icon() {
  return (
    <div className="relative shrink-0 size-[20.001px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          {/* Simple hamburger icon to ensure paths always render */}
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

function Frame3({ onButtonClick }: { onButtonClick: (index: number) => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col h-[76px] items-center justify-center relative rounded-bl-[4px] rounded-br-[4px] w-[76px]">
      <div aria-hidden="true" className="absolute border-l border-[rgba(0,0,0,0.1)] inset-0 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rotate-[270deg]">
          <AohsButton3 onClick={() => onButtonClick(3)} />
        </div>
      </div>
    </div>
  );
}

export function HorizontalTopToolbarScan({
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
  const isExpanded = activeButtons.has(3);

  if (isExpanded) {
    return (
      <div className="content-stretch flex items-start relative rounded-bl-[4px] rounded-tl-[4px] font-['Roboto'] h-[76px]">
        <ExpandedToolbar activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} stackVertical={stackVertical} />
        <div className="relative h-[76px] w-[76px] shrink-0 flex items-center justify-center overflow-hidden bg-white rounded-br-[4px]">
          <div aria-hidden="true" className="absolute inset-0 border-l border-[rgba(0,0,0,0.1)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rotate-[270deg]">
              <AohsButton3 onClick={() => onButtonClick(3)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-stretch flex items-start relative rounded-bl-[4px] rounded-tl-[4px] h-[76px] font-['Roboto']">
      <Frame4 activeButtons={activeButtons} onButtonClick={onButtonClick} />
      <div className="flex h-[76px] items-center justify-center relative shrink-0 w-[76px]" style={{ "--transform-inner-width": "60", "--transform-inner-height": "60" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Frame3 onButtonClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
}