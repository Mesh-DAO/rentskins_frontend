import { Button } from '@/components/Button'
import Form from '@/components/Forms'
import { FormInput } from '@/components/Forms/Input'
import usePaymentStore from '@/stores/payment.store'
import router from 'next/router'
import { useState, MouseEventHandler } from 'react'

interface IProps {
  handleFormSubmit: MouseEventHandler
}

export function PaymentRechargeMastercardForm({ handleFormSubmit }: IProps) {
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardValidity, setCardValidity] = useState('')
  const [cardCVC, setCardCVC] = useState('')
  const [cardOwner, setCardOwner] = useState('')

  const { paymentAdd } = usePaymentStore()

  const validateForm = () => {
    return (
      email.length > 0 &&
      cardNumber.length > 0 &&
      cardValidity.length > 0 &&
      cardCVC.length > 0 &&
      cardOwner.length > 0
    )
  }

  const handleOnCancel = () => {
    router.push('/')
  }

  return (
    <>
      {/* <FormInput
        label="Email"
        type="email"
        name="mastercard-email"
        placeholder="email@example.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      /> */}

      <Form.Root>
        <Form.InputText label="Email" placeholder="email@exemplo.com" />
        <Form.InputCard
          label="Informações do Cartão"
          placeholder="0000 0000 0000 0000"
          stateValue={cardNumber}
          onChange={({ target }) => setCardNumber(target.value)}
        />
      </Form.Root>

      {/* <FormInput
        label="Informações do Cartão"
        type="text"
        name="mastercard-card-number"
        rounded="rounded-t-md"
        placeholder="0000 0000 0000 0000"
        value={cardNumber}
        onChange={(event) => setCardNumber(event.target.value)}
      /> */}

      <div className="-mt-5 grid w-full grid-cols-2 items-center">
        <FormInput
          type="text"
          name="mastercard-card-validity"
          placeholder="MM / YY"
          classname="border-r-0"
          rounded="rounded-bl-md"
          value={cardValidity}
          onChange={(event) => setCardValidity(event.target.value)}
        />
        <FormInput
          type="text"
          name="mastercard-card-cvc"
          placeholder="CVC"
          rounded="rounded-br-md"
          value={cardCVC}
          onChange={(event) => setCardCVC(event.target.value)}
        />
      </div>

      <FormInput
        label="Nome do Portador"
        type="text"
        name="mastercard-card-owner"
        placeholder="Nome"
        value={cardOwner}
        onChange={(event) => setCardOwner(event.target.value)}
      />

      <br />

      <div className="flex justify-between text-xl font-semibold">
        <text>Total:</text>
        {/* CHANGE COLOR */}
        <span className="text-mesh-color-primary-800">
          R${paymentAdd.value?.toFixed(2).replace('.', ',')}
        </span>
      </div>

      {/* CHANGE COLOR */}
      <div className="flex flex-col gap-4 text-xl font-semibold">
        <Button
          type="button"
          onClick={handleFormSubmit}
          disable={!validateForm()}
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
