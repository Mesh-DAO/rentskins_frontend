'use client'
import Header from './Header'
import { Footer } from '../Footer'

type Props = {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}

export function LayoutPage({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
