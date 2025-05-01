import * as React from "react";

const UpArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className} // Pass className for styling
    {...props} // Spread props for additional customization
  >
   
     <path
      d="m16.004 9.414-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2z"
      data-original="#000000"
    />
  </svg>
);

export default UpArrowIcon;
