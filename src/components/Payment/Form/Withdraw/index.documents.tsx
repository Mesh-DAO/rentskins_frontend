import { FormInput } from '@/components/Forms/Input'
import usePaymentStore from '@/stores/payment.store'
import { useState } from 'react'

export function PaymentWithdrawStepDocument() {
  const { paymentWithdrawInfo, setPaymentWithdrawInfo } = usePaymentStore()
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [cep, setCEP] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [complementNumber, setComplementNumber] = useState('')
  const [address, setAddress] = useState('')

  const handleOnChange = () => {
    setPaymentWithdrawInfo({
      ...paymentWithdrawInfo,
      location: {
        city,
        state,
        cep,
        neighborhood,
        complementNumber,
        address,
      },
    })
  }

  return (
    <>
      <FormInput
        label="Cidade"
        type="text"
        name="withdraw-city"
        placeholder="Sua cidade"
        value={city}
        onChange={(event) => {
          setCity(event.target.value)
          handleOnChange()
        }}
      />

      <FormInput
        label="Estado"
        type="text"
        name="withdraw-state"
        placeholder="Seu estado"
        value={state}
        onChange={(event) => {
          setState(event.target.value)
          handleOnChange()
        }}
      />

      <FormInput
        label="CEP"
        type="text"
        name="withdraw-cep"
        placeholder="00000-000"
        value={cep}
        onChange={(event) => {
          setCEP(event.target.value)
          handleOnChange()
        }}
      />

      <FormInput
        label="Bairro"
        type="text"
        name="withdaw-neighborhood"
        placeholder="Seu bairro"
        value={neighborhood}
        onChange={(event) => {
          setNeighborhood(event.target.value)
          handleOnChange()
        }}
      />

      <FormInput
        label="Número de complemento"
        type="text"
        name="withdaw-complement-number"
        placeholder="000"
        value={neighborhood}
        onChange={(event) => {
          setComplementNumber(event.target.value)
          handleOnChange()
        }}
      />

      <FormInput
        label="Endereço"
        type="text"
        name="withdaw-address"
        placeholder="Seu endereço"
        value={address}
        onChange={(event) => {
          setAddress(event.target.value)
          handleOnChange()
        }}
      />
    </>
  )
}
