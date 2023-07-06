'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { IconLeftArrow } from '@/components/Icons/iconLeftArrow'
import { Title } from '@/components/Title'
import { useRouter } from 'next/navigation'
import CircleLoading from '@/components/CircleLoading'
import { IconPerson } from '@/components/Icons/IconPerson'
import { IconLocation } from '@/components/Icons/IconLocation'
import { IconBank } from '@/components/Icons/IconBank'
import { IconCard } from '@/components/Icons/IconCard'
import useComponentStore from '@/stores/components.store'
import {
  PaymentWithdrawStepPersonal,
  PaymentWithdrawStepDocument,
  PaymentWithdrawStepLocation,
  PaymentWithdrawStepTransaction,
} from '@/components/Payment/Form/Withdraw/'
import usePaymentStore from '@/stores/payment.store'

export default function PaymentWithdrawPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [stepSubLabel, setStepSubLabel] = useState('')
  const router = useRouter()

  const { paymentWithdrawIndex, setPaymentWithdrawIndex } = useComponentStore()
  const { paymentWithdrawInfo } = usePaymentStore()

  useEffect(() => setPaymentWithdrawIndex(0), [setPaymentWithdrawIndex])

  const handleOnCancel = () => {
    router.push('/')
  }

  useEffect(() => console.log(paymentWithdrawInfo), [paymentWithdrawInfo])

  const handleOnNext = (event: any) => {
    event.preventDefault()

    if (paymentWithdrawIndex !== 3) {
      setPaymentWithdrawIndex((paymentWithdrawIndex + 1) as 0 | 1 | 2 | 3)
    } else {
      setIsLoading(true)
      router.push('/pagamento/saque/sucesso')
    }
  }

  return (
    <main className="flex h-fit flex-col items-center justify-start bg-mesh-color-others-black pb-64 text-white">
      <CircleLoading
        label="Processando..."
        enabled={isLoading}
        className="mb-64 mt-32 flex h-full items-center justify-center"
      >
        <div className="mt-8 flex w-min flex-col">
          <div className="mb-8 flex w-full items-center justify-start">
            <Button
              className="border-transparent"
              onClick={() => handleOnCancel()}
            >
              <IconLeftArrow />
            </Button>

            <span className="ml-2 text-mesh-color-neutral-200">
              <text>Saldo </text>
              <text>• </text>

              <text className="text-mesh-color-accent-900">
                Retirar Levantamento
              </text>
            </span>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-center">
            <Title size="2xl"> Retirar levantamento </Title>
            <div className="mt-4 flex w-[546px] items-center justify-center">
              <div className="flex h-10 w-12 items-center justify-center rounded-full bg-mesh-color-primary-1200 p-2">
                <IconPerson />
              </div>
              <div className="h-0.5 w-full bg-mesh-color-neutral-500">
                <div
                  className={`h-full bg-mesh-color-primary-1200 ${
                    paymentWithdrawIndex >= 1
                      ? 'w-full transition-all duration-500'
                      : 'w-0'
                  }`}
                />
              </div>
              <div
                className={`flex h-10 w-12 items-center justify-center rounded-full ${
                  paymentWithdrawIndex >= 1
                    ? 'bg-mesh-color-primary-1200 transition-all delay-500 duration-500'
                    : 'bg-mesh-color-neutral-500'
                } p-2`}
              >
                <IconLocation
                  className={`${
                    paymentWithdrawIndex >= 1
                      ? 'stroke-mesh-color-others-black transition-all delay-500 duration-500'
                      : 'stroke-mesh-color-neutral-300'
                  }`}
                />
              </div>
              <div className="h-0.5 w-full bg-mesh-color-neutral-500">
                <div
                  className={`h-full bg-mesh-color-primary-1200 ${
                    paymentWithdrawIndex >= 2
                      ? 'w-full transition-all duration-500'
                      : 'w-0'
                  }`}
                />
              </div>
              <div
                className={`flex h-10 w-12 items-center justify-center rounded-full ${
                  paymentWithdrawIndex >= 2
                    ? 'bg-mesh-color-primary-1200 transition-all delay-500 duration-500'
                    : 'bg-mesh-color-neutral-500'
                } p-2`}
              >
                <IconBank
                  className={`${
                    paymentWithdrawIndex >= 2
                      ? 'stroke-mesh-color-others-black transition-all delay-500 duration-500'
                      : 'stroke-mesh-color-neutral-300'
                  }`}
                />
              </div>
              <div className="h-0.5 w-full bg-mesh-color-neutral-500">
                <div
                  className={`h-full bg-mesh-color-primary-1200 ${
                    paymentWithdrawIndex >= 3
                      ? 'w-full transition-all duration-500'
                      : 'w-0'
                  }`}
                />
              </div>
              <div
                className={`flex h-10 w-12 items-center justify-center rounded-full ${
                  paymentWithdrawIndex >= 3
                    ? 'bg-mesh-color-primary-1200 transition-all delay-500 duration-500'
                    : 'bg-mesh-color-neutral-500'
                } p-2`}
              >
                <IconCard
                  className={`${
                    paymentWithdrawIndex >= 3
                      ? 'fill-mesh-color-others-black transition-all delay-500 duration-500'
                      : 'fill-mesh-color-neutral-300'
                  }`}
                />
              </div>
            </div>
            <div className="mt-4 w-full transition-all ease-in-out">
              {/* {paymentWithdrawIndex === 0 && (
                <PaymentWithdrawStepPersonal
                  handleFormSubmit={handleOnNext}
                  handleFormCancel={handleOnCancel}
                />
              )}
              {paymentWithdrawIndex === 1 && (
                <PaymentWithdrawStepLocation
                  handleFormSubmit={handleOnNext}
                  handleFormCancel={handleOnCancel}
                />
              )}
              {paymentWithdrawIndex === 2 && (
                <PaymentWithdrawStepTransaction
                  handleFormSubmit={handleOnNext}
                  handleFormCancel={handleOnCancel}
                />
              )}
              {paymentWithdrawIndex === 3 && <PaymentWithdrawStepDocument />} */}
              <PaymentWithdrawStepTransaction
                handleFormSubmit={handleOnNext}
                handleFormCancel={handleOnCancel}
              />
            </div>
          </div>
        </div>
      </CircleLoading>
    </main>
  )
}
