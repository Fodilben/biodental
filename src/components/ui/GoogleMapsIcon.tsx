import * as React from "react";

const GoogleMapsIcon = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={className}
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="#F7F7F5" />
    <g>
      <path d="M16 6a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 16 10a2.5 2.5 0 0 1 0 5.5z" fill="#34A853" />
      <circle cx="16" cy="13.5" r="2.5" fill="#EA4335" />
      <path d="M16 6v7.5" stroke="#4285F4" strokeWidth="1.5" />
    </g>
  </svg>
);

export default GoogleMapsIcon; 