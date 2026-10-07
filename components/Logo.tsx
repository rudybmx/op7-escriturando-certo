import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showAcademyBadge?: boolean;
}

export const LogoIcon: React.FC<{ className?: string; bubbleBg?: string }> = ({ 
  className = "h-8 w-8",
  bubbleBg
}) => {
  return (
    <svg 
      viewBox="0 0 115 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Escriturando Certo Ícone"
    >
      {/* Speech bubble with tail */}
      <path
        d="M26 18H82C90.8366 18 98 25.1634 98 34V72C98 80.8366 90.8366 88 82 88H44L22 104V88H20C11.1634 88 4 80.8366 4 72V34C4 25.1634 11.1634 18 20 18H26Z"
        fill={bubbleBg || "#212124"}
      />
      {/* Bold Golden Amber Checkmark breaking through the top-right corner */}
      <path
        d="M20 54.5L46.5 79.5L106 14L91 4L45 59.5L31.5 45.5L20 54.5Z"
        fill="#F5A623"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-8", 
  variant = "dark",
  showAcademyBadge = true
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#231F20';
  const bubbleColor = isDark ? '#1C1D22' : '#231F20';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg 
        viewBox="0 0 460 110" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full"
        role="img"
        aria-label="Escriturando Certo"
      >
        {/* Left Icon: Speech bubble with checkmark */}
        <g id="logo-icon" transform="translate(4, 2)">
          {/* Speech bubble */}
          <path
            d="M26 18H82C90.8366 18 98 25.1634 98 34V72C98 80.8366 90.8366 88 82 88H44L22 104V88H20C11.1634 88 4 80.8366 4 72V34C4 25.1634 11.1634 18 20 18H26Z"
            fill={bubbleColor}
          />
          {/* Golden Checkmark extending out to the top-right */}
          <path
            d="M20 54.5L46.5 79.5L106 14L91 4L45 59.5L31.5 45.5L20 54.5Z"
            fill="#F5A623"
          />
        </g>

        {/* Brand Typography */}
        <g id="logo-typography">
          {/* "ESCRITURANDO" in bold black or crisp white */}
          <text 
            x="126" 
            y="54" 
            fill={textColor} 
            fontFamily="Inter, system-ui, -apple-system, sans-serif" 
            fontSize="43" 
            fontWeight="900" 
            letterSpacing="-0.03em"
          >
            ESCRITURANDO
          </text>

          {/* "CERTO" in signature gold #F5A623 */}
          <text 
            x="222" 
            y="98" 
            fill="#F5A623" 
            fontFamily="Inter, system-ui, -apple-system, sans-serif" 
            fontSize="47" 
            fontWeight="900" 
            letterSpacing="-0.02em"
          >
            CERTO
          </text>
        </g>
      </svg>

      {showAcademyBadge && (
        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-black tracking-widest uppercase bg-[#F5A623]/20 text-[#F5A623] border border-[#F5A623]/40 self-center">
          ACADEMY
        </span>
      )}
    </div>
  );
};
