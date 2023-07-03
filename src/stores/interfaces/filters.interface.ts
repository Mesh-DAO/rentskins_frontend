export interface ISelectedFilters {
  price: { min: number | null; max: number | null }
  category: string[] | null
  wear: string[] | null
  skins: any[]
}

export interface IStates {
  selectedFilters: ISelectedFilters
  setSelectedFilters: (selectedFilters: ISelectedFilters) => void
}
