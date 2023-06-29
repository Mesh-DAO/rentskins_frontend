'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import './globals.css'
import 'aos/dist/aos.css'
import { Inter } from 'next/font/google'
import { queryClient } from '@/services/queryClient'
import { LayoutPage } from '@/components/Shared'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <LayoutPage>{children}</LayoutPage>
        </body>
      </html>
    </QueryClientProvider>
  )
}
