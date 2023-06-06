import create from 'zustand'
//
interface IStates {
  paymentIndex: 0 | 1
  setPaymentIndex: (index: 0 | 1) => void
}

const useComponentStore = create<IStates>((set) => ({
  paymentIndex: 0,
  setPaymentIndex: (index: 0 | 1) => {
    set(() => ({ paymentIndex: index }))
  },
}))

export default useComponentStore
