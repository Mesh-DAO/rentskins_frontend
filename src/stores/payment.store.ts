import create from 'zustand'
import {
  IPayment,
  IStates,
  IWithdrawInfo,
  TypeMethod,
} from './payment.interface'

const usePaymentStore = create<IStates>((set) => ({
  paymentAdd: { value: 5, method: 'mastercard' },
  setPaymentAdd: (paymentAdd: IPayment) => {
    set(() => ({ paymentAdd }))
  },

  paymentRetrieve: { method: 'mastercard' },
  setPaymentRetrieve: (paymentRetrieve: { method: TypeMethod }) => {
    set(() => ({ paymentRetrieve }))
  },

  paymentWithdrawInfo: {},
  setPaymentWithdrawInfo: (paymentWithdrawInfo: IWithdrawInfo) => {
    set(() => ({ paymentWithdrawInfo }))
  },
}))

export default usePaymentStore
