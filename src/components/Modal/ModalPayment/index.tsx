import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PaymentCheck } from './PaymentCheck'
import { PaymentAdd } from './PaymentAdd'

interface IProps {
  activator: React.ReactNode
}

// MAKE IT FUNCTIONAL
const paymentIndex: 0 | 1 = 1

export function ModalPayment({ activator }: IProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{activator}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex bg-black/70" />
        {paymentIndex === 0 ? <PaymentCheck /> : <PaymentAdd />}
      </Dialog.Portal>
    </Dialog.Root>
  )
}
