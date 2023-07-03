import React from 'react'

interface IProps {
  children: React.ReactNode
}

export function NotificationRoot({ children }: IProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-mesh-color-neutral-800 px-3 py-3 ease-in-out">
      {children}
    </div>
  )
}
