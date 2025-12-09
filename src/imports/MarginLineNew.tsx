import svgPaths from "./svg-bsxhplmlav";

function TrimArea() {
  return (
    <div className="absolute inset-[18.33%_7.82%_18.33%_8.85%]" data-name="trim area">
      <div className="absolute bottom-0 left-0 right-0 top-[-2.31%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 39">
          <g id="trim area">
            <path d={svgPaths.p2bdf0900} fill="var(--fill-0, #FFD6D6)" id="Vector" />
            <path d={svgPaths.p2c67eb40} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #3D3935)" strokeMiterlimit="10" strokeWidth="1.75" />
            <g id="Group">
              <path d={svgPaths.p33e16970} fill="var(--fill-0, #239B28)" id="Vector_3" />
              <path d={svgPaths.p356c8900} fill="var(--fill-0, white)" id="Vector_4" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-0 size-[60px] top-0">
      <TrimArea />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[calc(50%-0.31px)] size-[60px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame1 />
    </div>
  );
}

export default function MarginLineNew() {
  return (
    <div className="relative size-full" data-name="Margin line new">
      <Frame />
    </div>
  );
}