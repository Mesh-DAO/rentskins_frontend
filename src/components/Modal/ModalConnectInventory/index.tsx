import React from 'react'

// ----------------- LIBS ----------------
import * as Dialog from '@radix-ui/react-dialog'
// ----------------- COMPONENTS ----------------
import { IconClose } from '@/components/Icons/IconClose'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import { FormModalConnectInventory } from './FormModalConnectInventory'

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
                <Button className="border-none">
                  <IconClose />
                </Button>
              </Dialog.Close>
            </div>
            {/* MIDDLE */}
            <FormModalConnectInventory />
            {/* DIVISOR */}
            <div />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
