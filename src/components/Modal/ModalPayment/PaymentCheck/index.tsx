import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconClose } from '@/components/Icons/IconClose'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import Image from 'next/image'
import Banner from '../../../../../public/banner.png'
import useComponentStore from '@/stores/components.store'

export function ModalPaymentCheck() {
  const { setPaymentGeneralIndex } = useComponentStore()

  const handleButton = (index: 1 | 2) => {
    setPaymentGeneralIndex(index)
  }

  return (
    <Dialog.Content
      className="fixed left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2
  rounded-2xl bg-mesh-color-neutral-700"
    >
      <div className="flex h-full w-full flex-col items-center justify-between pt-8">
        {/* TOP */}
        <div className="flex w-11/12 items-center justify-between">
          <Dialog.Title>
            <Title bold={800} size="2xl" color="white">
              Saldo
            </Title>
          </Dialog.Title>
          <Dialog.Close asChild>
            <Button className="border-transparent">
              <IconClose />
            </Button>
          </Dialog.Close>
        </div>
        {/* MIDDLE */}
        <div className="flex h-full w-11/12 items-start justify-between">
          <div className="flex h-full w-11/12 flex-col gap-7 ">
            <div>
              {/* CHANGE COLOR */}
              <Title
                bold={600}
                size="xl"
                className="mt-6 text-mesh-color-neutral-200"
              >
                Saldo Atual
              </Title>
              <Title bold={800} color="white" size="2xl">
                R$ 1234,20
              </Title>
            </div>
            <div>
              {/* CHANGE COLOR */}
              <Title
                bold={600}
                size="xl"
                className="text-mesh-color-neutral-200"
              >
                Levantamento dentro da plataforma
              </Title>
              <Title bold={700} color="white" size="2xl">
                R$ 00,00
              </Title>
            </div>
          </div>
          <Image src={Banner} alt="Banner" className="w-1/4 max-w-sm" />
        </div>
        {/* DIVISOR */}

        {/* BOTTOM */}
        <div className="flex w-11/12 flex-col items-center justify-between">
          <hr className="mb-6 h-0.5 w-11/12 bg-mesh-color-neutral-200" />
          <div className="mb-16 flex h-full w-11/12 items-end gap-20 text-xl font-bold">
            <Button
              className="h-10 w-1/2 border-transparent bg-mesh-color-primary-1200"
              onClick={() => handleButton(1)}
            >
              Recarga
            </Button>
            <Button
              className="h-10 w-1/2 border-transparent bg-mesh-color-secondary-1200"
              onClick={() => handleButton(2)}
            >
              Retirar
            </Button>
          </div>
        </div>
        <div />
      </div>
    </Dialog.Content>
  )
}
