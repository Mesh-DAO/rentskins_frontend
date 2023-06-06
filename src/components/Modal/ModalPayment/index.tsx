'use client'
//
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PaymentCheck } from './PaymentCheck'
import { PaymentAdd } from './PaymentAdd'
import useComponentStore from '@/stores/components.store'
import { PaymentRetrieve } from './PaymentRetrieve'

interface IProps {
  activator: React.ReactNode
}

export function ModalPayment({ activator }: IProps) {
  const {
    paymentGeneralIndex,
    paymentRetrieveIndex,
    setPaymentGeneralIndex,
    setPaymentRetrieveIndex,
  } = useComponentStore()

  const handleModalOnClose = () => {
    if (paymentGeneralIndex !== 0) {
      setPaymentGeneralIndex(0)
    }

    if (paymentRetrieveIndex !== 0) {
      setPaymentRetrieveIndex(0)
    }
  }

  return (
    <Dialog.Root modal onOpenChange={() => handleModalOnClose()}>
      <Dialog.Trigger asChild>{activator}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex bg-black/70 transition-all" />
        {paymentGeneralIndex === 0 && <PaymentCheck />}
        {paymentGeneralIndex === 1 && <PaymentAdd />}
        {paymentGeneralIndex === 2 && <PaymentRetrieve />}
      </Dialog.Portal>
    </Dialog.Root>
  )
}
