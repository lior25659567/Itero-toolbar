import svgPaths from "./svg-cfa3wh16k2";

function TrimArea() {
  return (
    <div className="absolute h-[35.218px] left-1/2 top-[calc(50%+1.39px)] translate-x-[-50%] translate-y-[-50%] w-[50px]" data-name="trim area">
      <div className="absolute bottom-0 left-0 right-0 top-[-2.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 37">
          <g id="trim area">
            <path d={svgPaths.p25b3e280} fill="var(--fill-0, #9FE1FA)" id="Vector" />
            <g id="Vector_2">
              <path d={svgPaths.p3df04000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3df04000} fill="var(--fill-1, white)" />
              <path d={svgPaths.p3df04000} stroke="var(--stroke-0, #3D3935)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93536" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative size-full" data-name="Group">
      <div className="absolute inset-[-3.73%_-4.42%_-3.73%_-4.43%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 29">
          <g id="Group">
            <path d={svgPaths.p2d44feb0} id="Vector" stroke="var(--stroke-0, #009ACE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3ada57a0} id="Vector_2" stroke="var(--stroke-0, #009ACE)" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[41.09%] contents left-[42.47%] right-0 top-[-16.67%]" data-name="Group">
      <div className="absolute bottom-[41.09%] flex items-center justify-center left-[42.47%] right-0 top-[-16.67%]">
        <div className="flex-none h-[26.809px] rotate-[345deg] w-[22.596px]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[42px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[50px]">
      <TrimArea />
      <Group1 />
    </div>
  );
}

export default function NiriIonNew() {
  return (
    <div className="relative size-full" data-name="Niri+ Ion new">
      <Frame />
    </div>
  );
}