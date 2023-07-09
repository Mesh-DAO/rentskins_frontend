import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import IconSecurity from '@/components/Icons/IconSecurity'
import useComponentStore from '@/stores/components.store'
import { ModalRefundMethodInformationPayment } from './ModalRefundMethodInformationPayment'

export default function ModalRefundMethodInformationMain() {
  const { setRefoundGeneralIndex } = useComponentStore()

  return (
    <section className="flex flex-col gap-11">
      <div className="flex w-full flex-col gap-3">
        <div className="flex w-full justify-between">
          <CommonTitle className="text-mesh-light-2" bold={600} size="lg">
            Reembolso
          </CommonTitle>
          <h1 className="flex items-center gap-2">
            <IconSecurity />
            <span className="text-mesh-light-2 text-sm font-normal">
              Segurança KYC
            </span>
          </h1>
        </div>
        <CommonTitle color="white" bold={700} size="3xl">
          R$742,50
        </CommonTitle>
      </div>
      <ModalRefundMethodInformationPayment />
      <CommonButton
        onClick={() => setRefoundGeneralIndex(2)}
        color="green"
        className="h-11 w-80 self-end rounded-sm text-lg font-bold text-black"
      >
        Pedir devolução
      </CommonButton>
    </section>
  )
}
