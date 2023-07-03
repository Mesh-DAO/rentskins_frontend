import React from 'react'

interface IProps {
  timestamp: number
}

export function NotificationTime({ timestamp }: IProps) {
  const handleTimestamp = () => {
    if (timestamp < 10) {
      return 'Há alguns segundos'
    } else if (timestamp < 60) {
      return `Há ${timestamp} segundos`
    } else if (timestamp < 3600) {
      const elapsedTime = Math.floor(timestamp / 60)
      return `Há ${elapsedTime} minutos`
    } else {
      const elapsedTime = Math.floor(timestamp / 3600)
      return `Há ${elapsedTime} horas`
    }
  }
  return (
    <span className="p-3 text-mesh-color-neutral-400">{handleTimestamp()}</span>
  )
}
