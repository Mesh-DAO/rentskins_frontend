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
import { PaymentWithdrawStepLocation } from '@/components/Payment/Withdraw/index.location'
import { PaymentWithdrawStepPersonal } from '@/components/Payment/Withdraw/index.personal'

export default function PaymentWithdrawPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [stepLabel, setStepLabel] = useState('Primeira etapa')
  const [stepSubtitle, setStepSubtitle] = useState('Informações Pessoais')
  const router = useRouter()

  const { paymentWithdrawIndex, setPaymentWithdrawIndex } = useComponentStore()

  useEffect(() => setPaymentWithdrawIndex(0), [setPaymentWithdrawIndex])

  const handleOnCancel = () => {
    router.push('/')
  }

  const handleOnNext = (event: any) => {
    event.preventDefault()

    switch (paymentWithdrawIndex) {
      case 0:
        setPaymentWithdrawIndex(1)
        setStepLabel('Segunda Etapa')
        setStepSubtitle('Informações da Localização')
        break
      case 1:
        setPaymentWithdrawIndex(2)
        setStepLabel('Terceira Etapa')
        setStepSubtitle('Informações Bancárias')
        break
      case 2:
        setPaymentWithdrawIndex(3)
        setStepLabel('Quarta Etapa')
        setStepSubtitle('Documentos')
        break
      case 3:
        setIsLoading(true)
        router.push('/pagamento/saque/sucesso')
    }
  }

  return (
    <LayoutPage>
      {/* CHANGE COLOR */}
      <main className="flex h-screen flex-col items-center justify-start bg-[#151714] text-white">
        <CircleLoading
          label="Processando..."
          enabled={isLoading}
          className="flex h-2/3 items-center justify-center"
        >
          <div className="mt-8 flex w-fit flex-col">
            <div className="mb-8 flex w-full items-center justify-start">
              <Button className="border-none" onClick={() => handleOnCancel()}>
                <IconLeftArrow />
              </Button>
              {/* CHANGE COLOR */}
              <span className="ml-2 text-[#A7B0A0]">
                <text>Saldo </text>
                <text>• </text>
                {/* CHANGE COLOR */}
                <text className="text-[#49E671]">Retirar Levantamento</text>
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-center">
              <Title size="2xl"> Retirar levantamento </Title>
              <div className="mt-4 flex w-[546px] items-center justify-center">
                {/* CHANGE COLOR */}
                <div className="flex h-10 w-12 items-center justify-center rounded-full bg-[#A6CF2B] p-2">
                  <IconPerson />
                </div>
                <div className="h-0.5 w-full bg-[#414141]">
                  <div
                    className={`h-full bg-[#A6CF2B] ${
                      paymentWithdrawIndex >= 1
                        ? 'w-full transition-all duration-500'
                        : 'w-0'
                    }`}
                  />
                </div>
                <div
                  className={`flex h-10 w-12 items-center justify-center rounded-full ${
                    paymentWithdrawIndex >= 1
                      ? 'bg-[#A6CF2B] transition-all delay-500 duration-500'
                      : 'bg-[#414141]'
                  } p-2`}
                >
                  <IconLocation
                    className={`${
                      paymentWithdrawIndex >= 1
                        ? 'stroke-[#121412] transition-all delay-500 duration-500'
                        : 'stroke-[#8E8E8E]'
                    }`}
                  />
                </div>
                <div className="h-0.5 w-full bg-[#414141]">
                  <div
                    className={`h-full bg-[#A6CF2B] ${
                      paymentWithdrawIndex >= 2
                        ? 'w-full transition-all duration-500'
                        : 'w-0'
                    }`}
                  />
                </div>
                <div
                  className={`flex h-10 w-12 items-center justify-center rounded-full ${
                    paymentWithdrawIndex >= 2
                      ? 'bg-[#A6CF2B] transition-all delay-500 duration-500'
                      : 'bg-[#414141]'
                  } p-2`}
                >
                  <IconBank
                    className={`${
                      paymentWithdrawIndex >= 2
                        ? 'stroke-[#121412] transition-all delay-500 duration-500'
                        : 'stroke-[#8E8E8E]'
                    }`}
                  />
                </div>
                <div className="h-0.5 w-full bg-[#414141]">
                  <div
                    className={`h-full bg-[#A6CF2B] ${
                      paymentWithdrawIndex >= 3
                        ? 'w-full transition-all duration-500'
                        : 'w-0'
                    }`}
                  />
                </div>
                <div
                  className={`flex h-10 w-12 items-center justify-center rounded-full ${
                    paymentWithdrawIndex >= 3
                      ? 'bg-[#A6CF3B] transition-all delay-500 duration-500'
                      : 'bg-[#414141]'
                  } p-2`}
                >
                  <IconCard
                    className={`${
                      paymentWithdrawIndex >= 3
                        ? 'fill-[#121412] transition-all delay-500 duration-500'
                        : 'fill-[#8E8E8E]'
                    }`}
                  />
                </div>
              </div>
              <div className="mt-4 w-full">
                <div className="text-sm text-[#A7B0A0]">{stepLabel}</div>
                <Title size={'lg'} bold={600}>
                  {stepSubtitle}
                </Title>
              </div>
              <form
                onSubmit={(event) => handleOnNext(event)}
                className="mt-4 w-full"
              >
                {paymentWithdrawIndex === 0 && <PaymentWithdrawStepPersonal />}
                <br />

                <div className="flex justify-between text-xl font-semibold">
                  <text>Total:</text>
                  {/* CHANGE COLOR */}
                  <span className="text-[#C5EA56]">R$0,00</span>
                </div>

                {/* CHANGE COLOR */}
                <div className="flex flex-col gap-4 text-xl font-semibold">
                  <Button
                    type="submit"
                    className="w-full border-[#A6CF2B] bg-[#A6CF2B] py-2 text-black disabled:border-[#3C403C] disabled:bg-[#3C403C] disabled:text-[#979797]"
                  >
                    Continuar
                  </Button>
                  <Button
                    className="w-full border-2 py-2"
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
