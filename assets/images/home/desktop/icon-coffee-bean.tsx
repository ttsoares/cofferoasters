import type { SVGProps as ReactSVGProps } from "react";
import React from "react";

interface IconCoffeeBeanProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}

const IconCoffeeBean = ({ title, size, ...props }: IconCoffeeBeanProps) => {
  const titleId = title ? "icon-coffee-bean-title" : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 73}
      height={size || 72}
      aria-labelledby={titleId}
      role="img"
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
      <path
        fill="#FDD6BA"
        d="M71.806 39.226c-.968-9.481-5.498-18.76-12.758-26.122C43.93-2.22 21.512-4.428 9.078 8.194-3.365 20.812-1.19 43.537 13.924 58.864c7.26 7.362 16.41 11.957 25.76 12.938q1.869.196 3.687.198c8.04 0 15.229-2.858 20.523-8.226 6.088-6.17 8.901-14.89 7.912-24.548m-22.125 7.78c-4.953-3.833-10.322-5.35-16.153-6.97C18.85 35.955 11.558 23.535 9.855 8.977c4.135 5.058 7.188 10.836 12.265 15.07 5.409 4.51 11.364 6.152 17.905 8.074 14.36 4.225 21.464 16.538 23.097 30.87-4.482-5.463-7.77-11.592-13.441-15.984z"
      />
    </svg>
  );
};

export default IconCoffeeBean;
