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

export default function PaymentAddPixPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [name, setName] = useState('')
  const [identification, setIdentification] = useState('')

  const { paymentAdd } = usePaymentStore()

  const handleOnCancel = () => {
    router.push('/')
  }

  const validateForm = () => {
    return name.length > 0 && identification.length > 0
  }

  const handleOnSubmit = (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    router.push('/pagamento/recarregar/pix/code')
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
              <Button
                className="border-transparent"
                onClick={() => handleOnCancel()}
              >
                <IconLeftArrow />
              </Button>
              {/* CHANGE COLOR */}
              <span className="ml-2 text-mesh-color-neutral-200">
                <text>Saldo </text>
                <text>• </text>
                {/* CHANGE COLOR */}
                <text className="text-mesh-color-accent-900">
                  Pagamento - PIX
                </text>
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-center">
              <Title size="2xl"> Recarregar saldo com Pix </Title>
              <form onSubmit={() => handleOnSubmit} className="mt-4 w-[546px]">
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
                    onClick={(event) => handleOnSubmit(event)}
                    disable={!validateForm()}
                    className="h-12 w-full border-transparent"
                    color="green"
                  >
                    Continuar
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
