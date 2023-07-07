'use client'
import WalletService from '@/services/wallet.service'
import useUserStore from '@/stores/user.store'
import Authentication from '@/tools/authentication.tool'
import LocalStorage from '@/tools/localstorage.tool'
import URLQuery from '@/tools/urlquery.tool'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import Layout from '.'
import Common from '../Common'
import Modal from '../Modal'

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
        return <Modal.Notification.Filter />
    }
  }

  return (
    <main className="min-h-screen bg-mesh-color-others-black">
      <Modal.Payment.Main />

      <Common.Title> Rentskins </Common.Title>
      <meta property="og:title" content="My page title" key="title" />
      {modalRender()}

      <Layout.Header.Root>
        <Layout.Header.Top />
        <Layout.Header.Bottom />
      </Layout.Header.Root>

      {children}

      <Layout.Footer />
    </main>
  )
}
