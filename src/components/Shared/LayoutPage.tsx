'use client'
import Header from './Header'
import { Footer } from '../Footer'
import React, { useEffect } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import LocalStorage from '@/tools/localstorage.tool'
import useUserStore from '@/stores/user.store'
import { ModalPayment } from '../Modal'
import {
  ModalNotification,
  ModalNotificationFilter,
} from '../Modal/ModalNotification/index.filter'

type Props = {
  children: React.ReactNode
}

export function LayoutPage({ children }: Props) {
  const params = useSearchParams()
  const pathname = usePathname()
  const { setUser } = useUserStore()

  useEffect(() => {
    const steamid = params.get('steamid')
    const picture = params.get('picture')
    const username = params.get('username')
    const user = LocalStorage.getUser()

    if (user !== undefined) {
      setUser({
        username: user.username,
        picture: user.picture,
        steamid: user.steamid,
      })
    } else {
      if (steamid && picture && username) {
        LocalStorage.setUser({ steamid, picture, username })

        setUser({
          username,
          picture,
          steamid,
        })
      }
    }
  }, [setUser, params])

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
