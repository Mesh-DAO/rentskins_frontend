import create from 'zustand'

interface IStates {
  paymentGeneralIndex: 0 | 1 | 2
  setPaymentGeneralIndex: (index: 0 | 1 | 2) => void
  paymentRetrieveIndex: 0 | 1
  setPaymentRetrieveIndex: (index: 0 | 1) => void
  profileTabValue: 'sales' | 'rented'
  setProfileTabValue: (value: 'sales' | 'rented') => void
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
}))

export default useComponentStore
