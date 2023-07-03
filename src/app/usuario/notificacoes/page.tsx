'use client'
import Aos from 'aos'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/Button'
import NotificationsHistoric from '@/components/NotificationIndex/index.historic'
import NotificationsTransactions from '@/components/NotificationIndex/index.transactions'
import { Title } from '@/components/Title'
import { historicMock } from '@/Mock/notification.historic.mock'
import { transactionsMock } from '@/Mock/notification.transaction.mock'
import URLQuery from '@/tools/urlquery.tool'
import useFilterStore from '@/stores/filters.store'

export default function NotificationPage() {
  const { notificationFilter } = useFilterStore()
  const [isLoading] = useState(false)

  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 0,
    })

    const titleQuery = searchParams.get('type') as 'historic' | 'transactions'

    if (titleQuery !== 'historic') {
      if (titleQuery !== 'transactions') {
        router.push(URLQuery.addQuery([{ key: 'type', value: 'historic' }]))
      }
    }
  }, [searchParams, router])

  const handleOnRadio = ({ target }: any) => {
    router.push(URLQuery.addQuery([{ key: 'type', value: target.value }]))
  }

  const handleOnFilter = () => {
    router.push(
      URLQuery.addQuery([
        { key: 'modalopen', value: true },
        { key: 'modaltype', value: 'filter' },
      ]),
    )
  }

  return (
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
              className="peer"
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
        <Button
          className="border-none bg-mesh-color-primary-1200 px-3 py-1 font-semibold"
          onClick={() => handleOnFilter()}
        >
          {notificationFilter}
        </Button>
      </div>
      {searchParams.get('type') === 'historic' && (
        <NotificationsHistoric data={historicMock} loading={isLoading} />
      )}
      {searchParams.get('type') === 'transactions' && (
        <NotificationsTransactions
          data={transactionsMock.pending}
          loading={isLoading}
        />
      )}
    </main>
  )
}
