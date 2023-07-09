'use client'
import React from 'react'

// ----------------- LIBS ----------------
import * as Dialog from '@radix-ui/react-dialog'
// ----------------- COMPONENTS ----------------
import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { IconClose } from '@/components/Icons/IconClose'
import { ModalConnectInventoryForm } from './ModalConnectInventoryForm'

interface IProps {
  activator: React.ReactNode
}

export function ModalConnectInventoryMain({ activator }: IProps) {
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
                <CommonTitle bold={800} size="2xl" color="white">
                  Conectar Inventário à Steam
                </CommonTitle>
              </Dialog.Title>
              <Dialog.Close asChild>
                <CommonButton className="border-none">
                  <IconClose />
                </CommonButton>
              </Dialog.Close>
            </div>
            {/* MIDDLE */}
            <ModalConnectInventoryForm />
            {/* DIVISOR */}
            <div />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
