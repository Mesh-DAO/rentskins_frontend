import React from 'react'
import Image, { StaticImageData } from 'next/image'

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
    <div
      key={index}
      className="flex items-center justify-between rounded-lg bg-mesh-color-neutral-800 px-3 py-3 ease-in-out"
    >
      <div className="flex items-center gap-4">
        <Image
          className="w-20 rounded-lg bg-mesh-color-neutral-1000 p-2"
          src={item.icon}
          alt={String(item.icon)}
        />
        <span className="text-mesh-color-neutral-200">{item.content}</span>
      </div>
      <span className="p-3 text-mesh-color-neutral-400">
        {item.timestamp} min
      </span>
    </div>
  ))

  return (
    <div className="mb-12 mt-4 h-screen gap-4 overflow-y-scroll pr-4">
      <div className="flex flex-col gap-4" data-aos="fade-up">
        {renderContent}
      </div>
    </div>
  )
}
