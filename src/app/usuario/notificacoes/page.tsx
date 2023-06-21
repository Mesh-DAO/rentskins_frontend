'use client'
import { Button } from '@/components/Button'
import { LayoutPage } from '@/components/Shared'
import { Title } from '@/components/Title'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NotificationPage() {
  const [title, setTitle] = useState('')

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const titleQuery = searchParams.get('notification') as
      | 'historic'
      | 'transactions'

    if (titleQuery !== 'historic') {
      if (titleQuery !== 'transactions') {
        router.push()
      }
    }
  }, [])

  const handleOnRadio = (event) => {
    router.push(pathname + '/?notification=' + event.target.value)
  }

  return (
    <LayoutPage>
      <main className="mx-auto mt-6 flex w-8/12 flex-col">
        <Title size="3xl" bold={700} color="white">
          Notificação
        </Title>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <label>
              <span className="text-xl font-bold text-white/50">
                Transações
              </span>
              <input
                type="radio"
                name="notification-radio"
                defaultChecked={true}
                value={'transactions'}
                onClick={(event) => handleOnRadio(event)}
              />
            </label>
            <label>
              <span className="text-xl font-bold text-white">Histórico</span>
              <input
                type="radio"
                name="notification-radio"
                value={'historic'}
                onClick={(event) => handleOnRadio(event)}
              />
            </label>
          </div>
          <Button>Tudo</Button>
        </div>
      </main>
    </LayoutPage>
  )
}
