import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Title } from '@/components/Title'
import { IconMoneyBag } from '@/components/Icons/IconMoneyBag'
import { Button } from '@/components/Button'
import { IconClose } from '@/components/Icons/IconClose'
import { ModalPaymentAddValuesInputs } from './input.value'
import { ModalPaymentAddMethodsInputs } from './input.method'
import { useRouter } from 'next/navigation'
import usePaymentStore from '@/stores/payment.store'
import CircleLoading from '@/components/CircleLoading'

export function ModalPaymentAdd() {
  const router = useRouter()
  const { paymentAdd, setPaymentAdd } = usePaymentStore()
  const [isLoading, setIsLoading] = useState(false)
  const [valueAmount, setValueAmount] = useState<undefined | number>(undefined)

  const handleOnDeposit = () => {
    setIsLoading(true)

    if (valueAmount !== undefined) {
      if (Number(valueAmount) > 0) {
        setPaymentAdd({ ...paymentAdd, value: valueAmount })
      }
    }

    router.push(`/pagamento/recarregar/${paymentAdd.method}`)
  }
  //
  return (
    <Dialog.Content
      className="fixed left-1/2 top-1/2 h-3/5 w-2/3 -translate-x-1/2 -translate-y-1/2
rounded-2xl bg-mesh-color-neutral-700"
    >
      <div className="flex h-full w-full">
        {/* CHANGE COLOR! */}
        <div className="h-full w-1/4 rounded-l-2xl bg-mesh-color-others-eerie-black px-6 pt-6">
          <Title bold={400} size="xl" color="white" className="leading-none">
            Selecione a forma de pagamento
          </Title>
          <ModalPaymentAddMethodsInputs />
        </div>
        <CircleLoading label="Processando..." enabled={isLoading}>
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
                  <label className="flex w-full flex-col text-mesh-color-neutral-200">
                    Valor do Pagamento
                    <div className="w-full ">
                      <span
                        className={`relative left-3 top-1/2 text-lg font-semibold transition-all ${
                          valueAmount !== undefined ? '' : 'text-transparent'
                        }`}
                      >
                        R$
                      </span>
                      <input
                        // CHANGE COLOR!
                        type="number"
                        min={0}
                        value={valueAmount?.toFixed(2)}
                        onChange={(event) =>
                          setValueAmount(Number(event.target.value))
                        }
                        className={`bg-mesh-dark-0 my-2 w-full rounded-md
                        px-3 py-4 outline-mesh-color-primary-600 transition-all ${
                          valueAmount !== undefined ? 'pl-10' : 'pl-4'
                        } text-white
                        placeholder:text-mesh-color-neutral-100 focus:placeholder:text-transparent`}
                        placeholder="R$ 0,00"
                      />
                    </div>
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
                    className="hover:text-inherit/50 text-mesh-color-primary-1000"
                  >
                    Termos de Serviço
                  </a>
                  ,{' '}
                  <a
                    href=""
                    target="_blank"
                    className="text-mesh-color-primary-1000"
                  >
                    Política de Privacidade
                  </a>
                  ,{' '}
                  <a
                    href=""
                    target="_blank"
                    className="text-mesh-color-primary-1000"
                  >
                    Política de Reembolso
                  </a>
                  .
                </span>
                <Button
                  onClick={() => handleOnDeposit()}
                  className="h-16 w-1/2 bg-mesh-color-primary-1200 text-xl font-extrabold"
                >
                  Depositar
                </Button>
              </div>
            </div>
          </div>
        </CircleLoading>
      </div>
    </Dialog.Content>
  )
}
