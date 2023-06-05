import create from 'zustand'

interface IPayment {
  value?: number
  method?: 'mastercard' | 'pix' | 'ticket'
}

interface IStates {
  payment: IPayment
  setPayment: (payment: IPayment) => void
}

const usePaymentStore = create<IStates>((set) => ({
  payment: { value: 5, method: 'mastercard' },
  setPayment: (payment: IPayment) => {
    set(() => ({ payment }))
  },
}))

export default usePaymentStore
