import { FormInput } from '@/components/Forms/Input'
import usePaymentStore from '@/stores/payment.store'
import { useState } from 'react'

export function PaymentWithdrawStepTransaction() {
  const { paymentWithdrawInfo, setPaymentWithdrawInfo } = usePaymentStore()
  const [bank, setBank] = useState('')
  const [agency, setAgency] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [keyType, setKeyType] = useState('')
  const [keyNumber, setKeyNumber] = useState('')

  const handleOnChange = () => {
    setPaymentWithdrawInfo({
      ...paymentWithdrawInfo,
      transference: {
        bank,
        agency,
        accountNumber,
        keyType,
        keyNumber,
      },
    })
  }

  return (
    <>
      <FormInput
        label="Banco"
        type="text"
        name="withdraw-bank"
        placeholder="Selecione o banco"
        value={bank}
        onChange={(event) => {
          setBank(event.target.value)
          handleOnChange()
        }}
      />

      <div className="grid w-full grid-cols-2 items-center">
        <FormInput
          label="Agência"
          type="text"
          name="withdraw-agency"
          className="border"
          rounded="rounded-tl-md rounded-bl-md"
          placeholder="Seu estado"
          value={agency}
          maxLength={4}
          onChange={(event) => {
            setAgency(event.target.value)
            handleOnChange()
          }}
        />

        <FormInput
          label="Número da conta"
          type="text"
          name="withdraw-account-number"
          className=""
          rounded="rounded-tr-md rounded-br-md"
          placeholder="0000000"
          value={accountNumber}
          onChange={(event) => {
            setAccountNumber(event.target.value)
            handleOnChange()
          }}
        />
      </div>

      <FormInput
        label="Tipo de Chave"
        type="text"
        name="withdraw-key-type"
        placeholder="Selecione o tipo"
        value={keyType}
        onChange={(event) => {
          setKeyType(event.target.value)
          handleOnChange()
        }}
      />

      <FormInput
        label="Chave Pix"
        type="text"
        name="withdaw-key-number"
        placeholder="Insira sua chave Pix"
        value={keyNumber}
        onChange={(event) => {
          setKeyNumber(event.target.value)
          handleOnChange()
        }}
      />
    </>
  )
}
