import React, { FC } from 'react';

type ArrowIconProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export const ArrowIcon: FC<ArrowIconProps> = ({
  width = 24,
  height = 24,
  color = '#ffffff',
  className,
}) => (
  <svg
    width={width}
    height={height}
    color={color}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 18L18 6M18 6H9M18 6V15"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
