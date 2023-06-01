import React from "react";
import classNames from "classnames";
import { MouseEventHandler } from "react";
import { Title } from "../Title";

type Props = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  color?: string;
  textColor?: string;
  hoverTextColor?: string;
  width?: string;
  disable?: boolean;
};

export function Button({
  type = "button",
  className,
  children,
  onClick,
  color,
  width = "w-[113px]",
  disable,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disable}
      className={classNames(
        `rounded-md font-Roboto  transition-all ease-in-out duration-300 no-underline ${width} h-[38px] flex justify-center items-center `,
        {
          "bg-[#F48023] hover:ring-1 hover:ring-[#b67643]": color === "orange",
        },
        {
          "bg-[#EAEAEA] hover:ring-1 hover:ring-[#c4c4c4]": color === "white",
        },
        {
          "bg-brand-blue text-white": color === "blue",
        },
        {
          "bg-[#fc3545] hover:ring-1 hover:ring-[#fc3545] hover:bg-[#FF4555] hover:text-white":
            color === "red",
        },
        className
      )}
    >
      {children}
    </button>
  );
}
