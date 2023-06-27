'use client'
import Header from './Header'
import { Footer } from '../Footer'
import React, { useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import LocalStorage from '@/tools/localstorage.tool'
import useUserStore from '@/stores/user.store'
import { ModalPayment } from '../Modal'
import JsonWebToken from '@/tools/jsonwebtoken.tool'
import { IUser } from '@/stores/interfaces/user.interface'
import { ModalNotificationFilter } from '../Modal/ModalNotification/index.filter'
import URLQuery from '@/tools/urlquery.tool'

type Props = {
  children: React.ReactNode
}

export function LayoutPage({ children }: Props) {
  const params = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const { setUser, logout, setLogout } = useUserStore()

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

    if (tokenOnURL) {
      router.push(URLQuery.removeQuery(['token']))
    }
  }, [setUser, params, router])

  useEffect(() => {
    if (logout) {
      LocalStorage.remove('token')
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

      <title> Rentskins </title>
      <meta property="og:title" content="My page title" key="title" />

      {modalRender()}
      <Header />
      {children}
      <Footer />
    </div>
  )
}
