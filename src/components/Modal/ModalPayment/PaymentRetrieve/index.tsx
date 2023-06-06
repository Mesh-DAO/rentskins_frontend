import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconClose } from '@/components/Icons/IconClose'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import { PaymentRetrieveSelection } from './render.selection'
import useComponentStore from '@/stores/components.store'
import { PaymentRetrieveWarning } from './render.warning'

export function PaymentRetrieve() {
  const { paymentRetrieveIndex } = useComponentStore()

  return (
    <Dialog.Content
      className="fixed left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2
  rounded-2xl bg-[#272E29]"
    >
      <div className="flex h-full w-full flex-col items-center justify-between pt-8">
        {/* TOP */}
        <div className="flex w-11/12 items-center justify-between">
          <Dialog.Title>
            <Title bold={800} size="2xl" color="white">
              Retirar Levantamento
            </Title>
          </Dialog.Title>
          <Button className="border-transparent">
            <IconClose />
          </Button>
        </div>
        <div className="flex h-full w-11/12 items-start justify-between">
          {paymentRetrieveIndex === 0 && <PaymentRetrieveSelection />}
          {paymentRetrieveIndex === 1 && <PaymentRetrieveWarning />}
        </div>
        <div />
      </div>
    </Dialog.Content>
  )
}
