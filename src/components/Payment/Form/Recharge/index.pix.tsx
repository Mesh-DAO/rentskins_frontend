import { Button } from '@/components/Button'
import CircleLoading from '@/components/CircleLoading'
import Form from '@/components/Forms'
import Image from 'next/image'
import { Title } from '@/components/Title'
import usePaymentStore from '@/stores/payment.store'
import { MouseEventHandler, useState } from 'react'
import QRCodeExample from '@/../public/qrcode-example.png'

interface IProps {
  handleFormSubmit: MouseEventHandler
  handleFormCancel: MouseEventHandler
}

export function PaymentRechargePixForm({
  handleFormSubmit,
  handleFormCancel,
}: IProps) {
  const [isLoading] = useState(false)
  const [pageIndex, setPageIndex] = useState(0)
  const [name, setName] = useState('')
  const [identification, setIdentification] = useState('')

  const { paymentAdd } = usePaymentStore()

  const textAreaValue =
    '00020101021226860014br.gov.bcb.pix2564qrpix.bradesco.com.br/qr/v2/46477fb7-d638-46d4-9f4d-f154c3ab5d7b5204000053039865406700.735802BR5925PAGBRASIL PAGAMENTOS LTDA6012PORTO ALEGRE62090505131196304CA18'

  const validateForm = () => {
    return !(name.length >= 5 && identification.length === 14)
  }

  const handlePageIndex = (index: number, resetInputs: boolean) => {
    setPageIndex(index)

    if (resetInputs) {
      setName('')
      setIdentification('')
    }
  }

  const renderStepTwo = (
    <CircleLoading
      label="Processando..."
      enabled={isLoading}
      className="flex h-2/3 items-center justify-center"
    >
      <Title size="lg" bold={600} className="mt-8">
        Digitalize o código QR usando o aplicativo da carteira/banco.
      </Title>
      <div className="mt-4">
        <Image src={QRCodeExample} alt="QRCode" width={150} />
        <div className="mt-8 h-1/3">
          <Title bold={600} size="lg">
            Ou cole o código alternativo no aplicativo para concluir o
            pagamento.
          </Title>

          <textarea
            readOnly={true}
            className="focus:outline-pink-500n h-36 max-h-36 w-full resize-none overflow-hidden rounded-md
              border-2 border-mesh-color-primary-1100/50 bg-mesh-color-others-eerie-black px-3 py-3 text-black text-white/70"
          >
            {textAreaValue}
          </textarea>
        </div>
        <div className="mt-8 flex justify-between text-xl font-semibold">
          <text>Total:</text>

          <span className="text-mesh-color-primary-800">
            {paymentAdd.value?.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </span>
        </div>

        <div className="flex flex-col gap-4 text-xl font-semibold">
          <Button
            type="submit"
            onClick={handleFormSubmit}
            className="h-12 w-full border-transparent"
            color="green"
          >
            Pagar
          </Button>
          <Button
            className="w-full border-2 py-2"
            onClick={() => handlePageIndex(0, true)}
            color="invisible"
          >
            Voltar
          </Button>
        </div>
      </div>
    </CircleLoading>
  )

  const renderStepOne = (
    <Form.Root className="my-8 flex w-full flex-col gap-4">
      <Form.Input.Text
        label="Nome"
        placeholder="Nome Completo"
        setState={setName}
        state={name}
        required
      />

      <Form.Input.CPF
        label="CPF"
        placeholder="000.000.000-00"
        setState={setIdentification}
        state={identification}
        required
      />

      <div className="mt-4">
        <div className="flex justify-between text-xl font-semibold">
          <text>Total:</text>
          <span className="text-mesh-color-primary-800">
            {paymentAdd.value?.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </span>
        </div>

        <div className="flex flex-col gap-4 text-xl font-semibold">
          <Form.Button
            type="submit"
            buttonStyle="full"
            disabled={validateForm()}
            onClick={() => handlePageIndex(1, false)}
          >
            Pagar
          </Form.Button>
          <Form.Button
            type="button"
            buttonStyle="opaque"
            onClick={handleFormCancel}
          >
            Cancelar
          </Form.Button>
        </div>
      </div>
    </Form.Root>
  )

  return (
    <>
      {pageIndex === 0 && renderStepOne}
      {pageIndex === 1 && renderStepTwo}
    </>
  )
}
