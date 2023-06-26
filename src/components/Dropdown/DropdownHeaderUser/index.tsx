'use client'
import useUserStore from '@/stores/user.store'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import React from 'react'

interface IProps {
  activator: React.ReactNode
}

export default function DropdownHeaderUser({ activator }: IProps) {
  const { setLogout } = useUserStore()

  const handleOnLogOut = () => {
    setLogout(true)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{activator}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="fixed -right-10 top-4 z-20 flex h-64 w-[184px]
            flex-col items-center overflow-hidden rounded-lg bg-mesh-color-neutral-800 px-2 py-2"
        >
          <DropdownMenu.Item
            className=" w-full cursor-pointer rounded-md bg-transparent px-4 py-2
          font-semibold text-mesh-color-neutral-400 transition-all hover:bg-neutral-500 hover:text-white"
          >
            Configurações
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className=" w-full cursor-pointer rounded-md bg-transparent px-4 py-2
          font-semibold text-mesh-color-neutral-400 transition-all hover:bg-neutral-500 hover:text-white"
            onClick={handleOnLogOut}
          >
            Deslogar
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
