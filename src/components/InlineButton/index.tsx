import React from "react";
import classNames from "classnames";
import { MouseEventHandler } from "react";
import { Title } from "../Title";

type Props = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  textColor?: string;
  hoverTextColor?: string;
  width?: string;
  disable?: boolean;
};

export function InlineButton({
  type = "button",
  className,
  children,
  onClick,
  width = "w-[214px]",
  disable,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disable}
      className={classNames(
        `no-underline bg-transparent ${width} justify-center h-[38px] flex items-center transition-colors`,
        className
      )}
    >
      {children}
    </button>
  );
}
