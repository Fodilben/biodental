import React from "react";

const MapIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.02 10.45 7.32 10.67.41.3.95.3 1.36 0C13.98 21.45 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.54C9.14 18.09 5 14.47 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.47-4.14 7.09-7 9.54ZM12 6.5A4.5 4.5 0 0 0 7.5 11c0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5A4.5 4.5 0 0 0 12 6.5Zm0 7A2.5 2.5 0 1 1 12 9a2.5 2.5 0 0 1 0 5Z" />
  </svg>
);

export default MapIcon; 