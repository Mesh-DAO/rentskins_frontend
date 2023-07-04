export interface IStates {
  notificationFilter: string
  setNotificationFilter: (value: string) => void

  inventoryFilter: string[]
  setInventoryFilter: (value: string[]) => void

  inventoryMainFilter: string
  setInventoryMainFilter: (value: string) => void
}
