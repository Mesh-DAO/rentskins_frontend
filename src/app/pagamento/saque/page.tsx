'use client'
import { useState, useEffect } from 'react'
import { LayoutPage } from '@/components/Shared'
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
  const [stepLabel, setStepLabel] = useState('Primeira etapa')
  const [stepSubLabel, setStepSubLabel] = useState('')
  const [stepSubtitle, setStepSubtitle] = useState('Informações Pessoais')
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

    switch (paymentWithdrawIndex) {
      case 0:
        setPaymentWithdrawIndex(1)
        setStepLabel('Segunda Etapa')
        setStepSubtitle('Informações da Localização')
        setStepSubLabel('')
        break
      case 1:
        setPaymentWithdrawIndex(2)
        setStepLabel('Terceira Etapa')
        setStepSubtitle('Informações Bancárias')
        setStepSubLabel(
          'Para receber seus ganhos da plataforma, por favor, preencha as informações bancárias abaixo. A conta bancária deve estar registrada em seu CPF.',
        )
        break
      case 2:
        setPaymentWithdrawIndex(3)
        setStepLabel('Quarta Etapa')
        setStepSubtitle('Documentos')
        setStepSubLabel(
          'Por favor, envie a foto frente e verso da sua identidade, CNH ou PDF para que possamos verificar suas informações pessoais. Essa etapa é importante para garantir a segurança da plataforma e dos usuários.',
        )
        break
      case 3:
        setIsLoading(true)
        router.push('/pagamento/saque/sucesso')
    }
  }

  return (
    <LayoutPage>
      {/* CHANGE COLOR */}
      <main className="flex h-fit flex-col items-center justify-start bg-mesh-color-others-black pb-64 text-white">
        <CircleLoading
          label="Processando..."
          enabled={isLoading}
          className="mb-64 mt-32 flex h-full items-center justify-center"
        >
          <div className="mt-8 flex w-min flex-col">
            <div className="mb-8 flex w-full items-center justify-start">
              <Button className="border-none" onClick={() => handleOnCancel()}>
                <IconLeftArrow />
              </Button>
              {/* CHANGE COLOR */}
              <span className="ml-2 text-mesh-color-neutral-200">
                <text>Saldo </text>
                <text>• </text>
                {/* CHANGE COLOR */}
                <text className="text-mesh-color-accent-900">
                  Retirar Levantamento
                </text>
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-center">
              <Title size="2xl"> Retirar levantamento </Title>
              <div className="mt-4 flex w-[546px] items-center justify-center">
                {/* CHANGE COLOR */}
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
              <div className="mt-4 w-full max-w-xl">
                {/* CHANGE COLOR */}
                <div className="text-sm text-mesh-color-neutral-200">
                  {stepLabel}
                </div>
                <Title size={'lg'} bold={600}>
                  {stepSubtitle}
                </Title>
                {/* CHANGE COLOR */}
                <div className="w-11/12 leading-tight">
                  <text className="h-2  text-sm leading-none tracking-tighter text-mesh-color-neutral-0">
                    {stepSubLabel}
                  </text>
                </div>
              </div>
              <form
                onSubmit={(event) => handleOnNext(event)}
                className="mt-4 w-full transition-all ease-in-out"
              >
                {paymentWithdrawIndex === 0 && <PaymentWithdrawStepPersonal />}
                {paymentWithdrawIndex === 1 && <PaymentWithdrawStepLocation />}
                {paymentWithdrawIndex === 2 && (
                  <PaymentWithdrawStepTransaction />
                )}
                {paymentWithdrawIndex === 3 && <PaymentWithdrawStepDocument />}

                <br />

                <div className="flex justify-between text-xl font-semibold">
                  <text>Levantamento:</text>
                  {/* CHANGE COLOR */}
                  <span className="text-mesh-color-primary-800">R$0,00</span>
                </div>

                {/* CHANGE COLOR */}
                <div className="flex flex-col gap-4 text-xl font-semibold">
                  <Button type="submit" color="green" className="h-12 w-full">
                    Continuar
                  </Button>
                  {/* COLOR NOT WORKING */}
                  <Button
                    className="h-12 w-full border-neutral-600"
                    color="invisible"
                    onClick={() => handleOnCancel()}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </CircleLoading>
      </main>
    </LayoutPage>
  )
}
