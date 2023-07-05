export interface IStates {
  notificationFilter: string
  setNotificationFilter: (value: string) => void

  inventoryFilter: string[]
  setInventoryFilter: (value: string[]) => void

  inventoryMainFilter:
    | 'biggestPrice'
    | 'lowestPrice'
    | 'biggestFloat'
    | undefined
  setInventoryMainFilter: (
    value: 'biggestPrice' | 'lowestPrice' | 'biggestFloat' | undefined,
  ) => void
}
