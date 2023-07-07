'use client'
import useComponentStore from '@/stores/components.store'
import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import Modal from '..'

interface IProps {
  activator: React.ReactNode
  name: string
  nameColor: string
  iconUrl: string
}

export function ModalRefundMain({
  activator,
  name,
  nameColor,
  iconUrl,
}: IProps) {
  const { setRefoundGeneralIndex, refoundGeneralIndex } = useComponentStore()

  return (
    <Dialog.Root modal onOpenChange={() => setRefoundGeneralIndex(0)}>
      <Dialog.Trigger asChild>{activator}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex bg-black/70 transition-all" />
        {refoundGeneralIndex === 0 && (
          <Modal.Refund.Information.Main
            iconUrl={iconUrl}
            name={name}
            nameColor={nameColor}
          />
        )}
        {refoundGeneralIndex === 1 && <Modal.Refund.Method.Main />}
        {refoundGeneralIndex === 2 && <Modal.Refund.KYC />}
      </Dialog.Portal>
    </Dialog.Root>
  )
}
