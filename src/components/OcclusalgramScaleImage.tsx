// Occlusalgram Scale Image Component
// Built from CSS specifications for bottom toolbar layout
export default function OcclusalgramScaleImage() {
  // Color segments from left to right
  const colorSegments = [
    '#0066FF', // 1.3 - Bright Blue
    '#0197EC', // 1.2 - Blue
    '#3FBAFF', // 1.1 - Light Blue
    '#0FF4FC', // 1.0 - Cyan
    '#2CE9C6', // 0.9 - Cyan Green
    '#54BF00', // 0.8 - Green
    '#FFE600', // 0.7 - Yellow
    '#FFD600', // 0.6 - Yellow Orange
    '#FFA008', // 0.5 - Orange
    '#F7771A', // 0.4 - Orange Red
    '#FF0000', // 0.3 - Bright Red
    '#C61313', // 0.2 - Red
  ];

  // All labels
  const labels = ['0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6'];

  return (
    <div className="relative w-[1014px] h-[68px]">
      {/* Color bar container - positioned at top */}
      <div 
        className="absolute flex flex-row"
        style={{
          left: '0%',
          right: '20.91%',
          top: '13.24%',
          bottom: '52.94%',
          height: '22px'
        }}
      >
        {colorSegments.map((color, index) => (
          <div
            key={index}
            style={{
              width: '67.75px',
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

      {/* Number labels container - positioned at bottom */}
      <div
        className="absolute flex flex-row justify-between items-center"
        style={{
          left: '0%',
          right: '20.02%',
          top: '52.94%',
          bottom: '0%',
          gap: '29px',
          padding: '0px'
        }}
      >
        {labels.map((label, index) => (
          <span
            key={index}
            className="font-['Avenir'] text-base text-black text-center"
            style={{
              width: '28px',
              height: '32.42px',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '32px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}


