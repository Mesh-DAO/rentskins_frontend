'use client'
import Header from './Header'
import { Footer } from '../Footer'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export function LayoutPage({ children }: Props) {
  return (
    <div className="min-h-screen bg-mesh-color-others-black">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
