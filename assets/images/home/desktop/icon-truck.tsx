import type { SVGProps as ReactSVGProps } from "react";
import React from "react";

interface IconTruckProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}

const IconTruck = ({ title = "Truck icon", ...props }: IconTruckProps) => {
  const titleId = React.useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={72}
      height={50}
      role="img"
      aria-labelledby={title ? titleId : undefined}
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
      <path
        fill="#FDD6BA"
        d="M55.385 37.5c3.435 0 6.23 2.804 6.23 6.25S58.82 50 55.385 50s-6.231-2.804-6.231-6.25 2.795-6.25 6.23-6.25zm-38.77 0c3.436 0 6.231 2.804 6.231 6.25S20.051 50 16.616 50s-6.231-2.804-6.231-6.25 2.795-6.25 6.23-6.25m40.87 4.143h-4.2v4.214h4.2zm-38.77 0h-4.2v4.214h4.2zM48.463 0v35.397a10.5 10.5 0 0 0-3.652 7.659H27.05c-.165-5.647-4.787-10.19-10.448-10.19S6.319 37.409 6.153 43.056H0V29.12h11.77a2.736 2.736 0 0 0 2.726-2.739 2.736 2.736 0 0 0-2.727-2.738H8.345v-4.23h17.92a2.736 2.736 0 0 0 2.728-2.738 2.736 2.736 0 0 0-2.727-2.74H0V9.708h16.602a2.736 2.736 0 0 0 2.726-2.739c0-1.459-1.352-2.739-2.894-2.739h-3.307V0h35.335zM72 23.611v19.445h-6.216c-.167-5.656-4.836-10.207-10.556-10.207-.901 0-1.777.114-2.613.326v-9.564zM4.154 19.444v4.167H0v-4.167zM61.062 4.861l9.553 14.583h-18V4.861zM9 0v4.167H4.846V0z"
      />
    </svg>
  );
};

export default IconTruck;
