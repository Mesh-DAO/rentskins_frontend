'use client'
import { useState } from 'react'
import { LayoutPage } from '@/components/Shared'
import { Button } from '@/components/Button'
import { FormInput } from '@/components/Forms/Input'
import { IconLeftArrow } from '@/components/Icons/iconLeftArrow'
import usePaymentStore from '@/stores/payment.store'
import { Title } from '@/components/Title'
import { useRouter } from 'next/navigation'
import CircleLoading from '@/components/CircleLoading'

export default function PaymentAddMastercardPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardValidity, setCardValidity] = useState('')
  const [cardCVC, setCardCVC] = useState('')
  const [cardOwner, setCardOwner] = useState('')

  const { paymentAdd } = usePaymentStore()

  const handleOnCancel = () => {
    router.push('/')
  }

  const validateForm = () => {
    return (
      email.length > 0 &&
      cardNumber.length > 0 &&
      cardValidity.length > 0 &&
      cardCVC.length > 0 &&
      cardOwner.length > 0
    )
  }

  const handleOnSubmit = (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    router.push('/pagamento/recarregar/sucesso')
  }

  return (
    <LayoutPage>
      {/* CHANGE COLOR */}
      <main className="flex h-screen flex-col items-center justify-start bg-mesh-color-others-black text-white">
        <CircleLoading
          label="Processando..."
          enabled={isLoading}
          className="flex h-2/3 items-center justify-center"
        >
          <div className="mt-8 flex w-fit flex-col">
            <div className="mb-8 flex w-full items-center justify-start">
              <Button className="border-none" onClick={() => handleOnCancel()}>
                <IconLeftArrow />
              </Button>
              {/* CHANGE COLOR */}
              <span className="ml-2 text-mesh-color-neutral-200">
                <text>Saldo </text>
                <text>• </text>
                {/* CHANGE COLOR */}
                <text className="text-mesh-color-accent-900">
                  Pagamento - Mastercard
                </text>
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-center">
              <Title size="2xl"> Recarregar saldo com Cartão </Title>
              <form onSubmit={() => handleOnSubmit} className="mt-4 w-full">
                <FormInput
                  label="Email"
                  type="email"
                  name="mastercard-email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <FormInput
                  label="Informações do Cartão"
                  type="text"
                  name="mastercard-card-number"
                  rounded="rounded-t-md"
                  placeholder="0000 0000 0000 0000"
                  value={cardNumber}
                  onChange={(event) => setCardNumber(event.target.value)}
                />

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
                    type="submit"
                    onClick={(event) => handleOnSubmit(event)}
                    disable={!validateForm()}
                    className="h-12 w-full"
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
              </form>
            </div>
          </div>
        </CircleLoading>
      </main>
    </LayoutPage>
  )
}
