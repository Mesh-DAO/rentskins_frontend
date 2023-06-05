'use client'

import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PaymentCheck } from './PaymentCheck'
import { PaymentAdd } from './PaymentAdd'
import useComponentStore from '@/stores/components.store'

interface IProps {
  activator: React.ReactNode
}

export function ModalPayment({ activator }: IProps) {
  const paymentIndex = useComponentStore((state) => state.paymentIndex)
  const setPaymentIndex = useComponentStore((state) => state.setPaymentIndex)

  const handleModal = () => {
    if (paymentIndex !== 0) {
      setPaymentIndex(0)
    }
  }

  return (
    <Dialog.Root modal onOpenChange={() => handleModal()}>
      <Dialog.Trigger asChild>{activator}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex bg-black/70 transition-all" />
        {paymentIndex === 0 && <PaymentCheck />}
        {paymentIndex === 1 && <PaymentAdd />}
      </Dialog.Portal>
    </Dialog.Root>
  )
}
