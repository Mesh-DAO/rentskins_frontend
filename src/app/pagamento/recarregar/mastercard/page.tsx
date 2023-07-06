'use client'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { IconLeftArrow } from '@/components/Icons/iconLeftArrow'
import { Title } from '@/components/Title'
import { useRouter } from 'next/navigation'
import CircleLoading from '@/components/CircleLoading'
import { PaymentRechargeMastercardForm } from '@/components/Payment/Form/Recharge/index.mastercard'

export default function PaymentAddMastercardPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleOnSubmit = (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    router.push('/pagamento/recarregar/sucesso')
  }

  const handleOnCancel = (event: any) => {
    router.push('/')
  }

  return (
    <main className="flex h-screen flex-col items-center justify-start bg-mesh-color-others-black text-white">
      <CircleLoading
        label="Processando..."
        enabled={isLoading}
        className="flex h-2/3 items-center justify-center"
      >
        <div className="mt-8 flex w-fit flex-col">
          <div className="mb-8 flex w-full items-center justify-start">
            <Button
              className="border-transparent"
              onClick={() => router.push('/')}
            >
              <IconLeftArrow />
            </Button>

            <span className="ml-2 text-mesh-color-neutral-200">
              <text>Saldo </text>
              <text>• </text>

              <text className="text-mesh-color-accent-900">
                Pagamento - Mastercard
              </text>
            </span>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-center">
            <Title size="2xl"> Recarregar saldo com Cartão </Title>
            <PaymentRechargeMastercardForm
              handleFormSubmit={(event) => handleOnSubmit(event)}
              handleFormCancel={(event) => handleOnCancel(event)}
            />
          </div>
        </div>
      </CircleLoading>
    </main>
  )
}
