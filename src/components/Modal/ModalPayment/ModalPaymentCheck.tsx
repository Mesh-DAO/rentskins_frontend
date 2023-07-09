import Banner from '@/../public/banner.png'
import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { IconClose } from '@/components/Icons/IconClose'
import useComponentStore from '@/stores/components.store'
import useUserStore from '@/stores/user.store'
import URLQuery from '@/tools/urlquery.tool'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function ModalPaymentCheck() {
  const router = useRouter()
  const { wallet } = useUserStore()
  const { setPaymentGeneralIndex } = useComponentStore()

  const handleButton = (index: 1 | 2) => {
    setPaymentGeneralIndex(index)
  }

  return (
    <Dialog.Content
      className="fixed left-1/2 top-1/2 z-30 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2
  rounded-2xl bg-mesh-color-neutral-700"
    >
      <div className="flex h-full w-full flex-col items-center justify-between pt-8">
        <div className="flex w-11/12 items-center justify-between">
          <Dialog.Title>
            <CommonTitle bold={800} size="2xl" color="white">
              Saldo
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
          <div className="flex h-full w-11/12 flex-col gap-7 ">
            <div>
              <CommonTitle
                bold={600}
                size="xl"
                className="mt-6 text-mesh-color-neutral-200"
              >
                Saldo Atual
              </CommonTitle>
              <CommonTitle bold={800} color="white" size="2xl">
                {wallet.data?.value || 'R$ 0,00'}
              </CommonTitle>
            </div>
            <div>
              <CommonTitle
                bold={600}
                size="xl"
                className="text-mesh-color-neutral-200"
              >
                Levantamento dentro da plataforma
              </CommonTitle>
              <CommonTitle bold={700} color="white" size="2xl">
                R$0,00
              </CommonTitle>
            </div>
          </div>
          <Image src={Banner} alt="Banner" className="w-1/4 max-w-sm" />
        </div>

        <div className="flex w-11/12 flex-col items-center justify-between">
          <hr className="mb-6 h-0.5 w-11/12 bg-mesh-color-neutral-200" />
          <div className="mb-16 flex h-full w-11/12 items-end gap-20 text-xl font-bold">
            <CommonButton
              className="h-10 w-1/2 border-transparent bg-mesh-color-primary-1200"
              onClick={() => handleButton(1)}
            >
              Recarga
            </CommonButton>
            <CommonButton
              className="h-10 w-1/2 border-transparent bg-mesh-color-secondary-1200"
              onClick={() => handleButton(2)}
            >
              Retirar
            </CommonButton>
          </div>
        </div>
        <div />
      </div>
    </Dialog.Content>
  )
}
