import React, { MouseEventHandler } from 'react'
import { IconSteam } from '../Icons'

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  width?: string
  height?: string
  disable?: boolean
}

export function SteamButton({
  onClick,
  height = 'h-[60px]',
  width = 'w-[330px]',
}: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`font-Roboto rounded-md no-underline transition-all duration-300 ease-in-out ${width} ${height} hover:bg-steam-button-pattern flex items-center
      justify-center gap-4 transition-colors`}
    >
      <IconSteam />
      <span className="text-mesh-dark-2 text-[22px] font-bold">
        {' '}
        Entre com a sua Steam{' '}
      </span>
    </button>
  )
}
