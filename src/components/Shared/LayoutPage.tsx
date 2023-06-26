'use client'
import Header from './Header'
import { Footer } from '../Footer'
import React, { useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import LocalStorage from '@/tools/localstorage.tool'
import useUserStore from '@/stores/user.store'
import { ModalPayment } from '../Modal'
import { ModalNotificationFilter } from '../Modal/ModalNotification/index.filter'
import URLQuery from '@/tools/urlquery.tool'

type Props = {
  children: React.ReactNode
}

export function LayoutPage({ children }: Props) {
  const router = useRouter()
  const params = useSearchParams()
  const pathname = usePathname()

  const { setUser, logout, setLogout } = useUserStore()

  useEffect(() => {
    const steamid = params.get('steamid')
    const picture = params.get('picture')
    const username = params.get('username')
    const user = LocalStorage.getUser()

    if (user !== undefined && user !== null) {
      if (user.username && user.picture && user.steamid) {
        setUser({
          username: user.username,
          picture: user.picture,
          steamid: user.steamid,
        })
      }
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

    router.push(URLQuery.removeQuery(['username', 'steamid', 'picture']))
  }, [setUser, params])

  useEffect(() => {
    if (logout) {
      LocalStorage.removeItem('user')
      location.reload()
      setLogout(false)
    }
  }, [logout, setLogout])

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
