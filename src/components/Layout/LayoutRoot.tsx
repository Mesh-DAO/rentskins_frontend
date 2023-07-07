'use client'
import Header from '../Shared/Header'
import { Footer } from '../Footer'
import React, { useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import useUserStore from '@/stores/user.store'
import { ModalPayment } from '../Modal'
import { ModalNotificationFilter } from '../Modal/ModalNotification/index.filter'
import { useQuery } from '@tanstack/react-query'
import WalletService from '@/services/wallet.service'
import Authentication from '@/tools/authentication.tool'
import URLQuery from '@/tools/urlquery.tool'
import LocalStorage from '@/tools/localstorage.tool'
import Layout from '.'

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
      <ModalPayment />

      <title> Rentskins </title>
      <meta property="og:title" content="My page title" key="title" />

      {modalRender()}
      <Header />
      {children}
      <Layout.Footer />
    </main>
  )
}
