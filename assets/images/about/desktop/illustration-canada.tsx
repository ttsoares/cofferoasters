import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IllustrationCanadaProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IllustrationCanada = (props: IllustrationCanadaProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={52} height={50} {...props}>
    <path
      fill="#0E8784"
      d="m7.484 8.42 10.811 10.81 3.327-3.326 5.82 3.327-2.494 3.326-3.326 6.653 5.82 2.495 2.496 4.158 2.494-4.99-3.326-4.158 3.326-2.495 3.327 3.327 3.326-3.327 4.99 4.99v3.326l-4.99 3.327 5.821 2.495-.831 4.99h-6.653L33.264 50l-3.326-6.653-4.99-3.326-2.495 4.158-19.958-9.98L0 26.716l2.786-2.76-1.954-8.05zm41.58 37.422a.832.832 0 1 1 0 1.663h-1.663a.832.832 0 0 1 0-1.663zM50.728 34.2a.832.832 0 0 1 0 1.663h-1.664a.832.832 0 0 1 0-1.663zM32.432 9.252l7.485 5.82-1.663 4.99-2.495 1.664-2.495-1.664v-2.494l-2.495-3.327-1.321.565-3.322-2.416.604-2.717 5.702-.42zM15.8 4.262l6.653 6.653-4.306 1.726-5.673-5.053zM22.83.043l5.444.06v4.99l-4.99.832L20.79 3.43 22.83.044z"
    />
  </svg>
);
export default IllustrationCanada;

