import svgPaths from "./svg-rjhxv8zxsn";

function Text() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[118.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[22.5px] relative w-[118.828px]">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[30px] left-0 text-[24px] text-nowrap text-white top-[-1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Margin line
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[21.333px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p1330f52c} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.77778" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2a13940} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.77778" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[5.333px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[5.333px] px-[5.333px] relative size-[32px]">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#00adef] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#0099d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Text />
          <Button />
        </div>
      </div>
    </div>
  );
}

function RightIcon() {
  return (
    <div className="relative shrink-0 size-[24.643px]" data-name="Right icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Right icon">
          <path d={svgPaths.p33af280} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RightItem() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[23.102px] size-[52px]" data-name="Right item">
      <RightIcon />
    </div>
  );
}

function RightIcon1() {
  return (
    <div className="relative shrink-0 size-[24.643px]" data-name="Right icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Right icon">
          <path d={svgPaths.p2a42fb00} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RightItem1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[23.102px] shrink-0 size-[52px]" data-name="Right item">
      <RightIcon1 />
    </div>
  );
}

function MiddlePart() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Middle part">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <RightItem />
        </div>
      </div>
      <p className="font-['Avenir:Heavy',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tooth 47
      </p>
      <RightItem1 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <MiddlePart />
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-[#dff5fc] h-[80px] relative shrink-0 w-full" data-name="List item">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[80px] items-start justify-center px-[16px] py-0 relative w-full">
          <Content />
          <div className="absolute bg-[#e0e0e0] bottom-[0.39px] h-[0.77px] left-0 right-0" data-name="Divider" />
        </div>
      </div>
    </div>
  );
}

function Draw() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Draw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Draw" opacity="0">
          <path d={svgPaths.p34bbca00} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftItem() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-24px] relative shrink-0 size-[64px]" data-name="Left item">
      <Draw />
    </div>
  );
}

function TextPart() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center mr-[-24px] px-[16px] py-[6px] relative self-stretch shrink-0" data-name="Text part">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Detect margin</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[24px] py-0 relative shrink-0" data-name="Content">
      <LeftItem />
      <TextPart />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List item">
      <Content1 />
      <div className="absolute bg-[#e0e0e0] bottom-0 h-px left-0 opacity-0 right-0" data-name="Divider" />
    </div>
  );
}

function Draw1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Draw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Draw">
          <path d={svgPaths.p34bbca00} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftItem1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-24px] relative shrink-0 size-[64px]" data-name="Left item">
      <Draw1 />
    </div>
  );
}

function TextPart1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center mr-[-24px] px-[16px] py-[6px] relative self-stretch shrink-0" data-name="Text part">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Mark manually</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[24px] py-0 relative shrink-0" data-name="Content">
      <LeftItem1 />
      <TextPart1 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="List item">
      <Content2 />
      <div className="absolute bg-[#e0e0e0] bottom-0 h-px left-0 opacity-0 right-0" data-name="Divider" />
    </div>
  );
}

function Delete() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Delete">
          <g id="Shape">
            <path d="M10.5 9H9V18H10.5V9Z" fill="#3E3D40" />
            <path d="M15 9H13.5V18H15V9Z" fill="#3E3D40" />
            <path d={svgPaths.p2fd4ae40} fill="#3E3D40" />
            <path d="M15 1.5H9V3H15V1.5Z" fill="#3E3D40" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftItem2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-24px] relative shrink-0 size-[64px]" data-name="Left item">
      <Delete />
    </div>
  );
}

function TextPart2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center mr-[-24px] px-[16px] py-[6px] relative self-stretch shrink-0" data-name="Text part">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Clear</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[24px] py-0 relative shrink-0" data-name="Content">
      <LeftItem2 />
      <TextPart2 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="List item">
      <Content3 />
      <div className="absolute bg-[#e0e0e0] bottom-0 h-px left-0 opacity-0 right-0" data-name="Divider" />
    </div>
  );
}

function Undo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Undo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Undo">
          <path d={svgPaths.p34ab8900} fill="var(--fill-0, #3E3D40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftItem3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-24px] relative shrink-0 size-[64px]" data-name="Left item">
      <Undo />
    </div>
  );
}

function TextPart3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center mr-[-24px] px-[16px] py-[6px] relative self-stretch shrink-0" data-name="Text part">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e3d40] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Undo</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[24px] py-0 relative shrink-0" data-name="Content">
      <LeftItem3 />
      <TextPart3 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="List item">
      <Content4 />
      <div className="absolute bg-[#e0e0e0] bottom-0 h-px left-0 opacity-0 right-0" data-name="Divider" />
    </div>
  );
}

function WandIcon() {
  return (
    <div className="absolute left-[20px] size-[24px] top-[20px]" data-name="wand icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="wand icon">
          <path clipRule="evenodd" d={svgPaths.p10912200} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" id="Vector 23 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p35142b80} fill="var(--fill-0, #3E3D40)" fillRule="evenodd" id="Vector 24 (Stroke)" />
          <path d={svgPaths.p10412d00} fill="var(--fill-0, #3E3D40)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <WandIcon />
    </div>
  );
}

export default function Panel() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[284px]" data-name="Panel">
      <Container />
      <ListItem />
      <Frame />
    </div>
  );
}