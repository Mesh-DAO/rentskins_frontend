import React from 'react'
import { ColorRing } from 'react-loader-spinner'

interface IProps {
  children: React.ReactNode
}

export function Loading({ children }: IProps) {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <ColorRing
        width={100}
        height={100}
        colors={['#A6CF2B', '#A6CF2B', '#A6CF2B', '#A6CF2B', '#A6CF2B']}
      />
      <span className="text-2xl font-semibold text-white">{children}</span>
    </div>
  )
}
