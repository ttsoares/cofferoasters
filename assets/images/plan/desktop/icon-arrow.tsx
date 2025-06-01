import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconArrowProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
  state: boolean
}

const IconArrow = (props: IconArrowProps) => (
  <svg
    style={{ transform: props.state ? 'rotate(180deg)' : 'rotate(0deg)' }}
    xmlns="http://www.w3.org/2000/svg" width={19} height={13} {...props}>
    <path
      fill="#0E8784"
      d="m15.949.586 2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
    />
  </svg>
);
export default IconArrow;
