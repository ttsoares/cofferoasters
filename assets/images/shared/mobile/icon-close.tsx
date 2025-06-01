import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconCloseProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IconClose = (props: IconCloseProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} {...props}>
    <path
      fill="#333D4B"
      fillRule="evenodd"
      d="M12.657.843a1.5 1.5 0 0 1 0 2.121L9.12 6.5l3.536 3.536a1.5 1.5 0 1 1-2.121 2.12L7 8.622l-3.536 3.536a1.5 1.5 0 1 1-2.12-2.121L4.877 6.5 1.343 2.964A1.5 1.5 0 1 1 3.464.844L7 4.377 10.536.843a1.5 1.5 0 0 1 2.12 0z"
    />
  </svg>
);
export default IconClose;

