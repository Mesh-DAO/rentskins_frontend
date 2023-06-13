'use client'
import { useState } from 'react'
import { LayoutPage } from '@/components/Shared'
import { Button } from '@/components/Button'
import { FormInput } from '@/components/Forms/Input'
import { IconLeftArrow } from '@/components/Icons/iconLeftArrow'
import usePaymentStore from '@/stores/payment.store'
import { Title } from '@/components/Title'
import { useRouter } from 'next/navigation'
import CircleLoading from '@/components/CircleLoading'
import { PaymentRechargeTicketForm } from '@/components/Payment/Form/Recharge/index.ticket'

export default function PaymentAddBoletoPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleOnSubmit = (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    router.push('/pagamento/recarregar/sucesso')
  }

  return (
    <LayoutPage>
      <main className="flex h-fit flex-col items-center justify-start bg-mesh-color-others-black pb-64 text-white">
        <CircleLoading
          label="Processando..."
          enabled={isLoading}
          className="flex h-2/3 items-center justify-center"
        >
          <div className="mt-8 flex w-fit flex-col">
            <div className="mb-8 flex w-full items-center justify-start">
              <Button className="border-none" onClick={() => router.push('/')}>
                <IconLeftArrow />
              </Button>
              <span className="ml-2 text-mesh-color-neutral-200">
                <text>Saldo </text>
                <text>• </text>
                <text className="text-mesh-color-accent-900">
                  Pagamento - Boleto Flash
                </text>
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-center">
              <Title size="2xl"> Recarregar saldo com Boleto </Title>
              <form className="mt-4 w-[546px]">
                <PaymentRechargeTicketForm
                  handleFormSubmit={(event) => handleOnSubmit(event)}
                />
              </form>
            </div>
          </div>
        </CircleLoading>
      </main>
    </LayoutPage>
  )
}
