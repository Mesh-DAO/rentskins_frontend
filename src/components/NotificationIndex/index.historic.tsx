import React from 'react'
import { StaticImageData } from 'next/image'
import NotificationCard from '../NotificationCard'
import useFilterStore from '@/stores/filters.store'

interface IData {
  content: string
  icon: string | StaticImageData
  timestamp: number
  new: boolean
}

interface IProps {
  data: IData[]
  loading: boolean
}

export default function NotificationsHistoric({ data, loading }: IProps) {
  const { notificationFilter } = useFilterStore()

  const timeFilter = () => {
    switch (notificationFilter) {
      case 'Tudo':
        return [0, 0]
      case 'Hoje':
        return [0, 86400]
      case '1-3 Dias':
        return [86400, 259200]
      case '1 Semana':
        return [259200, 604800]
      default:
        return [0, 0]
    }
  }

  const renderContent = data.map((item, index) => {
    if (
      (timeFilter()[0] === 0 && timeFilter()[1] === 0) ||
      (item.timestamp >= timeFilter()[0] && item.timestamp <= timeFilter()[1])
    ) {
      return (
        <NotificationCard.Root key={'notification-' + index} newCard={item.new}>
          <div className="flex items-center gap-4">
            <NotificationCard.Image image={item.icon} />
            <NotificationCard.Content>{item.content}</NotificationCard.Content>
          </div>
          <NotificationCard.Time timestamp={item.timestamp} />
        </NotificationCard.Root>
      )
    }
    return null
  })

  return (
    <div className="mb-12 mt-4 h-screen gap-4 overflow-y-scroll pr-4">
      <div className="flex flex-col gap-4" data-aos="fade-up">
        {data ? renderContent : <NotificationCard.Skeleton quantity={8} />}
      </div>
    </div>
  )
}
