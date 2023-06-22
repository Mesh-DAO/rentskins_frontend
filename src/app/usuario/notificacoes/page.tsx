'use client'
import Aos from 'aos'
import { useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/Button'
import NotificationsHistoric from '@/components/Notifications/index.historic'
import NotificationsTransactions from '@/components/Notifications/index.transactions'
import { LayoutPage } from '@/components/Shared'
import { Title } from '@/components/Title'
import { historicMock } from '@/Mock/notification.historic.mock'
import { transactionsMock } from '@/Mock/notification.transaction.mock'

export default function NotificationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 0,
    })

    const titleQuery = searchParams.get('type') as 'historic' | 'transactions'

    if (titleQuery !== 'historic') {
      if (titleQuery !== 'transactions') {
        router.push(pathname + '/?type=historic')
      }
    }
  }, [])

  // MUDAR TIPAGEM
  const handleOnRadio = ({ target }: any) => {
    router.push(pathname + '/?type=' + target.value)
  }

  return (
    <LayoutPage>
      <main className="mx-auto mt-6 flex w-8/12 flex-col">
        <Title size="3xl" bold={700} color="white">
          Notificação
        </Title>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <label className="flex cursor-pointer flex-col">
              <input
                type="radio"
                name="notification-radio"
                className="peer appearance-none"
                defaultChecked={searchParams.get('type') === 'transactions'}
                value={'transactions'}
                onClick={(event) => handleOnRadio(event)}
              />
              <span className="text-xl font-semibold text-white/50 transition-all peer-checked:text-white">
                Transações
              </span>
              <div className="mt-2 h-0.5 w-0 place-self-center bg-mesh-color-primary-900 pl-0 transition-all peer-checked:pl-20" />
            </label>
            <label className="flex cursor-pointer flex-col">
              <input
                type="radio"
                name="notification-radio"
                className="peer appearance-none"
                defaultChecked={searchParams.get('type') === 'historic'}
                value={'historic'}
                onClick={(event) => handleOnRadio(event)}
              />
              <span className="text-xl font-semibold text-white/50 transition-all peer-checked:text-white">
                Histórico
              </span>
              <div className="mt-2 h-0.5 w-0 place-self-center bg-mesh-color-primary-900 pl-0 transition-all peer-checked:pl-16" />
            </label>
          </div>
          <Button className="border-none bg-mesh-color-primary-1200 px-3 py-1 font-semibold">
            Tudo
          </Button>
        </div>
        {searchParams.get('type') === 'historic' && (
          <NotificationsHistoric data={historicMock} />
        )}
        {searchParams.get('type') === 'transactions' && (
          <NotificationsTransactions data={transactionsMock.pending} />
        )}
      </main>
    </LayoutPage>
  )
}
