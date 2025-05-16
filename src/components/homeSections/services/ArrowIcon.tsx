import React from "react";

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  style?: React.CSSProperties;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ className = "", style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    viewBox="0 0 24 24"
    className={className}
    style={{
      userSelect: "none",
      width: "100%",
      height: "100%",
      display: "inline-block",
      fill: "var(--token-0cebaade-7e47-4690-a6b7-fa6a4da1dbd3, rgb(184, 204, 175))",
      flexShrink: 0,
      ...style,
    }}
    {...props}
  >
    <path d="M11.71 15.29l2.59-2.59c.39-.39.39-1.02 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"></path>
  </svg>
);

export default ArrowIcon; 