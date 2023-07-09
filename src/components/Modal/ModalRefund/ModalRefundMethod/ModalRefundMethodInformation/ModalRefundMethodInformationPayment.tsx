import { CommonTitle } from '@/components/Common/CommonTitle'

export function ModalRefundMethodInformationPayment() {
  return (
    <div className="flex flex-col gap-2">
      <CommonTitle color="white" size="2xl" bold={600}>
        Selecione o método de pagamento
      </CommonTitle>
      <div className="flex gap-5">
        {/* <Method
          value={5}
          method="mastercard"
          id="1"
          icon={<IconMastercard />}
          IsPayBank={true}
        />
        <Method
          value={10}
          method="payPal"
          id="2"
          icon={<IconBoleto />}
          IsPayBank={true}
        />
        <Method
          value={20}
          method="bankTransfer"
          id="3"
          icon={<IconBankTransfer />}
          IsPayBank={true}
        /> */}
      </div>
    </div>
  )
}
