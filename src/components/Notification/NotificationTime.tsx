import React from 'react'

interface IProps {
  timestamp: number | string
}

export function NotificationTime({ timestamp }: IProps) {
  return (
    <span className="p-3 text-mesh-color-neutral-400">{timestamp} min</span>
  )
}
