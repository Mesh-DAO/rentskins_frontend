export type PaymentMethodRefound = 'mastercard' | 'payPal' | 'bankTransfer'

export interface IPaymentRefound {
  value: number
  method: PaymentMethodRefound
}
