import React from "react";

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 20v-9.99l7.29 6.71c.38.35.96.35 1.34 0L20 10.01V20H4Z" />
  </svg>
);

export default EmailIcon; 