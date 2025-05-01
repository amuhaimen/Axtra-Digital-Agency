import * as React from "react";

const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className} // Pass className for styling
    {...props} // Spread props for additional customization
  >
    <path
      d="M12 22c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1s1 .4 1 1v18c0 .6-.4 1-1 1z"
      data-original="#000000"
    />
    <path
      d="M12 22c-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.3 4.3 4.3-4.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5 5c-.2.2-.4.3-.7.3z"
      data-original="#000000"
    />
  </svg>
);

export default ArrowIcon;
