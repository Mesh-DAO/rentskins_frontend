import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Title } from '@/components/Title'
import { IconMoneyBag } from '@/components/Icons/IconMoneyBag'
import { Button } from '@/components/Button'
import { IconClose } from '@/components/Icons/IconClose'
import { ModalPaymentAddValuesInputs } from './input.value'
import { ModalPaymentAddMethodsInputs } from './input.method'
import { Loading } from '@/components/Loading'
import { useRouter } from 'next/navigation'
import usePaymentStore from '@/stores/payment.store'

export function ModalPaymentAdd() {
  const router = useRouter()
  const { paymentAdd } = usePaymentStore()
  const [isLoading, setIsLoading] = useState(false)

  const handleOnDeposit = () => {
    setIsLoading(true)
    router.push(`/payment/add/${paymentAdd.method}`)
  }
  //
  return (
    <Dialog.Content
      className="fixed left-1/2 top-1/2 h-3/5 w-2/3 -translate-x-1/2 -translate-y-1/2
rounded-2xl bg-[#272E29]"
    >
      <div className="flex h-full w-full">
        {/* CHANGE COLOR! */}
        <div className="h-full w-1/4 rounded-l-2xl bg-[#222723] px-6 pt-6">
          <Title bold={400} size="xl" color="white" className="leading-none">
            Selecione a forma de pagamento
          </Title>
          <ModalPaymentAddMethodsInputs />
        </div>
        {isLoading ? (
          <Loading> Processando... </Loading>
        ) : (
          <div className="flex h-full w-3/4 flex-col items-center justify-start">
            <div className=" mt-6 flex w-11/12 items-center justify-between">
              <Dialog.Title>
                <Title bold={800} size="2xl" color="white">
                  Adicione Créditos
                </Title>
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button className="border-transparent">
                  <IconClose />
                </Button>
              </Dialog.Close>
            </div>
            <div className="mt-3 flex h-full w-full flex-col justify-between">
              <div className="flex h-min w-full justify-around">
                <div className="flex w-1/2 flex-col">
                  <label className="flex flex-col text-[#A7B0A0]">
                    Valor do Pagamento
                    <input
                      // CHANGE COLOR!
                      className="mb-2 mt-2 rounded-md bg-mesh-dark-0 px-3 py-4 text-alt-steam-button placeholder:text-[#E3F1D8]"
                      placeholder="Insira um valor"
                    />
                  </label>
                  <ModalPaymentAddValuesInputs />
                </div>
                <div className="w-1/3 self-center">
                  <IconMoneyBag />
                </div>
              </div>
              <div className="mb-8 flex w-11/12 items-center justify-between self-center">
                <span className="leading text-white">
                  Ao prosseguir para finalizar o pagamento, você concorda com os
                  nossos{' '}
                  <a
                    href=""
                    target="_blank"
                    className="hover:text-inherit/50 text-[#B6DF3E]"
                  >
                    Termos de Serviço
                  </a>
                  ,{' '}
                  <a href="" target="_blank" className="text-[#B6DF3E]">
                    Política de Privacidade
                  </a>
                  ,{' '}
                  <a href="" target="_blank" className="text-[#B6DF3E]">
                    Política de Reembolso
                  </a>
                  .
                </span>
                <Button
                  onClick={() => handleOnDeposit()}
                  className="h-16 w-1/2 bg-[#A6CF2B] text-xl font-extrabold"
                >
                  Depositar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Dialog.Content>
  )
}
