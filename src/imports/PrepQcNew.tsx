import svgPaths from "./svg-hhuy1g7hlp";

function Group() {
  return (
    <div className="absolute bottom-[-0.09%] left-0 right-0 top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 27">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p32f8f500} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p21588700} fill="var(--fill-0, #3D3935)" id="Vector_2" />
          </g>
          <path d={svgPaths.p3c9a2400} fill="var(--fill-0, #FECF02)" id="Vector_3" />
          <path d={svgPaths.p59da300} fill="var(--fill-0, #4EBDF9)" id="Vector_4" />
          <path d={svgPaths.p3e311200} fill="var(--fill-0, #FF0202)" id="Vector_5" />
          <path d={svgPaths.p10b6e880} fill="var(--fill-0, #FECF02)" id="Vector_6" />
          <path d={svgPaths.p3d582440} fill="var(--fill-0, #4EBDF9)" id="Vector_7" />
          <path d={svgPaths.p3b087580} fill="var(--fill-0, #FF0202)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute bottom-[-0.09%] contents left-0 right-0 top-0" data-name="Layer 1">
      <Group />
    </div>
  );
}

function Asset() {
  return (
    <div className="absolute inset-[15.59%_21.98%_15.05%_21.98%] overflow-clip" data-name="Asset 70">
      <Layer />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[38px] left-1/2 top-[calc(50%-0.1px)] translate-x-[-50%] translate-y-[-50%] w-[50px]">
      <div className="absolute bottom-[42.11%] left-[calc(50%-0.5px)] top-0 translate-x-[-50%] w-[37px]" data-name="Vector">
        <div className="absolute inset-[-3.48%_-2.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 24">
            <path d={svgPaths.p3ae92880} id="Vector" stroke="var(--stroke-0, #3D3935)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.53125" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-[47.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 20">
          <path d={svgPaths.p2c5da800} fill="var(--fill-0, #FFD6D6)" id="Vector" />
        </svg>
      </div>
      <Asset />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[-9.45%_-8.5%_-11.59%_-9.69%]">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[20px] left-[calc(50%+0.13px)] top-[calc(50%-0.11px)] translate-x-[-50%] translate-y-[-50%] w-[22px]">
      <Frame1 />
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute left-0 size-[60px] top-0" data-name="Icons">
      <Frame />
    </div>
  );
}

function Icons1() {
  return (
    <div className="absolute left-0 size-[60px] top-0" data-name="Icons">
      <Icons />
    </div>
  );
}

export default function PrepQcNew() {
  return (
    <div className="relative size-full" data-name="Prep qc new">
      <Icons1 />
    </div>
  );
}