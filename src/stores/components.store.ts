import create from 'zustand'

interface IStates {
  paymentGeneralIndex: 0 | 1 | 2
  setPaymentGeneralIndex: (index: 0 | 1 | 2) => void
  paymentRetrieveIndex: 0 | 1
  setPaymentRetrieveIndex: (index: 0 | 1) => void
  paymentWithdrawIndex: 0 | 1 | 2 | 3
  setPaymentWithdrawIndex: (index: 0 | 1 | 2 | 3) => void
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
}))

export default useComponentStore
