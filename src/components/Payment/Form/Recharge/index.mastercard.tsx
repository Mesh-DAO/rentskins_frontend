'use client'
import Form from '@/components/Forms'
import usePaymentStore from '@/stores/payment.store'
import { useRouter } from 'next/navigation'
import { useState, MouseEventHandler } from 'react'

interface IProps {
  handleFormSubmit: MouseEventHandler
  handleFormCancel: MouseEventHandler
}

export function PaymentRechargeMastercardForm({
  handleFormSubmit,
  handleFormCancel,
}: IProps) {
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardValidity, setCardValidity] = useState('')
  const [cardCVC, setCardCVC] = useState('')
  const [cardOwner, setCardOwner] = useState('')

  const router = useRouter()

  const { paymentAdd } = usePaymentStore()

  const validateForm = () => {
    return !(
      email.length > 5 &&
      email.includes('@') &&
      cardNumber.length >= 19 &&
      cardValidity.length > 4 &&
      cardCVC.length >= 3 &&
      cardOwner.length >= 5
    )
  }

  const handleOnCancel = () => {
    router.push('/')
  }

  return (
    <>
      <Form.Root className="mb-8 flex flex-col gap-4">
        <Form.InputText
          label="Email"
          placeholder="email@exemplo.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <div>
          <Form.InputCard
            label="Informações do Cartão"
            placeholder="0000 0000 0000 0000"
            stateValue={cardNumber}
            onChange={({ target }) => setCardNumber(target.value)}
          />

          <div className="grid w-full grid-cols-2 items-center">
            <Form.InputMonthYear
              placeholder="MM / YY"
              stateValue={cardValidity}
              onChange={({ target }) => setCardValidity(target.value)}
            />
            <Form.InputNumber
              placeholder="CVC"
              stateValue={cardCVC}
              limit={3}
              onChange={({ target }) => setCardCVC(target.value)}
            />
          </div>
        </div>

        <Form.InputText
          label="Nome do Portador"
          placeholder="Nome"
          value={cardOwner}
          onChange={({ target }) => setCardOwner(target.value)}
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
            <Form.InputButton
              type="submit"
              label="Pagar"
              buttonStyle="full"
              disabled={validateForm()}
              onClick={handleFormSubmit}
            />
            <Form.InputButton
              type="button"
              label="Cancelar"
              buttonStyle="opaque"
              onClick={handleOnCancel}
            />
          </div>
        </div>
      </Form.Root>
    </>
  )
}
