import { create } from 'zustand'
import { ISelectedFilters, IStates } from './interfaces/filters.interface'

const useFilterStore = create<IStates>((set) => ({
  selectedFilters: {
    wear: [],
    category: [],
    price: { min: null, max: null },
    skins: [],
  },
  setSelectedFilters: (selectedFilters: ISelectedFilters) => {
    set(() => ({ selectedFilters }))
  },
}))

export default useFilterStore
