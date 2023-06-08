import create from 'zustand'

interface IStates {
  paymentGeneralIndex: 0 | 1 | 2
  setPaymentGeneralIndex: (index: 0 | 1 | 2) => void
  paymentRetrieveIndex: 0 | 1
  setPaymentRetrieveIndex: (index: 0 | 1) => void
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
}))

export default useComponentStore
