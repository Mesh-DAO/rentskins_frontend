'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { IconLeftArrow } from '@/components/Icons/iconLeftArrow'
import { Title } from '@/components/Title'
import { useParams, useRouter } from 'next/navigation'
import CircleLoading from '@/components/CircleLoading'
import { PaymentRechargeMastercardForm } from '@/components/Payment/Form/Recharge/index.mastercard'
import { PaymentRechargePixForm } from '@/components/Payment/Form/Recharge/index.pix'
import { PaymentRechargeTicketForm } from '@/components/Payment/Form/Recharge/index.ticket'

export default function PaymentAddMastercardPage() {
  const { method } = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [methodComponent, setMethodComponent] = useState<
    undefined | React.ReactNode
  >(undefined)

  useEffect(() => {
    const handleOnSubmit = (event: any) => {
      event.preventDefault()
      setIsLoading(true)
      router.push('/pagamento/recarregar/sucesso')
    }

    const handleOnCancel = () => {
      router.push('/')
    }

    const methodComponents = {
      mastercard: (
        <PaymentRechargeMastercardForm
          handleFormCancel={handleOnCancel}
          handleFormSubmit={handleOnSubmit}
        />
      ),
      pix: (
        <PaymentRechargePixForm
          handleFormSubmit={handleOnSubmit}
          handleFormCancel={handleOnCancel}
        />
      ),
      boleto: (
        <PaymentRechargeTicketForm
          handleFormSubmit={handleOnSubmit}
          handleFormCancel={handleOnCancel}
        />
      ),
    }

    setMethodComponent(
      methodComponents[method as 'mastercard' | 'pix' | 'boleto'],
    )
  }, [method, router])

  const renderContent = (
    <>
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
                Pagamento - {method.charAt(0).toUpperCase() + method.slice(1)}
              </text>
            </span>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-center">
            <Title size="2xl"> Recarregar saldo com Cartão </Title>
            {methodComponent}
          </div>
        </div>
      </CircleLoading>
    </>
  )

  const renderFailed = <div>Error...</div>

  return (
    <main className="flex h-screen flex-col items-center justify-start bg-mesh-color-others-black text-white">
      {methodComponent !== undefined ? renderContent : renderFailed}
    </main>
  )
}
