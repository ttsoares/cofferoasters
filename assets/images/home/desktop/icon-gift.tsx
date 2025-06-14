import type { SVGProps as ReactSVGProps } from "react";
import React from "react";

interface IconGiftProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}

const IconGift = ({ title = "Gift icon", ...props }: IconGiftProps) => {
  const titleId = React.useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={72}
      height={72}
      aria-labelledby={title ? titleId : undefined}
      role="img"
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
      <path
        fill="#FDD6BA"
        d="M34 44v28H11.297C8.391 72 6 69.672 6 66.842V44zm32 0v22.842C66 69.672 63.609 72 60.703 72H38V44zM55.73 0C64.05.003 67 4.347 67 8.067c0 4.26-3.952 9.643-12.424 12.934L66.711 21C69.612 21 72 23.37 72 26.25v7.5c0 2.88-2.388 5.25-5.289 5.25H38l.001-15.02a70 70 0 0 1-1.7.02q-.15 0-.3-.02-.15.02-.303.02-.861 0-1.698-.02V39H5.289C2.388 39 0 36.63 0 33.75v-7.5C0 23.37 2.388 21 5.289 21h12.135C8.952 17.71 5 12.327 5 8.066 5 4.345 7.953 0 16.272 0 27.008 0 33.088 7.615 36 14.592 38.911 7.615 44.992 0 55.73 0M16.273 4.451c-3.223 0-6.667.95-6.667 3.614 0 3.79 6.855 10.695 23.217 11.422-1.381-4.932-5.556-15.036-16.55-15.036m39.459.002c-10.997 0-15.172 10.103-16.556 15.031 8.675-.391 14.146-2.513 17.295-4.32 4.369-2.507 5.925-5.31 5.925-7.1 0-2.664-3.441-3.61-6.664-3.61z"
      />
    </svg>
  );
};

export default IconGift;
