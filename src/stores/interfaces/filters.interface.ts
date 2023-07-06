import { ISkins } from '@/interfaces/ISkins'

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
  allSkinsFiltred: ISkins[]
  typeFilter: TTypeSort
  checkedInputCheckbox: IInputCheck[]
  setCheckedInputCheckbox: (inputCheckbox: IInputCheck | null) => void
  setTypeFilter: (typeFilter: TTypeSort) => void
  setAllSkinsFiltred: (skins: ISkins[], typeSort: TTypeSort) => void
  setSelectedFilters: (selectedFilters: ISelectedFilters) => void
  cleanSelectedFilters: (filterCleaning: ISelectedFilters) => void
}
