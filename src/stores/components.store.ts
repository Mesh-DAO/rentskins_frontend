/* eslint-disable camelcase */
import create from 'zustand'
import {
  PaymentMethodRefound,
  IPaymentRefound,
} from './interfaces/components.interface'
import { ISkins } from '@/interfaces/ISkins'

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
  pageSelectorIndex: number
  setPageSelectorIndex: (index: number) => void
  filterType: 0 | 1 | 2
  setFilterType: (type: 0 | 1 | 2) => void
  skinsFiltredByPrice: ISkins[]
  setSkinsFiltredByPrice: (minPrice: number, maxPrice: number) => void
  allSkinsCategory: ISkins[] | undefined
  setAllSkinsCategory: (skins: ISkins[]) => void
  setCleanFilter: (selectedArray: string) => void
}

const useComponentStore = create<IStates>((set) => ({
  paymentGeneralIndex: 0,
  setPaymentGeneralIndex: (index) => {
    set(() => ({ paymentGeneralIndex: index }))
  },

  paymentRetrieveIndex: 0,
  setPaymentRetrieveIndex: (index) => {
    set(() => ({ paymentRetrieveIndex: index }))
  },

  paymentWithdrawIndex: 0,
  setPaymentWithdrawIndex: (index) => {
    set(() => ({ paymentWithdrawIndex: index }))
  },

  settingsIndex: 0,
  setSettingsIndex: (index) => {
    set(() => ({ settingsIndex: index }))
  },

  refoundGeneralIndex: 0,
  setRefoundGeneralIndex: (index) => {
    set(() => ({ refoundGeneralIndex: index }))
  },

  profileTabValue: 'sales',
  setProfileTabValue: (value) => {
    set(() => ({ profileTabValue: value }))
  },

  paymentRefound: { value: 5, method: 'mastercard' },
  setPaymentRefound: (paymentRefound) => {
    set(() => ({ paymentRefound }))
  },

  pageSelectorIndex: 1,
  setPageSelectorIndex: (index) => {
    set(() => ({ pageSelectorIndex: index }))
  },

  filterType: 0,
  setFilterType: (type: 0 | 1 | 2) => {
    set(() => ({ filterType: type }))
  },

  skinsFiltredByPrice: [],
  setSkinsFiltredByPrice: (minPrice: number, maxPrice: number) => {
    set(({ allSkinsCategory }) => {
      return {
        skinsFiltredByPrice: allSkinsCategory?.filter(({ skin_price }) => {
          console.log(
            +skin_price.replace(',', '.') >= minPrice / 1 &&
              +skin_price <= maxPrice / 1,
          )
          console.log(minPrice)
          console.log(maxPrice)
          return (
            +skin_price.replace(',', '.') >= minPrice && +skin_price <= maxPrice
          )
        }),
      }
    })
  },

  setCleanFilter: (selectedArray: string) => {
    set(() => ({ [selectedArray]: [] }))
  },

  allSkinsCategory: [],
  setAllSkinsCategory: (skins: ISkins[]) => {
    set(() => ({ allSkinsCategory: skins }))
  },
}))

export default useComponentStore
