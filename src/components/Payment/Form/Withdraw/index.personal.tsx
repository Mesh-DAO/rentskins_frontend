import { FormInput } from '@/components/Forms/Input'
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
    <>
      <FormInput
        label="CPF"
        type="text"
        name="withdraw-identification"
        placeholder="000.000.000-00"
        value={identification}
        onChange={(event) => {
          setIdentification(event.target.value)
          handleOnChange()
        }}
      />

      <FormInput
        label="Nome completo"
        type="text"
        name="withdraw-name"
        placeholder="Nome e sobrenome"
        value={name}
        onChange={(event) => {
          setName(event.target.value)
          handleOnChange()
        }}
      />

      <FormInput
        label="Data de nascimento"
        type="text"
        name="withdraw-birthday"
        placeholder="dd/mm/aaaa"
        value={birthday}
        onChange={(event) => {
          setBirthday(event.target.value)
          handleOnChange()
        }}
      />

      <FormInput
        label="Número de celular"
        type="text"
        name="withdaw-phone"
        placeholder="(00) 00000-0000"
        value={phone}
        onChange={(event) => {
          setPhone(event.target.value)
          handleOnChange()
        }}
      />
    </>
  )
}
