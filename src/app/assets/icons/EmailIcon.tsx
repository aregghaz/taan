import React, { FC } from 'react';

type EmailIconProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export const EmailIcon: FC<EmailIconProps> = ({
  width = 24,
  height = 24,
  color = '#ffffff',
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    color={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title />
    <g id="Complete">
      <g id="mail">
        <g>
          <polyline
            fill="none"
            points="4 8.2 12 14.1 20 8.2"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <rect
            fill="none"
            height={14}
            rx={2}
            ry={2}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            width={18}
            x={3}
            y={6.5}
          />
        </g>
      </g>
    </g>
  </svg>
);
