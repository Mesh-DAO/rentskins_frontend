import create from 'zustand'
import { PaymentMethodRefound, IPaymentRefound } from './Interfaces'

interface IStates {
  paymentGeneralIndex: 0 | 1 | 2
  setPaymentGeneralIndex: (index: 0 | 1 | 2) => void
  paymentRetrieveIndex: 0 | 1
  setPaymentRetrieveIndex: (index: 0 | 1) => void
  paymentWithdrawIndex: 0 | 1 | 2 | 3
  setPaymentWithdrawIndex: (index: 0 | 1 | 2 | 3) => void
  settingsIndex: 0 | 1 | 2
  setSettingsIndex: (index: 0 | 1 | 2) => void
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

  paymentWithdrawIndex: 0,
  setPaymentWithdrawIndex: (index: 0 | 1 | 2 | 3) => {
    set(() => ({ paymentWithdrawIndex: index }))
  },

  settingsIndex: 0,
  setSettingsIndex: (index: 0 | 1 | 2) => {
    set(() => ({ settingsIndex: index }))
  },

  refoundGeneralIndex: 0,
  setRefoundGeneralIndex: (index: 0 | 1 | 2 | 3) => {
    set(() => ({ refoundGeneralIndex: index }))
  },

  profileTabValue: 'sales',
  setProfileTabValue: (value: 'sales' | 'rented') => {
    set(() => ({ profileTabValue: value }))
  },

  paymentRefound: { value: 5, method: 'mastercard' },
  setPaymentRefound: (paymentRefound: IPaymentRefound) => {
    set(() => ({ paymentRefound }))
  },
}))

export default useComponentStore
