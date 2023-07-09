import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { IconClose } from '@/components/Icons'
import * as Dialog from '@radix-ui/react-dialog'
import ModalRefundMethodInformationMain from './ModalRefundMethodInformation/ModalRefundMethodInformationMain'

export default function ModalRefundMethodMain() {
  return (
    <Dialog.Content
      className="fixed left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2
        rounded-2xl bg-[#222723] px-8 py-6"
    >
      <div className="mb-5 flex w-full justify-between">
        <Dialog.Title>
          <CommonTitle bold={800} size="3xl" color="white">
            Devolução
          </CommonTitle>
        </Dialog.Title>
        <Dialog.Close>
          <CommonButton className="border-none">
            <IconClose />
          </CommonButton>
        </Dialog.Close>
      </div>
      <div>
        <ModalRefundMethodInformationMain />
      </div>
    </Dialog.Content>
  )
}
