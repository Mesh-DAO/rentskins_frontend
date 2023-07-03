import React from 'react'
import { StaticImageData } from 'next/image'
import NotificationCard from '../NotificationCard'

interface IData {
  content: string
  icon: string | StaticImageData
  timestamp: number
}

interface IProps {
  data: IData[]
  loading: boolean
}

export default function NotificationsHistoric({ data, loading }: IProps) {
  const renderContent = data.map((item, index) => (
    <NotificationCard.Root key={'notification-' + index}>
      <div className="flex items-center gap-4">
        <NotificationCard.Image image={item.icon} />
        <NotificationCard.Content>{item.content}</NotificationCard.Content>
      </div>

      <NotificationCard.Time timestamp={item.timestamp} />
    </NotificationCard.Root>
  ))

  return (
    <div className="mb-12 mt-4 h-screen gap-4 overflow-y-scroll pr-4">
      <div className="flex flex-col gap-4" data-aos="fade-up">
        {renderContent}
      </div>
    </div>
  )
}
