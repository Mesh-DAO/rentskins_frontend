'use client'
import CircleLoading from '@/components/CircleLoading'
import { useState } from 'react'

export default function PaymentAddPix() {
  const [isLoading] = useState(false)

  return (
    <div>
      <CircleLoading label="Processando..." enabled={isLoading}>
        <h1>Payment Add Pix</h1>
      </CircleLoading>
    </div>
  )
}
