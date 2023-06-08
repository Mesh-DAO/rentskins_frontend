export type TypeMethod = 'mastercard' | 'pix' | 'ticket'

export interface IPayment {
  value?: number
  method?: TypeMethod
}

export interface IWithdrawInfo {
  identification: string | undefined
  name: string | undefined
  birthday: string | undefined
  phone: string | undefined
  city: string | undefined
  state: string | undefined
  cep: string | undefined
  neighborhood: string | undefined
  complementNumber: string | undefined
  address: string | undefined
  bank: string | undefined
  agency: string | undefined
  accountNumber: string | undefined
  keyType: string | undefined
  keyNumber: string | undefined
}

export interface IStates {
  paymentAdd: IPayment
  setPaymentAdd: (paymentAdd: IPayment) => void
  paymentRetrieve: { method: TypeMethod }
  setPaymentRetrieve: (paymentRetrieve: { method: TypeMethod }) => void
  paymentWithdrawInfo: IWithdrawInfo | {}
  setPaymentWithdrawInfo: (paymentWithdrawInfo: IWithdrawInfo) => void
}
