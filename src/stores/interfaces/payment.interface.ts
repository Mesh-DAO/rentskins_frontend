export type TypeMethod = 'mastercard' | 'pix' | 'ticket'

export interface IPayment {
  value?: number
  method?: TypeMethod
}

export interface IPersonal {
  identification?: string
  name?: string
  birthday?: string
  phone?: string
}

export interface ILocation {
  city: string | undefined
  state: string | undefined
  postalCode: string | undefined
  neighborhood: string | undefined
  complementNumber: string | undefined
  address: string | undefined
}

export interface ITransference {
  bank: string | undefined
  agency: string | undefined
  accountNumber: string | undefined
  keyType: string | undefined
  keyValue: string | undefined
}

export interface IWithdrawInfo {
  personal?: IPersonal
  location?: ILocation
  transference?: ITransference
}

export interface IStates {
  paymentAdd: IPayment
  setPaymentAdd: (paymentAdd: IPayment) => void
  paymentRetrieve: { method: TypeMethod }
  setPaymentRetrieve: (paymentRetrieve: { method: TypeMethod }) => void
  paymentWithdrawInfo: IWithdrawInfo
  setPaymentWithdrawInfo: (paymentWithdrawInfo: IWithdrawInfo) => void
}
