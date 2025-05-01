import * as React from "react";

const DoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className} // Pass className for styling
    {...props} // Spread props for additional customization
  >
   
   <path
        d="M2.25 3A.75.75 0 0 1 3 2.25h12v1.5H3.75v16.5h16.5V10h1.5v11a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
        data-original="#000000"
      />
      <path
        d="m11.971 12.41 8.472-9.412 1.115 1.004-9.53 10.587L7.97 10.53l1.06-1.06z"
        data-original="#000000"
      />
  </svg>
);

export default DoneIcon;
