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

export default function PaymentAddBoletoPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const [name, setName] = useState('')
  const [identification, setIdentification] = useState('')
  const [email, setEmail] = useState('')

  const { paymentAdd } = usePaymentStore()

  const handleOnCancel = () => {
    router.push('/')
  }

  const validateForm = () => {
    return name.length > 0 && identification.length > 0 && email.length > 0
  }

  const handleOnSubmit = (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    router.push('/pagamento/recarregar/sucesso')
  }

  return (
    <LayoutPage>
      {/* CHANGE COLOR */}
      <main className="flex h-fit flex-col items-center justify-start bg-[#151714] pb-64 text-white">
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
              <span className="ml-2 text-[#A7B0A0]">
                <text>Saldo </text>
                <text>• </text>
                {/* CHANGE COLOR */}
                <text className="text-[#49E671]">Pagamento - Boleto Flash</text>
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-center">
              <Title size="2xl"> Recarregar saldo com Boleto </Title>
              <form onSubmit={() => handleOnSubmit} className="mt-4 w-[546px]">
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
                  {/* CHANGE COLOR */}
                  <span className="text-[#C5EA56]">
                    R${paymentAdd.value?.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {/* CHANGE COLOR */}
                <div className="flex flex-col gap-4 text-xl font-semibold">
                  <Button
                    type="submit"
                    onClick={(event) => handleOnSubmit(event)}
                    disable={!validateForm()}
                    className="w-full border-[#A6CF2B] bg-[#A6CF2B] py-2 text-black disabled:border-[#3C403C] disabled:bg-[#3C403C] disabled:text-[#979797]"
                  >
                    Pagar
                  </Button>
                  <Button
                    className="w-full border-2 py-2"
                    onClick={() => handleOnCancel()}
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
