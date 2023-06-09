import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconClose } from '@/components/Icons/IconClose'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import { ModalPaymentRetrieveSelection } from './index.selection'
import useComponentStore from '@/stores/components.store'
import { ModalPaymentRetrieveWarning } from './index.warning'
import URLQuery from '@/tools/urlquery.tool'
import { useRouter } from 'next/navigation'

export function ModalPaymentRetrieve() {
  const router = useRouter()
  const { paymentRetrieveIndex } = useComponentStore()

  return (
    <Dialog.Content
      className="fixed left-1/2 top-1/2 z-30 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2
  rounded-2xl bg-mesh-color-neutral-700"
    >
      <div className="flex h-full w-full flex-col items-center justify-between pt-8">
        {/* TOP */}
        <div className="flex w-11/12 items-center justify-between">
          <Dialog.Title>
            <Title bold={800} size="2xl" color="white">
              Retirar Levantamento
            </Title>
          </Dialog.Title>
          <Dialog.Close
            asChild
            onClick={() =>
              router.push(URLQuery.removeQuery(['modalopen', 'modaltype']))
            }
          >
            <Button className="border-transparent">
              <IconClose />
            </Button>
          </Dialog.Close>
        </div>
        <div className="flex h-full w-11/12 items-start justify-between">
          {paymentRetrieveIndex === 0 && <ModalPaymentRetrieveSelection />}
          {paymentRetrieveIndex === 1 && <ModalPaymentRetrieveWarning />}
        </div>
        <div />
      </div>
    </Dialog.Content>
  )
}
