import React from 'react'
import classNames from 'classnames'

type Props = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'xs' | 'lg' | 'xl' | '2xl' | '3xl' | 'base'
  color?: 'white' | 'green' | 'cinza' | 'red' | 'black' | 'dark/6'
  className?: string
  bold?: null | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  bg?: 'light-red'
  onClick?: () => void
}

export function Title({
  children,
  onClick,
  size = 'md',
  color = 'black',
  className,
  bold = null,
  bg,
}: Props) {
  return (
    <h1
      onClick={onClick}
      className={classNames(
        `${className} flex items-center gap-2 font-inter transition-all duration-300 ease-in-out`,
        {
          'text-white': color === 'white',
        },
        {
          'text-[#D0D7CB]': color === 'dark/6',
        },
        {
          'text-alt-steam-button': color === 'green',
        },
        {
          'text-mesh-light-2': color === 'cinza',
        },
        {
          'text-red-600': color === 'red',
        },
        {
          'bg-[#c818181a]': bg === 'light-red',
        },
        {
          'text-xs': size === 'xs',
        },
        {
          'text-sm': size === 'sm',
        },
        {
          'text-md': size === 'md',
        },
        {
          'text-base': size === 'base',
        },
        {
          'text-lg': size === 'lg',
        },
        {
          'text-xl': size === 'xl',
        },
        {
          'text-2xl': size === '2xl',
        },
        {
          'text-3xl': size === '3xl',
        },
        {
          'font-thin': bold === 100,
        },
        {
          'font-normal': bold === 400,
        },
        {
          'font-semibold': bold === 600,
        },
        {
          'font-bold': bold === 700,
        },
        {
          'font-extrabold': bold === 800,
        },
        {
          'font-black': bold === 900,
        },
        className,
      )}
    >
      {children}
    </h1>
  )
}
