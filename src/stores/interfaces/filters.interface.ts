// eslint-disable-next-line prettier/prettier
import { ISkins } from '@/interfaces/ISkins';

export interface ISelectedFilters {
  prices: { min: number | null; max: number | null }
  categories: string[] | null
  wears: string[] | null
}

export type TTypeSort =
  | 'biggestPrice'
  | 'lowestPrice'
  | 'biggestFloat'
  | undefined

export interface IInputCheck {
  value: string
  checked: boolean
}

export interface IStates {
  selectedFilters: ISelectedFilters
  setSelectedFilters: (selectedFilters: ISelectedFilters) => void
  allSkinsFiltred: ISkins[]
  setAllSkinsFiltred: (skins: ISkins[], typeSort: TTypeSort) => void
  typeFilter: TTypeSort
  setTypeFilter: (typeFilter: TTypeSort) => void
  checkedInputCheckbox: IInputCheck[]
  setCheckedInputCheckbox: (inputCheckbox: IInputCheck | null) => void
  notificationFilter: string
  inventoryFilter: string[]
  inventoryMainFilter:
    | 'biggestPrice'
    | 'lowestPrice'
    | 'biggestFloat'
    | undefined
  sales: boolean
  rented: boolean
  setSales: (checked: boolean) => void
  setRented: (checked: boolean) => void
  setInventoryMainFilter: (
    value: 'biggestPrice' | 'lowestPrice' | 'biggestFloat' | undefined,
  ) => void
  setNotificationFilter: (value: string) => void
  inventoryTypeFilter: string[]
  setInventoryTypeFilter: (value: string[]) => void
  cleanSelectedFilters: (filterCleaning: ISelectedFilters) => void
}
