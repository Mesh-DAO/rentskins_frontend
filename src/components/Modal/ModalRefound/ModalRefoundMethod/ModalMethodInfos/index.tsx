import { Button } from '@/components/Button'
import IconSecurity from '@/components/Icons/IconSecurity'
import { Title } from '@/components/Title'
import { PaymentMethod } from './PaymentMethod'
import useComponentStore from '@/stores/components.store'

export default function ModalMethodInfos() {
  const { setRefoundGeneralIndex } = useComponentStore()

  return (
    <section className="flex flex-col gap-11">
      <div className="flex w-full flex-col gap-3">
        <div className="flex w-full justify-between">
          <Title className="text-mesh-light-2" bold={600} size="lg">
            Reembolso
          </Title>
          <h1 className="flex items-center gap-2">
            <IconSecurity />
            <span className="mesh-light-2 text-sm font-normal">
              Segurança KYC
            </span>
          </h1>
        </div>
        <Title color="white" bold={700} size="3xl">
          R$742,50
        </Title>
      </div>
      <PaymentMethod />
      <Button
        onClick={() => setRefoundGeneralIndex(2)}
        color="green"
        className="h-11 w-80 self-end rounded-sm text-lg font-bold text-black"
      >
        Pedir devolução
      </Button>
    </section>
  )
}
