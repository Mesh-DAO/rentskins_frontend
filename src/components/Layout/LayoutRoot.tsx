'use client'
// import Header from './Header'
// import { Footer } from '../Footer'
import useUserStore from '@/stores/user.store'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
// import { ModalPayment } from '../Modal'
// import { ModalNotificationFilter } from '../Modal/ModalNotification/index.filter'
// import { useQuery } from '@tanstack/react-query'
// import WalletService from '@/services/wallet.service'
import Authentication from '@/tools/authentication.tool'
import LocalStorage from '@/tools/localstorage.tool'
import URLQuery from '@/tools/urlquery.tool'
// import { useQuery } from '@tanstack/react-query'
import { ModalNotificationFilter } from '../Modal/ModalNotification/ModalNotificationFilter'
import { ModalPaymentMain } from '../Modal/ModalPayment/ModalPaymentMain'
import { LayoutHeaderBottom } from './Header/LayoutHeaderBottom'
import { LayoutHeaderRoot } from './Header/LayoutHeaderRoot'
import { LayoutHeaderTop } from './Header/LayoutHeaderTop'
import { LayoutFooter } from './LayoutFooter'

type IProps = {
  children: React.ReactNode
}

// export const getStaticProps = async () => {
//   const { steamid } = JsonWebToken.verify(LocalStorage.get('token')) as IUser
//   console.log('ok')

//   if (steamid) {
//     const data = await WalletService.getUserBySteamID(steamid)

//     return {
//       props: {
//         wallet: data,
//       },
//     }
//   }
// }

export function LayoutRoot({ children }: IProps) {
  const params = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const { logout, setLogout } = useUserStore()

  useEffect(() => {
    Authentication.login(params, router, URLQuery)
  }, [params, router])

  useEffect(() => {
    if (logout) {
      LocalStorage.remove('token')
      location.reload()
      setLogout(false)
    }
  }, [logout, setLogout])

  // const { data: walletData } = useQuery({
  //   queryKey: ['WalletService.getUserByID'],
  //   queryFn: () => WalletService.getUserByID(user.steamid as string),
  //   enabled: !!user.steamid,
  // })

  // const { data } = useQuery({
  //   queryKey: ['WalletService.createEmptyWallet'],
  //   queryFn: () =>
  //     WalletService.createEmptyWallet(user.username, user.steamid as string),
  //   enabled: !!user.steamid && walletData?.response?.status === 404,
  // })

  // useEffect(() => {
  //   const steamid = params.get('steamid')
  //   const picture = params.get('picture')
  //   const username = params.get('username')
  //   const user = LocalStorage.getUser()

  //   if (user!) {
  //     setUser({
  //       username: user.username,
  //       picture: user.picture,
  //       steamid: user.steamid,
  //     })
  //   }
  //   if (walletData?.data) {
  //     setWallet(walletData)
  //   } else {
  //     if (walletDataCreated?.data) {
  //       setWallet(walletDataCreated)
  //     }
  //   }
  // }, [walletData, setWallet, walletDataCreated, walletSuccess])

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
