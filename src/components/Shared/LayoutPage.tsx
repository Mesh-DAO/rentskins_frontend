'use client'
import Header from './Header'
import { Footer } from '../Footer'
import React, { useEffect } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import useUserStore from '@/stores/user.store'
import { ModalPayment } from '../Modal'
import { ModalNotificationFilter } from '../Modal/ModalNotification/index.filter'
import { useQuery } from '@tanstack/react-query'
import WalletService from '@/services/wallet.service'
import Authentication from '@/tools/authentication.tool'

type Props = {
  children: React.ReactNode
}

export function LayoutPage({ children }: Props) {
  const params = useSearchParams()
  const pathname = usePathname()
  const { setUser, user, setWallet } = useUserStore()

  useEffect(() => {
    Authentication.login(params, setUser)
  }, [setUser, params])

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
      {modalRender()}
      <Header />
      {children}
      <Footer />
    </div>
  )
}
