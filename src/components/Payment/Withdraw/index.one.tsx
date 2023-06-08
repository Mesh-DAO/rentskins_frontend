import { FormInput } from '@/components/Forms/Input'
import usePaymentStore from '@/stores/payment.store'

export function PaymentWithdrawStepOne() {
  const { paymentWithdrawInfo, setPaymentWithdrawInfo } = usePaymentStore()
  return (
    <>
      <FormInput
        label="CPF"
        type="text"
        name="withdraw-identification"
        placeholder="000.000.000-00"
        value={identification}
        onChange={(event) => setIdentification(event.target.value)}
      />

      <FormInput
        label="Nome completo"
        type="text"
        name="withdraw-name"
        placeholder="Nome e sobrenome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <FormInput
        label="Data de nascimento"
        type="text"
        name="withdraw-birthday"
        placeholder="dd/mm/aaaa"
        value={birthday}
        onChange={(event) => setBirthday(event.target.value)}
      />

      <FormInput
        label="Número de celular"
        type="text"
        name="withdaw-phone"
        placeholder="CVC"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
    </>
  )
}
