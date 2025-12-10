// Prep QC Scale Image Component
// Built with 7 color segments for Prep QC panel
export default function PrepQcScaleImage() {
  // Color segments from left to right (7 segments)
  const colorSegments = [
    'rgba(0, 102, 255, 1)',    // Blue
    'rgba(44, 233, 199, 1)',   // Cyan Green
    'rgba(63, 186, 255, 1)',   // Light Blue
    'rgba(84, 191, 0, 1)',     // Green
    'rgba(255, 214, 0, 1)',   // Yellow
    'rgba(247, 119, 26, 1)',  // Orange
    'rgba(255, 0, 0, 1)',     // Red
  ];

  // Labels - all labels as per CSS (14 labels total)
  const labels = [
    { text: '0.2', width: '23px' },
    { text: '0.3', width: '28px' },
    { text: '0.4', width: '28px' },
    { text: '0.5', width: '28px' },
    { text: '0.6', width: '28px' },
    { text: '0.7', width: '28px' },
    { text: '0.8', width: '28px' },
    { text: '0.9', width: '28px' },
    { text: '1.0', width: '28px' },
    { text: '1.1', width: '28px' },
    { text: '1.2', width: '28px' },
    { text: '1.3', width: '28px' },
    { text: '1.4', width: '28px' },
    { text: '1.6', width: '53px' },
  ];

  // Color bar width: 794px (matches labels container)
  const colorBarWidth = 794;
  const segmentWidth = colorBarWidth / 7; // ~113.43px per segment

  return (
    <div className="relative w-[1014px] h-[68px]">
      {/* Color bar container - 7 segments, width 794px */}
      <div 
        className="absolute flex flex-row"
        style={{
          left: '0%',
          width: '794px',
          top: '13.24%',
          bottom: '52.94%',
          height: '22px'
        }}
      >
        {colorSegments.map((color, index) => (
          <div
            key={index}
            style={{
              width: `${segmentWidth}px`,
              height: '20px',
              backgroundColor: color,
              flexShrink: 0
            }}
          />
        ))}
      </div>

      {/* Button - Change scale - positioned on the right */}
      <div
        className="absolute flex flex-row justify-center items-center"
        style={{
          left: '83.43%',
          right: '0%',
          top: '0%',
          bottom: '5.88%',
          padding: '22px 24px',
          gap: '10px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F3F3 100%)',
          border: '1px solid #939598',
          borderRadius: '4px',
          boxSizing: 'border-box'
        }}
      >
        <span
          className="font-['Avenir'] text-base leading-5 text-center text-[#3E3D40] whitespace-nowrap"
          style={{
            width: '97px',
            height: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Change scale
        </span>
      </div>

      {/* Number labels container - Group 563047, width 794px */}
      <div
        className="absolute flex flex-row items-center"
        style={{
          left: '0%',
          width: '794px',
          height: '32.42px',
          top: '41.5%',
          bottom: '0%',
          gap: '29px',
          padding: '0px'
        }}
      >
        {labels.map((label, index) => (
          <span
            key={index}
            className="font-['Avenir'] text-base text-black"
            style={{
              width: label.width,
              height: '32px',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: label.text === '1.6' ? 'flex-end' : 'center',
              textAlign: label.text === '1.6' ? 'right' : 'center',
              flex: 'none',
              order: index,
              flexGrow: 0
            }}
          >
            {label.text}
          </span>
        ))}
      </div>
    </div>
  );
}
