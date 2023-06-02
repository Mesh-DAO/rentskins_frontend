import React from "react";
import classNames from "classnames";
import { MouseEventHandler } from "react";

type Props = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  color?: "invisible" | "visible" | "green";
  textColor?: string;
  hoverTextColor?: string;
  width?: string;
  height?: string;
  disable?: boolean;
};

export function Button({
  type = "button",
  className,
  children,
  onClick,
  color,
  width = "w-[32px]",
  height = "w-[32px]",
  disable,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disable}
      className={classNames(
        `flex justify-center items-center w-[${width} h-[${height}]
        p-1 border border-dark-olive-green opacity-60 hover:opacity-100
        rounded-md transition`,
        {
          " fill-white": color === "invisible",
        },
        {
          "bg-dark-olive-green w-28 h-9 rounded-lg text-white text-lg py-3 px-4": color === "visible"
        },
        {
          "bg-dark-lime-green w-48 h-10 rounded-xl text-mesh-dark-2 text-lg py-3 px-4 gap-1": color === "green"
        },
        className
      )}
    >
      {children}
    </button>
  );
}
