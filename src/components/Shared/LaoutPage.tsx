'use client'
import Header from './Header'
import { Footer } from '../Footer'

type Props = {
  // eslint-disable-next-line no-undef
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
