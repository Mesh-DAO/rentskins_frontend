import create from 'zustand'
import { IPaymentRefound, PaymentMethodRefound } from './Interfaces'

interface IStates {
  paymentGeneralIndex: 0 | 1 | 2
  setPaymentGeneralIndex: (index: 0 | 1 | 2) => void
  paymentRetrieveIndex: 0 | 1
  setPaymentRetrieveIndex: (index: 0 | 1) => void
  profileTabValue: 'sales' | 'rented'
  setProfileTabValue: (value: 'sales' | 'rented') => void
  refoundGeneralIndex: 0 | 1 | 2 | 3
  setRefoundGeneralIndex: (index: 0 | 1 | 2 | 3) => void
  paymentRefound: { value: number; method: PaymentMethodRefound }
  setPaymentRefound: (paymentRefound: IPaymentRefound) => void
}

const useComponentStore = create<IStates>((set) => ({
  paymentGeneralIndex: 0,
  setPaymentGeneralIndex: (index: 0 | 1 | 2) => {
    set(() => ({ paymentGeneralIndex: index }))
  },

  paymentRetrieveIndex: 0,
  setPaymentRetrieveIndex: (index: 0 | 1) => {
    set(() => ({ paymentRetrieveIndex: index }))
  },

  profileTabValue: 'sales',
  setProfileTabValue: (value: 'sales' | 'rented') => {
    set(() => ({ profileTabValue: value }))
  },

  refoundGeneralIndex: 0,
  setRefoundGeneralIndex: (index: 0 | 1 | 2 | 3) => {
    set(() => ({ refoundGeneralIndex: index }))
  },

  paymentRefound: { value: 5, method: 'mastercard' },
  setPaymentRefound: (paymentRefound: IPaymentRefound) => {
    set(() => ({ paymentRefound }))
  },
}))

export default useComponentStore
