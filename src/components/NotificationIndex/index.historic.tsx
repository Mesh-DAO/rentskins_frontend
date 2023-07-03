import React from 'react'
import { StaticImageData } from 'next/image'
import Notification from '../Notification'

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
    <Notification.Root key={'notification-' + index}>
      <div className="flex items-center gap-4">
        <Notification.Image image={item.icon} />
        <Notification.Content>{item.content}</Notification.Content>
      </div>

      <Notification.Time timestamp={item.timestamp} />
    </Notification.Root>
  ))

  return (
    <div className="mb-12 mt-4 h-screen gap-4 overflow-y-scroll pr-4">
      <div className="flex flex-col gap-4" data-aos="fade-up">
        {renderContent}
      </div>
    </div>
  )
}
