'use client'
import Form from '@/components/Forms'
import usePaymentStore from '@/stores/payment.store'
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

  return (
    <Form.Root className="my-8 flex w-full flex-col gap-4">
      <Form.Input.Text
        label="Email"
        placeholder="email@exemplo.com"
        state={email}
        setState={setEmail}
        required
      />

      <div>
        <Form.Input.Card
          label="Informações do Cartão"
          placeholder="0000 0000 0000 0000"
          state={cardNumber}
          setState={setCardNumber}
          required
        />

        <div className="grid w-full grid-cols-2 items-center">
          <Form.Input.MonthYear
            placeholder="MM / YY"
            state={cardValidity}
            setState={setCardValidity}
            required
          />
          <Form.Input.Number
            placeholder="CVC"
            state={cardCVC}
            setState={setCardCVC}
            limit={3}
            required
          />
        </div>
      </div>

      <Form.Input.Text
        label="Nome do Portador"
        placeholder="Nome"
        state={cardOwner}
        setState={setCardOwner}
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
            label="Pagar"
            buttonStyle="full"
            disabled={validateForm()}
            onClick={handleFormSubmit}
          />
          <Form.Button
            type="button"
            label="Cancelar"
            buttonStyle="opaque"
            onClick={handleFormCancel}
          />
        </div>
      </div>
    </Form.Root>
  )
}
