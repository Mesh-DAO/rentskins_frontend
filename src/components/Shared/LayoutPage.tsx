'use client'
import Header from './Header'
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

type Props = {
  children: React.ReactNode
}

export function LayoutPage({ children }: Props) {
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

  useQuery({
    queryKey: ['WalletService.createEmptyWallet'],
    queryFn: () =>
      WalletService.createEmptyWallet(user.username, user.steamid as string),
    enabled: !!user.steamid,
  })

  const { data } = useQuery({
    queryKey: ['WalletService.getUserByID'],
    queryFn: () => WalletService.getUserByID(user.steamid as string),
    enabled: !!user.steamid,
  })

  useEffect(() => {
    if (data?.data) {
      setWallet(data)
    }
  }, [data, setWallet])

  const modalRender = () => {
    switch (pathname) {
      case '/usuario/notificacoes':
        return <ModalNotificationFilter />
    }
  }

  return (
    <div className="min-h-screen bg-mesh-color-others-black">
      <ModalPayment />

      <title> Rentskins </title>
      <meta property="og:title" content="My page title" key="title" />

      {modalRender()}
      <Header />
      {children}
      <Footer />
    </div>
  )
}
