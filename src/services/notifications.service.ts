import { Api } from '@/providers'
import { INotification } from './interfaces/notification.interface'

export default class NotificationServices {
  public static async getAllHistorics() {
    return Api.get<INotification>('/notifications')
  }
}
