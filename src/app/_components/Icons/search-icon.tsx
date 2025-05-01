import * as React from "react";

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props} // Pass props to make the component customizable
  >
    <path
    d="m13.691 15.105 6.102 6.102a.999.999 0 1 0 1.414-1.414l-6.101-6.102A6.972 6.972 0 0 0 16.5 9.499c0-3.863-3.136-7-7-7-3.863 0-7 3.137-7 7 0 3.864 3.137 7 7 7a6.965 6.965 0 0 0 4.191-1.394zM9.5 4.499c2.76 0 5 2.241 5 5 0 2.76-2.24 5-5 5-2.759 0-5-2.24-5-5 0-2.759 2.241-5 5-5z"
    data-original="#000000"
  />
  </svg>
);

export default SearchIcon;
