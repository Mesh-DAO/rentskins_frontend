import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { IconClose } from '@/components/Icons/IconClose'
import useComponentStore from '@/stores/components.store'
import URLQuery from '@/tools/urlquery.tool'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'
import { ModalPaymentRetrieveSelection } from './ModalPaymentRetrieveSelection'
import { ModalPaymentRetrieveWarning } from './ModalPaymentRetrieveWarning'

export function ModalPaymentRetrieveMain() {
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
            <CommonTitle bold={800} size="2xl" color="white">
              Retirar Levantamento
            </CommonTitle>
          </Dialog.Title>
          <Dialog.Close
            asChild
            onClick={() =>
              router.push(URLQuery.removeQuery(['modalopen', 'modaltype']))
            }
          >
            <CommonButton className="border-transparent">
              <IconClose />
            </CommonButton>
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
