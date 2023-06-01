import classNames from "classnames";
import React from "react";

type Props = {
  className?: string;
  type?: string;

  placeHolder?: string;
  name?: string;
};

export function Input({ className, placeHolder= '', type = 'text', name, ...props }: Props) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      {...props}
      className={classNames(
        "no-underline outline-none rounded-[12px] py-2 px-4 h-[42px]",
        className
      )}
    />
  );
}
