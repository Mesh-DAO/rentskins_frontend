import { Button } from '@/components/Button'
import { IconShield } from '@/components/Icons'
import { Title } from '@/components/Title'
import useComponentStore from '@/stores/components.store'
import { InputRadioMethodArray } from '@/components/InputRadioMethodArray'
import ImageBankTransfer from '../../../../../public/payment/banktransfer.png'
import ImagePaypal from '../../../../../public/payment/paypal.png'
import ImageMastercard from '../../../../../public/payment/mastercard.png'
import usePaymentStore from '@/stores/payment.store'

export function ModalPaymentRetrieveSelection() {
  const { setPaymentRetrieveIndex } = useComponentStore()
  const { setPaymentRetrieve, paymentRetrieve } = usePaymentStore()

  const handleMethodChange = (event: any) => {
    setPaymentRetrieve({ ...paymentRetrieve, method: event.target.value })
  }

  const handleOnWithdraw = () => {
    setPaymentRetrieveIndex(1)
  }

  return (
    <div className="flex h-full w-full flex-col gap-7 ">
      <div className="flex items-center justify-between">
        <div>
          <Title
            bold={600}
            size="xl"
            className="mt-6 text-mesh-color-neutral-200"
          >
            Levantamento dentro da plataforma
          </Title>
          <Title bold={800} color="white" size="2xl">
            R$ 00,00
          </Title>
        </div>
        <div className="flex items-center gap-2 text-mesh-color-neutral-200">
          <div className="flex items-center justify-center rounded-lg bg-mesh-color-primary-1900/20 px-2 py-2">
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
      <div className="w-2/3">
        <Title
          bold={600}
          size="xl"
          className="mt-6 text-mesh-color-neutral-200"
        >
          Selecione o Método de Pagamento
        </Title>
        <InputRadioMethodArray
          items={[
            { name: 'mastercard', icon: ImageMastercard },
            { name: 'paypal', icon: ImagePaypal },
            { name: 'banktransfer', icon: ImageBankTransfer },
          ]}
          hasFlex
          hasPaybank
          className="gap-4"
          handleOnClick={(event) => handleMethodChange(event)}
        />
      </div>
      <div className="mb-7 flex h-full items-end justify-end">
        <Button
          className="h-14 w-4/12 border-transparent bg-mesh-color-primary-1200 text-2xl font-bold"
          onClick={() => handleOnWithdraw()}
        >
          Retirar saldo
        </Button>
      </div>
    </div>
  )
}
