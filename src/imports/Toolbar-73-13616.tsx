import { motion } from "motion/react";
import svgPaths from "./svg-4m16l2fjs5";

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

function AohsButton({ isActive, onClick, microAnimations }: { isActive: boolean; onClick: () => void; microAnimations: boolean }) {
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
      className={`${isActive ? 'bg-[#DFF5FC]' : ''} content-stretch flex flex-col items-center justify-between relative rounded-[10px] shrink-0 size-[60px] cursor-pointer`}
      data-name="AOHS button"
      onClick={onClick}
      {...animationProps}
    >
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <MonoChomrNew isActive={isActive} />
    </motion.div>
  );
}

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

function AohsButton1({ isActive, onClick, microAnimations }: { isActive: boolean; onClick: () => void; microAnimations: boolean }) {
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
      className={`${isActive ? 'bg-[#DFF5FC]' : ''} content-stretch flex flex-col items-center justify-between relative rounded-[10px] shrink-0 size-[60px] cursor-pointer`}
      data-name="AOHS button"
      onClick={onClick}
      {...animationProps}
    >
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <FeedbackNew isActive={isActive} />
    </motion.div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[39px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[47px]">
      <div className="absolute bottom-0 left-[-6.38%] right-[-2.13%] top-[-2.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 40">
          <g id="Frame 1618873037">
            <g id="trim area">
              <path d={svgPaths.p3d2968c0} fill="var(--fill-0, #FFD6D6)" id="Vector" />
              <path d={svgPaths.p15368980} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #3D3935)" strokeMiterlimit="10" strokeWidth="1.75" />
            </g>
            <g id="Shape">
              <path d={svgPaths.p1e660000} fill="var(--fill-0, #009ACE)" />
              <path clipRule="evenodd" d={svgPaths.pbdf0800} fill="white" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p362805c0} fill="white" fillRule="evenodd" />
              <path d={svgPaths.p3f02d080} stroke="var(--stroke-0, white)" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2({ isActive }: { isActive?: boolean }) {
  return (
    <div className="absolute left-0 size-[60px] top-0">
      <Frame7 />
    </div>
  );
}

function Frame1({ isActive }: { isActive?: boolean }) {
  return (
    <div className="absolute left-[calc(50%+1px)] size-[60px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame2 isActive={isActive} />
    </div>
  );
}

function PrepEditNew({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Prep edit new">
      <Frame1 isActive={isActive} />
    </div>
  );
}

function AohsButton2({ isActive, onClick, microAnimations }: { isActive: boolean; onClick: () => void; microAnimations: boolean }) {
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
      className={`${isActive ? 'bg-[#DFF5FC]' : ''} content-stretch flex flex-col items-center justify-between relative rounded-[10px] shrink-0 size-[60px] cursor-pointer`}
      data-name="AOHS button"
      onClick={onClick}
      {...animationProps}
    >
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <PrepEditNew isActive={isActive} />
    </motion.div>
  );
}

function Frame5({ activeButtons, onButtonClick, microAnimations }: { activeButtons: Set<number>; onButtonClick: (index: number) => void; microAnimations: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center p-[8px] relative shrink-0 w-full">
      <AohsButton isActive={activeButtons.has(0)} onClick={() => onButtonClick(0)} microAnimations={microAnimations} />
      <AohsButton1 isActive={activeButtons.has(1)} onClick={() => onButtonClick(1)} microAnimations={microAnimations} />
      <AohsButton2 isActive={activeButtons.has(2)} onClick={() => onButtonClick(2)} microAnimations={microAnimations} />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20.001px]" data-name="Icon">
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

function Button() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[8px] shrink-0 w-[50px]" data-name="Button">
      <Icon />
    </div>
  );
}

function AohsButton3({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="content-stretch flex flex-col h-[60px] items-center justify-center relative rounded-[10px] shrink-0 self-stretch cursor-pointer"
      data-name="AOHS button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-0 border-[#00adef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button />
    </div>
  );
}

function Frame4({ onButtonClick }: { onButtonClick: (index: number) => void }) {
  return (
    <div className="box-border flex flex-col items-center px-[8px] pb-[8px] pt-0 gap-[8px] w-full border-t border-[rgba(0,0,0,0.1)] rounded-bl-[12px] rounded-br-[12px] relative shrink-0">
      <AohsButton3 onClick={() => onButtonClick(3)} />
    </div>
  );
}

function Frame6({ activeButtons, onButtonClick, microAnimations }: { activeButtons: Set<number>; onButtonClick: (index: number) => void; microAnimations: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame5 activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} />
      <Frame4 onButtonClick={onButtonClick} />
    </div>
  );
}

export default function Toolbar({ activeButtons, onButtonClick, microAnimations = true }: { activeButtons: Set<number>; onButtonClick: (index: number) => void; microAnimations?: boolean }) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[8px] relative rounded-[4px] w-full" data-name="Toolbar">
      <Frame6 activeButtons={activeButtons} onButtonClick={onButtonClick} microAnimations={microAnimations} />
    </div>
  );
}
