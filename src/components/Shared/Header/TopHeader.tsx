'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
/* ----------------- COMPONENTS ----------------- */
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import { ModalPayment } from '@/components/Modal'
/* ----------------- ICONS ----------------- */
import { IconCarrinho, IconSteam, IconSearch } from '@/components/Icons'
import { IconCruz } from '@/components/Icons/IconCruz'
import { IconMira } from '@/components/Icons/IconMira'
import { IconNotifications } from '@/components/Icons/IconNotifications'
import logo from '../../../assets/logo.svg'
import fallen from '@/assets/fallen.svg'

export function TopHeader() {
  const [isUser, setIsUser] = useState(true)

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
      {/* ---------------- RIGHT ----------------------- */}
      {isUser ? (
        <div className="flex space-x-4">
          <Link
            href={'/carrinho'}
            className="flex h-[44px] w-[220px] justify-center rounded-[14px] border border-mesh-color-neutral-200 bg-mesh-color-others-black  p-2 text-mesh-color-neutral-200"
          >
            <span className="mr-2">
              <IconCarrinho />
            </span>
            Carrinho de compra
          </Link>
          <Button
            className="h-[44px] w-[220px] rounded-[14px] border-transparent bg-mesh-color-primary-1400 opacity-100"
            onClick={() => setIsUser(!isUser)}
          >
            <span className="mr-2">
              <IconSteam />
            </span>
            Entre com sua steam
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Link
                href={'/inventory'}
                className="flex items-center gap-2 text-mesh-color-neutral-200"
              >
                <span>
                  <IconMira />
                </span>
                Inventário
              </Link>
            </div>
            <div className="flex h-[44px] items-center gap-2 rounded-lg bg-mesh-color-others-eerie-black px-4 py-2">
              <Title bold={500} color="white">
                R$12,42
              </Title>
              <ModalPayment
                activator={
                  <Button className="h-5 w-5 border-transparent bg-mesh-color-primary-1400">
                    <IconCruz />
                  </Button>
                }
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button className="h-11 w-11 rounded-xl border-none bg-mesh-color-others-eerie-black">
              <IconNotifications />
            </Button>

            <Image
              src={fallen}
              alt=""
              className="rounded-full"
              width={44}
              height={44}
              draggable={false}
            />
          </div>
        </div>
      )}
    </div>
  )
}
