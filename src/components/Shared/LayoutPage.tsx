'use client'
import React from 'react'
import Header from './Header'
import { Footer } from '../Footer'

type Props = {
  children: React.ReactNode
}

export function LayoutPage({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
