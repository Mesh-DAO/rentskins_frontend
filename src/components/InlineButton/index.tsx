import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';

type Props = {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  textColor?: string;
  hoverTextColor?: string;
  width?: string;
  disable?: boolean;
};

export function InlineButton({
  type = 'button',
  className,
  children,
  onClick,
  width = 'w-[214px]',
  disable,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disable}
      className={classNames(
        `bg-transparent no-underline ${width} flex h-[38px] items-center justify-center transition-colors`,
        className
      )}
    >
      {children}
    </button>
  );
}
