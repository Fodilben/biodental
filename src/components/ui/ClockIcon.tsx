import React from "react";

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={22}
    height={22}
    style={{ display: 'inline-block', flexShrink: 0, ...props.style }}
    {...props}
  >
    <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm0 20a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm.5-9.38V7a1 1 0 1 0-2 0v5a1 1 0 0 0 .55.89l4.5 2.25a1 1 0 1 0 .89-1.78l-3.94-1.94Z" />
  </svg>
);

export default ClockIcon; 