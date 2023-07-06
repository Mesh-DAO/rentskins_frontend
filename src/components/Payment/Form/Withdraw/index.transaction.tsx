import usePaymentStore from '@/stores/payment.store'
import { MouseEventHandler, useState } from 'react'
import Form from '@/components/Forms'
import { Title } from '@/components/Title'

interface IProps {
  handleFormSubmit: MouseEventHandler
  handleFormCancel: MouseEventHandler
}
export function PaymentWithdrawStepTransaction({
  handleFormSubmit,
  handleFormCancel,
}: IProps) {
  // const { paymentWithdrawInfo, setPaymentWithdrawInfo } = usePaymentStore()
  const [bank, setBank] = useState('Santander')
  const [agency, setAgency] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [keyType, setKeyType] = useState('')
  const [keyNumber, setKeyNumber] = useState('')

  // const handleOnChange = () => {
  //   setPaymentWithdrawInfo({
  //     ...paymentWithdrawInfo,
  //     transference: {
  //       bank,
  //       agency,
  //       accountNumber,
  //       keyType,
  //       keyNumber,
  //     },
  //   })
  // }

  return (
    <div>
      <text className="text-sm text-mesh-color-neutral-200">
        Terceira Etapa
      </text>
      <Title size={'lg'} bold={600}>
        Informações Bancárias
      </Title>
      <text className="text-sm">
        Para receber seus ganhos da plataforma, por favor, preencha as
        informações bancárias abaixo. A conta bancária deve estar registrada em
        seu CPF.
      </text>

      <Form.Root className="mt-6 flex flex-col gap-4">
        <Form.Dropdown
          label="Banco"
          options={[
            {
              label: 'Santander',
              value: 'Santander',
            },
            { label: 'Banco do Brasil', value: 'Banco do Brasil' },
            { label: 'Caixa', value: 'Caixa' },
            { label: 'Itaú', value: 'Itaú' },
            { label: 'Nubank', value: 'Nubank' },
          ]}
          state={bank}
          setState={setBank}
        />

        <div className="grid grid-cols-2 gap-4">
          <Form.Input.Number
            label="Agência"
            limit={4}
            placeholder="0000"
            state={agency}
            setState={setAgency}
            required
          />
          <Form.Input.Number
            label="Número da Conta"
            limit={7}
            placeholder="0000000"
            state={accountNumber}
            setState={setAccountNumber}
            required
          />
        </div>
        {/* <Form.Input.Text
          label="Cidade"
          placeholder="Ex: São Paulo, Salvador, etc..."
          state={city}
          setState={setCity}
          required
        />
        <Form.Input.Text
          label="Estado"
          placeholder="Ex: Rio de Janeiro, Minas Gerais, etc..."
          state={state}
          setState={setState}
          required
        />
        <Form.Input.PostalCode
          label="CEP"
          placeholder="00000-000"
          state={postalCode}
          setState={setPostalCode}
          required
        />
        <Form.Input.Text
          label="Bairro"
          placeholder="Ex: Liberdade, Jardins, etc..."
          state={neighborhood}
          setState={setNeighborhood}
          required
        />
        <Form.Input.Number
          limit={3}
          label="Número de Complemento"
          placeholder="000"
          state={complementNumber}
          setState={setComplementNumber}
          required
        />
        <Form.Input.Text
          label="Endereço"
          placeholder=""
          state={address}
          setState={setAddress}
          required
        /> */}

        <div className="mt-4">
          <div className="flex justify-between text-xl font-semibold">
            <text>Levantamento:</text>

            <span className="text-mesh-color-primary-800">
              {Number(0).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex flex-col gap-4 text-xl font-semibold">
            <Form.Button
              buttonStyle="full"
              type="submit"
              className="h-12 w-full border-transparent"
              onClick={handleFormSubmit}
              // disabled={validateForm()}
            >
              Continuar
            </Form.Button>
            <Form.Button
              buttonStyle="opaque"
              className="h-12 w-full border-neutral-600"
              onClick={handleFormCancel}
            >
              Cancelar
            </Form.Button>
          </div>
        </div>
      </Form.Root>
    </div>
  )
}
