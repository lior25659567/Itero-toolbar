import svgPaths from "./svg-5bcb35pldw";

function TrimArea() {
  return (
    <div className="absolute bottom-[-9.68%] left-1/2 top-[-9.68%] translate-x-[-50%] w-[50px]" data-name="trim area">
      <div className="absolute bottom-0 left-0 right-0 top-[-2.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 38">
          <g id="trim area">
            <path d={svgPaths.p13361480} fill="var(--fill-0, #FFD6D6)" id="Vector" />
            <path d={svgPaths.p15746f00} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #3D3935)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.95653" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[-6.92%_4.68%_66.37%_4%]" data-name="Layer 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 13">
        <g id="Layer 1">
          <path d={svgPaths.p11aa7180} fill="var(--fill-0, #FF0202)" id="Vector" />
          <path d={svgPaths.p1ea8dff0} fill="var(--fill-0, #F98A14)" id="Vector_2" />
          <path d={svgPaths.p1b3d9700} fill="var(--fill-0, #FECF02)" id="Vector_3" />
          <path d={svgPaths.p2d90e200} fill="var(--fill-0, #4EC410)" id="Vector_4" />
          <path d={svgPaths.p1affb100} fill="var(--fill-0, #4EBDF9)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[31px] left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[40px]">
      <TrimArea />
      <Layer />
    </div>
  );
}

export default function OcculsgramNew() {
  return (
    <div className="relative size-full" data-name="Occulsgram new">
      <Frame />
    </div>
  );
}