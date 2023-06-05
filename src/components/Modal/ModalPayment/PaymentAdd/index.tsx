import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Title } from '@/components/Title'
import { IconClose } from '@/components/Icons/IconClose'
import { PaymentAddInputs } from './input'
import { IconMoneyBag } from '@/components/Icons/IconMoneyBag'
import { Button } from '@/components/Button'

export function PaymentAdd() {
  return (
    <Dialog.Content
      className="fixed left-1/2 top-1/2 h-3/5 w-2/3 -translate-x-1/2 -translate-y-1/2
rounded-2xl bg-[#272E29]"
    >
      <div className="flex h-full w-full">
        {/* CHANGE COLOR! */}
        <div className="h-full w-1/4 bg-[#222723]">
          <Title>Selecione a forma de pagamento </Title>
          <input type="radio" />
          <label>1</label>
          <input type="radio" />
          <label>2</label>
          <input type="radio" />
          <label>3</label>
        </div>
        <div className="flex h-full w-3/4 flex-col items-center justify-start">
          <div className=" flex w-11/12 items-center justify-between">
            <Dialog.Title>
              <Title bold={800} size="2xl" color="white">
                Adicione Créditos
              </Title>
            </Dialog.Title>
            <Dialog.Close asChild>
              {/* CHANGE - MAKE IT FUNCTIONAL */}
              <IconClose />
            </Dialog.Close>
          </div>
          <div className="mt-3 flex h-full w-11/12 flex-col justify-between ">
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
                <PaymentAddInputs />
              </div>
              <div className="w-1/3 self-center">
                <IconMoneyBag />
              </div>
            </div>
            <div className="mb-8 flex items-center justify-between">
              <span className="leading text-white">
                Ao prosseguir para finalizar o pagamento, você concorda com os
                nossos{' '}
                <a href="" target="_blank" className="text-[#B6DF3E]">
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
              <Button className="h-16 w-1/2 bg-[#A6CF2B] text-xl font-extrabold">
                Depositar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Dialog.Content>
  )
}
