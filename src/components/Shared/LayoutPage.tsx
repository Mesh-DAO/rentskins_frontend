'use client'
import Header from './Header'
import { Footer } from '../Footer'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import LocalStorage from '@/tools/localstorage.tool'
import useUserStore from '@/stores/user.store'

type Props = {
  children: React.ReactNode
}

export function LayoutPage({ children }: Props) {
  const params = useSearchParams()
  const { setUserLogged, userLogged, setUser } = useUserStore()

  useEffect(() => {
    const steamid = params.get('steamid')
    const picture = params.get('picture')
    const username = params.get('username')
    const user = LocalStorage.getUser()

    if (user === undefined || user === null) {
      if (steamid && picture && username) {
        LocalStorage.setUser({
          steamid,
          picture,
          username,
        })

        setUser({ username, picture, steamid })
        setUserLogged(true)
      }
      setUserLogged(false)
    } else {
      setUserLogged(true)
    }
  }, [userLogged, setUserLogged, params])

  return (
    <div className="min-h-screen bg-mesh-color-others-black">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
