import Form from '@/components/Forms'
import { Title } from '@/components/Title'
import usePaymentStore from '@/stores/payment.store'
import { useState } from 'react'

export function PaymentWithdrawStepPersonal() {
  const { setPaymentWithdrawInfo } = usePaymentStore()
  const [identification, setIdentification] = useState('')
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [phone, setPhone] = useState('')

  const handleOnChange = () => {
    setPaymentWithdrawInfo({
      personal: {
        identification,
        name,
        birthday,
        phone,
      },
    })
  }

  return (
    <div>
      <text className="text-sm text-mesh-color-neutral-200">
        Primeira etapa
      </text>
      <Title size={'lg'} bold={600}>
        Informações Pessoais
      </Title>

      <Form.Root className="mt-6 flex flex-col gap-4">
        <Form.Input.CPF
          label="CPF"
          placeholder="000.000.000-00"
          state={identification}
          setState={setIdentification}
          required
        />

        <Form.Input.Text
          label="Nome"
          placeholder="Nome Completo"
          state={name}
          setState={setName}
          required
        />

        <Form.Input.Date
          label="Data de Nascimento"
          placeholder="dd/mm/aaaa"
          state={birthday}
          setState={setBirthday}
          required
        />

        <Form.Input.Phone
          label="Número de Celular"
          placeholder="(00) 00000-0000"
          state={phone}
          setState={setPhone}
          required
        />
      </Form.Root>
    </div>
  )
}
