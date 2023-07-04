'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import SteamService from '@/services/steam.service'
import URLQuery from '@/tools/urlquery.tool'
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
import useUserStore from '@/stores/user.store'
import BlankUser from '@/../public/blank-profile.png'

export function TopHeader() {
  const router = useRouter()
  const { user, wallet, setLogout } = useUserStore()
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [searchItem, setSearchItem] = useState('')
  const refDropdown = useRef(null)

  const handleOnSteam = () => {
    SteamService.redirect()
  }

  const handleOnProfileClick = () => {
    setShowProfileDropdown((state) => !state)
  }

  const handleOnAdd = () => {
    router.push(
      URLQuery.addQuery([
        { key: 'modalopen', value: true },
        { key: 'modaltype', value: 'payment' },
      ]),
    )
  }

  const handleDropdownButton = (type: 'config' | 'profile' | 'logout') => {
    switch (type) {
      case 'config':
        return router.push('usuario/configuracoes')
      case 'profile':
        return console.log('ok')
      case 'logout':
        return setLogout(true)
    }
  }

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (refDropdown.current) {
        const reference = refDropdown.current as any
        if (!reference.contains(event.target)) {
          setShowProfileDropdown(false)
        }
      }
    }

    document.addEventListener('click', handleOutsideClick, true)
  }, [])

  return (
    <div className="mx-auto flex w-10/12 items-center justify-between">
      <div className="flex items-center gap-x-6 p-[18px]">
        <Link href="/">
          <Image src={logo} alt="" width={45} height={48} draggable={false} />
        </Link>

        <div className="flex items-center rounded-[12px] bg-mesh-color-neutral-800">
          <button
            disabled={searchItem.length <= 0}
            className={`stroke-mesh-color-neutral-200 pl-3 transition-all ${
              searchItem.length > 0 ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <IconSearch
              classname="transition-all"
              width={searchItem.length > 0 ? 25 : 20}
              height={searchItem.length > 0 ? 25 : 20}
            />
          </button>
          <Input
            className="bg-mesh-color-neutral-800 pl-3 text-base text-mesh-color-neutral-200"
            placeHolder="Pesquise o item..."
            onChange={(event: any) => setSearchItem(event.target.value)}
            value={searchItem}
          />
        </div>
      </div>
      {/* ---------------- RIGHT ----------------------- */}
      {!user.steamid ? (
        <div className="flex space-x-4">
          <Link
            href={'/carrinho'}
            className="flex items-center gap-2 rounded-md border border-mesh-color-neutral-200 px-4 text-mesh-color-neutral-200 opacity-70 transition-all hover:opacity-100"
          >
            <IconCarrinho width={20} height={20} />

            <span>Carrinho de Compras</span>
          </Link>
          <Button
            className="flex h-[44px] w-[220px] gap-2 rounded-[14px] border-transparent bg-mesh-color-primary-1400 opacity-100"
            onClick={() => handleOnSteam()}
          >
            <IconSteam />
            <span className="font-semibold">Entre com sua Steam</span>
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-4">
              <Link
                href={'/carrinho'}
                className="flex items-center gap-2 text-mesh-color-neutral-200 opacity-70 transition-all hover:opacity-100"
              >
                <IconCarrinho />
                Carrinho
              </Link>
              <Link
                href={'/inventory'}
                className="flex items-center gap-2 text-mesh-color-neutral-200 opacity-70 transition-all hover:opacity-100"
              >
                <span>
                  <IconMira />
                </span>
                Inventário
              </Link>
            </nav>
            <div className="flex h-[44px] items-center gap-2 rounded-lg bg-mesh-color-others-eerie-black px-4 py-2">
              <Title bold={500} color="white">
                {wallet.data?.value || 'R$ 0,00'}
              </Title>
              <Button
                className="h-5 w-5 border-transparent bg-mesh-color-primary-1400"
                onClick={() => handleOnAdd()}
              >
                <IconCruz />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="h-11 w-11 rounded-xl border-none bg-mesh-color-others-eerie-black"
              onClick={() => router.push('/usuario/notificacoes?type=historic')}
            >
              <div className="absolute top-8 ml-4 h-2 w-2 rounded-full bg-mesh-color-primary-1200" />
              <div className="absolute top-8 ml-4 h-2 w-2 animate-ping rounded-full bg-mesh-color-primary-1200" />
              <IconNotifications />
            </Button>

            <div className="flex items-end justify-center">
              <div
                className={`${
                  !user.picture &&
                  'flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-[#e4e6e7]'
                }`}
              >
                <Image
                  src={user.picture || BlankUser}
                  alt={user.username}
                  className="cursor-pointer rounded-full"
                  width={user.picture ? 44 : 32}
                  height={user.picture ? 44 : 32}
                  draggable={false}
                  onClick={handleOnProfileClick}
                />
              </div>
              {showProfileDropdown && (
                <div
                  className="absolute top-20 z-30 flex h-36 w-48 select-none flex-col items-start justify-center gap-2 overflow-hidden
                  rounded-lg bg-mesh-color-others-eerie-black px-3 py-2"
                  ref={refDropdown}
                >
                  <Button
                    className="border-none font-semibold text-mesh-color-neutral-200"
                    onClick={() => handleDropdownButton('config')}
                  >
                    Configurações
                  </Button>
                  <Button
                    className="border-none font-semibold text-mesh-color-neutral-200"
                    onClick={() => handleDropdownButton('profile')}
                  >
                    Perfil
                  </Button>
                  <Button
                    className="border-none font-semibold text-mesh-color-neutral-200"
                    onClick={() => handleDropdownButton('logout')}
                  >
                    Sair
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
