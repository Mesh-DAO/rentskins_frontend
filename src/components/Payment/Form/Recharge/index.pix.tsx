import { Button } from '@/components/Button'
import { FormInput } from '@/components/Forms/Input'
import usePaymentStore from '@/stores/payment.store'
import { useState, MouseEventHandler } from 'react'

interface IProps {
  handleFormSubmit: MouseEventHandler
  handleFormCancel: MouseEventHandler
}

export function PaymentRechargePixForm({
  handleFormSubmit,
  handleFormCancel,
}: IProps) {
  const [name, setName] = useState('')
  const [identification, setIdentification] = useState('')

  const { paymentAdd } = usePaymentStore()

  const validateForm = () => {
    return name.length > 0 && identification.length > 0
  }

  return (
    <>
      <FormInput
        label="Nome Completo"
        type="name"
        name="pix-name"
        placeholder="Nome e Sobrenome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <FormInput
        label="CPF/CNPJ"
        type="text"
        name="pix-cpf"
        placeholder="CPF ou CNPJ"
        value={identification}
        onChange={(event) => setIdentification(event.target.value)}
      />

      <br />

      <div className="mt-4 flex justify-between text-xl font-semibold">
        <text>Total:</text>
        {/* CHANGE COLOR */}
        <span className="text-mesh-color-primary-800">
          R${paymentAdd.value?.toFixed(2).replace('.', ',')}
        </span>
      </div>

      {/* CHANGE COLOR */}
      <div className="flex flex-col gap-4 text-xl font-semibold">
        <Button
          type="submit"
          onClick={handleFormSubmit}
          disable={!validateForm()}
          className="h-12 w-full border-transparent"
          color="green"
        >
          Continuar
        </Button>
        <Button
          className="w-full border-2 py-2"
          onClick={handleFormCancel}
          color="invisible"
        >
          Cancelar
        </Button>
      </div>
    </>
  )
}
