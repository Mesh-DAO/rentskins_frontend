// import { Button } from '@/components/Button'
// import { FormInput } from '@/components/Forms/Input'
// import usePaymentStore from '@/stores/payment.store'
import Form from '@/components/Forms'
import usePaymentStore from '@/stores/payment.store'
import { MouseEventHandler, useState } from 'react'

interface IProps {
  handleFormSubmit: MouseEventHandler
  handleFormCancel: MouseEventHandler
}

export function PaymentRechargeTicketForm({
  handleFormSubmit,
  handleFormCancel,
}: IProps) {
  const [name, setName] = useState('')
  const [identification, setIdentification] = useState('')
  const [email, setEmail] = useState('')
  const { paymentAdd } = usePaymentStore()

  const validateForm = () => {
    return !(
      name.length >= 5 &&
      identification.length === 14 &&
      email.length >= 5 &&
      email.includes('@')
    )
  }

  return (
    <Form.Root className="my-8 flex flex-col gap-4">
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
        state={identification}
        setState={setIdentification}
        required
      />

      <Form.Input.Email
        label="Email"
        placeholder="example@email.com"
        state={email}
        setState={setEmail}
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
          <Form.Input.Button
            type="submit"
            label="Pagar"
            buttonStyle="full"
            disabled={validateForm()}
            onClick={handleFormSubmit}
          />
          <Form.Input.Button
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
