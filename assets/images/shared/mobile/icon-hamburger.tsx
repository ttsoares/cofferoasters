import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconHamburgerProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IconHamburger = (props: IconHamburgerProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={15} {...props}>
    <path
      fill="#333D4B"
      fillRule="evenodd"
      d="M14.5 12a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zm0-6a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zm0-6a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3z"
    />
  </svg>
);
export default IconHamburger;

