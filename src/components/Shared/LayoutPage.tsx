'use client'
import Header from './Header'
import { Footer } from '../Footer'
import React, { useEffect } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import LocalStorage from '@/tools/localstorage.tool'
import useUserStore from '@/stores/user.store'
import { ModalPayment } from '../Modal'
import JsonWebToken from '@/tools/jsonwebtoken.tool'
import { IUser } from '@/stores/interfaces/user.interface'
import { ModalNotificationFilter } from '../Modal/ModalNotification/index.filter'
import { useQuery } from '@tanstack/react-query'
import WalletService from '@/services/wallet.service'

type Props = {
  children: React.ReactNode
}

export function LayoutPage({ children }: Props) {
  const params = useSearchParams()
  const pathname = usePathname()
  const { setUser, user } = useUserStore()

  useEffect(() => {
    const tokenOnURL = params.get('token')

    const createUserInStore = (verification: IUser) => {
      setUser({
        username: verification.username,
        picture: verification.picture,
        steamid: verification.steamid,
      })
    }

    if (tokenOnURL) {
      const verification = JsonWebToken.verify(tokenOnURL) as IUser

      if (
        verification !== null &&
        verification !== undefined &&
        verification.steamid
      ) {
        LocalStorage.create('token', tokenOnURL)
        createUserInStore(verification)
        console.log('User first login')
      }
    } else {
      const storage = LocalStorage.get('token')

      if (storage !== null && storage !== undefined) {
        const verification = JsonWebToken.verify(storage) as IUser

        if (
          verification !== null &&
          verification !== undefined &&
          verification.steamid
        ) {
          createUserInStore(verification)
          console.log('User returning login')
        } else {
          console.log('User not logged in.')
        }
      } else {
        console.log('User not logged in')
      }
    }
  }, [setUser, params])

  useQuery({
    queryKey: ['createEmptyWallet'],
    queryFn: async () =>
      WalletService.createEmptyWallet(user.username, user.steamid as string),
    enabled: !!user.steamid,
  })

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
