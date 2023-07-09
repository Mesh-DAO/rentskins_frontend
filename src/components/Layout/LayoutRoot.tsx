'use client'
import WalletService from '@/services/wallet.service'
import useUserStore from '@/stores/user.store'
import Authentication from '@/tools/authentication.tool'
import LocalStorage from '@/tools/localstorage.tool'
import URLQuery from '@/tools/urlquery.tool'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { ModalNotificationFilter } from '../Modal/ModalNotification/ModalNotificationFilter'
import { ModalPaymentMain } from '../Modal/ModalPayment/ModalPaymentMain'
import { LayoutHeaderBottom } from './Header/LayoutHeaderBottom'
import { LayoutHeaderRoot } from './Header/LayoutHeaderRoot'
import { LayoutHeaderTop } from './Header/LayoutHeaderTop'
import { LayoutFooter } from './LayoutFooter'

type Props = {
  children: React.ReactNode
}

export function LayoutRoot({ children }: Props) {
  const params = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const { setUser, user, setWallet, logout, setLogout } = useUserStore()

  useEffect(() => {
    Authentication.login(params, setUser, router, URLQuery)
  }, [setUser, params, router])

  useEffect(() => {
    if (logout) {
      LocalStorage.remove('token')
      location.reload()
      setLogout(false)
    }
  }, [logout, setLogout])

  const { data: walletData, isSuccess: walletSuccess } = useQuery({
    queryKey: ['WalletService.getUserByID'],
    queryFn: () => WalletService.getUserByID(user.steamid as string),
    enabled: !!user.steamid,
  })

  const { data: walletDataCreated } = useQuery({
    queryKey: ['WalletService.createEmptyWallet'],
    queryFn: () =>
      WalletService.createEmptyWallet(user.username, user.steamid as string),
    enabled: !!user.steamid && walletData?.response?.status === 404,
  })

  useEffect(() => {
    if (walletData?.data) {
      setWallet(walletData)
    } else {
      if (walletDataCreated?.data) {
        setWallet(walletDataCreated)
      }
    }
  }, [walletData, setWallet, walletDataCreated, walletSuccess])

  const modalRender = () => {
    switch (pathname) {
      case '/usuario/notificacoes':
        return <ModalNotificationFilter />
    }
  }

  return (
    <main className="min-h-screen bg-mesh-color-others-black">
      <ModalPaymentMain />

      <meta property="og:title" content="My page title" key="title" />
      {modalRender()}

      <LayoutHeaderRoot>
        <LayoutHeaderTop />
        <LayoutHeaderBottom />
      </LayoutHeaderRoot>

      {children}

      <LayoutFooter />
    </main>
  )
}
