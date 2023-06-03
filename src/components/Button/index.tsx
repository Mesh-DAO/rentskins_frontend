import React from "react";
import classNames from "classnames";
import { MouseEventHandler } from "react";
import { Title } from "../Title";

type Props = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  color?: "invisible" | "visible";
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
        `flex items-center justify-center w-[${width} h-[${height}]
        rounded-md border border-dark-olive-green p-1 opacity-60
        transition-colors hover:opacity-100`,
        {
          " fill-white": color === "invisible",
        },
        {
          "h-9 w-28 rounded-lg bg-dark-olive-green px-4 py-3 text-lg text-white":
            color === "visible",
        },
        className
      )}
    >
      {children}
    </button>
  );
}
