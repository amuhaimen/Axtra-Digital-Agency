import * as React from "react";

const RightArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className} // Pass className for styling
    {...props} // Spread props for additional customization
  >
   
   <path
    d="m12 2-1.4 1.4L16.2 9H0v2h16.2l-5.6 5.6L12 18l8-8z"
    data-original="#000000"
  />
  </svg>
);

export default RightArrowIcon;
