import create from 'zustand'
import { IStates } from './interfaces/filters.store'

const useFilterStore = create<IStates>((set) => ({
  notificationFilter: 'Tudo',
  setNotificationFilter: (notificationFilter: string) => {
    set(() => ({ notificationFilter }))
  },
}))

export default useFilterStore
