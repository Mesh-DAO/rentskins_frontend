import { Button } from '@/components/Button'
import { IconShield } from '@/components/Icons'
import { Title } from '@/components/Title'
import { PaymentRetrieveInputMethods } from './input.method'
import useComponentStore from '@/stores/components.store'

export function PaymentRetrieveSelection() {
  const { setPaymentRetrieveIndex } = useComponentStore()

  const handleOnWithdraw = () => {
    setPaymentRetrieveIndex(1)
  }

  return (
    <div className="flex h-full w-full flex-col gap-7 ">
      <div className="flex items-center justify-between">
        <div>
          {/* CHANGE COLOR */}
          <Title bold={600} size="xl" className="mt-6 text-[#A7B0A0]">
            Levantamento dentro da plataforma
          </Title>
          <Title bold={800} color="white" size="2xl">
            R$ 00,00
          </Title>
        </div>
        {/* CHANGE COLOR */}
        <div className="flex items-center gap-2 text-[#A7B0A0]">
          <div className="flex items-center justify-center rounded-lg bg-[#63800d33] px-2 py-2">
            <IconShield
              width={16}
              height={16}
              stroke="#C5EA56"
              fill="#C5EA56"
            />
          </div>
          <span> Segurança KYC </span>
        </div>
      </div>
      <div>
        {/* CHANGE COLOR */}
        <Title bold={600} size="xl" className="mt-6 text-[#A7B0A0]">
          Selecione o Método de Pagamento
        </Title>
        <PaymentRetrieveInputMethods />
      </div>
      <div className="mb-7 flex h-full items-end justify-end">
        {/* CHANGE COLOR */}
        <Button
          className="h-14 w-4/12 border-none bg-[#A6CF2B] text-2xl font-bold"
          onClick={() => handleOnWithdraw()}
        >
          Retirar saldo
        </Button>
      </div>
    </div>
  )
}
