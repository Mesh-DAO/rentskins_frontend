import create from 'zustand'

type TypeMethod = 'mastercard' | 'pix' | 'ticket'

interface IPayment {
  value?: number
  method?: TypeMethod
}

interface IStates {
  paymentAdd: IPayment
  setPaymentAdd: (paymentAdd: IPayment) => void
  paymentRetrieve: { method: TypeMethod }
  setPaymentRetrieve: (paymentRetrieve: { method: TypeMethod }) => void
}

const usePaymentStore = create<IStates>((set) => ({
  paymentAdd: { value: 5, method: 'mastercard' },
  setPaymentAdd: (paymentAdd: IPayment) => {
    set(() => ({ paymentAdd }))
  },

  paymentRetrieve: { method: 'mastercard' },
  setPaymentRetrieve: (paymentRetrieve: { method: TypeMethod }) => {
    set(() => ({ paymentRetrieve }))
  },
}))

export default usePaymentStore
