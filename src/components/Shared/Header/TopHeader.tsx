'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
/* ----------------- COMPONENTS ----------------- */
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
/* ----------------- ICONS ----------------- */
import { IconCarrinho, IconSteam, IconSearch } from '@/components/Icons'
import { IconCruz } from '@/components/Icons/IconCruz'
import { IconMira } from '@/components/Icons/IconMira'
import { IconNotifications } from '@/components/Icons/IconNotifications'
import logo from '../../../assets/logo.svg'
import fallen from '@/assets/fallen.svg'

export function TopHeader() {
  const [isUser, setIsUser] = useState(false)

  return (
    <div className="mx-auto flex w-10/12 items-center justify-between">
      <div className="flex items-center gap-x-6 p-[18px]">
        <Link href="/">
          <Image src={logo} alt="" width={45} height={48} draggable={false} />
        </Link>

        <div className="flex items-center rounded-[12px] bg-mesh-color-neutral-800">
          <span className="ml-4">
            <IconSearch />
          </span>
          <Input
            className="bg-mesh-color-neutral-800 text-base text-mesh-color-neutral-200"
            placeHolder="Pesquise o item..."
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <Button className="bg-jet-black h-[44px] w-[220px] rounded-[14px] border border-[#A7B0A0]  p-2 text-[#A7B0A0]">
          <span className="mr-2">
            <IconCarrinho />
          </span>
          Carrinho de compra
        </Button>
        <Button className="h-[44px] w-[220px] rounded-[14px] bg-[#95BC1E] opacity-100">
          <span className="mr-2">
            <IconSteam />
          </span>
          Entre com sua steam
        </Button>
      </div>
    </div>
  )
}
