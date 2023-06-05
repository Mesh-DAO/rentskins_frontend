import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import SteamIcon from '../../components/icons/social/icon-steam.svg'

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
      className={`font-Roboto rounded-md no-underline transition-all duration-300 ease-in-out ${width} ${height} flex items-center justify-center gap-4
      bg-alt-steam-button transition-colors hover:bg-steam-button-pattern`}
    >
      <Image src={SteamIcon} alt="Steam Login" width={24} height={24} />
      <span className="text-[22px] font-bold text-mesh-dark-2">
        {' '}
        Entre com a sua Steam{' '}
      </span>
    </button>
  )
}
