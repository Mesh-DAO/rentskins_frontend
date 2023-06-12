import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconClose } from '@/components/Icons/IconClose'
import { Title } from '@/components/Title'
import { Input } from '@/components/Input'
import { InputRadio } from '@/components/InputRadio'
import { Button } from '@/components/Button'

interface IProps {
  activator: React.ReactNode
}

export function ModalConnectInventario({ activator }: IProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{activator}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex bg-black/70" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2
        rounded-2xl bg-mesh-color-neutral-700"
        >
          <div className="flex h-full w-full flex-col items-center justify-between py-8">
            {/* TOP */}
            <div className="flex w-11/12 items-center justify-between">
              <Dialog.Title>
                <Title bold={800} size="2xl" color="white">
                  Conectar Inventário à Steam
                </Title>
              </Dialog.Title>
              <Dialog.Close asChild>
                {/* CHANGE - MAKE IT FUNCTIONAL */}
                <IconClose />
              </Dialog.Close>
            </div>
            {/* MIDDLE */}
            <div className="flex h-full w-11/12 items-start justify-between">
              <div className="flex h-full w-11/12 flex-col gap-7 ">
                <div className=" space-y-2">
                  {/* CHANGE COLOR */}
                  <Title
                    bold={500}
                    size="lg"
                    className="mt-6 text-mesh-color-neutral-200"
                  >
                    Insira URL Trade Link do seu Perfil
                  </Title>
                  <div className="flex w-full items-center justify-between">
                    <div className="relative w-10/12 rounded-lg bg-mesh-color-neutral-500">
                      <Input
                        className="w-10/12  bg-mesh-color-neutral-500 text-base text-[#E3F1D8] placeholder:text-[#E3F1D8]"
                        placeHolder="https://steamcommunity.com/tradeoffer/new/?partner=240416830&token=vzAomQ5n"
                      />
                      <Button className="absolute right-0 top-1/2 mr-4 h-5 w-5 -translate-y-1/2">
                        <IconClose />
                      </Button>
                    </div>

                    <Button className="border-none text-mesh-color-primary-1400">
                      Obter URL
                    </Button>
                  </div>
                </div>
                <div className="mt-[-12px] space-y-2">
                  {/* CHANGE COLOR */}
                  <Title
                    bold={500}
                    size="lg"
                    className="text-mesh-color-neutral-200"
                  >
                    Seu email de contato
                  </Title>

                  <Input
                    className="w-1/3 rounded-lg bg-mesh-color-neutral-500 text-base text-[#E3F1D8] placeholder:text-[#E3F1D8]"
                    placeHolder="SeuEmail@gmail.com"
                  />
                </div>

                <div className="space-y-2">
                  <InputRadio
                    name="promo"
                    radio="filter"
                    className="text-white"
                  >
                    <Title className="ml-2">
                      Deseja receber promoções em seu email?
                    </Title>
                  </InputRadio>
                  <InputRadio
                    name="termos"
                    radio="filter"
                    className="text-white"
                  >
                    <Title className="ml-2">
                      Eu concordo com os{' '}
                      <span className="text-mesh-color-primary-1400">
                        Termos de Serviço, Política de Privacidade e Política de
                        Reembolso da RentSkins.
                      </span>
                    </Title>
                  </InputRadio>
                </div>
                <Button className="bg-dark-olive-green h-11 w-1/4 font-bold text-[#979797]">
                  Concluir
                </Button>
              </div>
            </div>
            {/* DIVISOR */}
            <div />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
