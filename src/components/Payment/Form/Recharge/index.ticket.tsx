import { Button } from '@/components/Button'
import { FormInput } from '@/components/Forms/Input'
import usePaymentStore from '@/stores/payment.store'
import router from 'next/router'
import { useState, MouseEventHandler } from 'react'

interface IProps {
  handleFormSubmit: MouseEventHandler
}

export function PaymentRechargeTicketForm({ handleFormSubmit }: IProps) {
  const [name, setName] = useState('')
  const [identification, setIdentification] = useState('')
  const [email, setEmail] = useState('')
  const { paymentAdd } = usePaymentStore()

  const validateForm = () => {
    return name.length > 0 && identification.length > 0 && email.length > 0
  }

  const handleOnCancel = () => {
    router.push('/')
  }

  return (
    <>
      <FormInput
        label="Nome Completo"
        type="text"
        name="ticket-name"
        placeholder="Nome e sobrenome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <FormInput
        label="Informações do Cartão"
        type="text"
        name="ticket-identification"
        placeholder="CPF ou CNPJ"
        value={identification}
        onChange={(event) => setIdentification(event.target.value)}
      />

      <FormInput
        label="Nome do Portador"
        type="text"
        name="ticket-email"
        placeholder="Seu email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />

      <div className="flex justify-between text-xl font-semibold">
        <text>Total:</text>

        <span className="text-mesh-color-primary-800">
          R${paymentAdd.value?.toFixed(2).replace('.', ',')}
        </span>
      </div>

      <div className="flex flex-col gap-4 text-xl font-semibold">
        <Button
          type="button"
          disable={!validateForm()}
          onClick={handleFormSubmit}
          className="h-12 w-full border-transparent"
          color="green"
        >
          Pagar
        </Button>
        <Button
          className="w-full border-2 py-2"
          onClick={() => handleOnCancel()}
          color="invisible"
        >
          Cancelar
        </Button>
      </div>
    </>
  )
}
