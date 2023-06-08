import useComponentStore from '@/stores/components.store'
import React from 'react'

interface Props {
  icon: React.ReactNode
  IsPayBank?: boolean
  id: string
  method: 'mastercard' | 'payPal' | 'bankTransfer'
  value: number
}

export default function Method({ icon, IsPayBank, id, value, method }: Props) {
  const { setPaymentRefound } = useComponentStore()

  return (
    <div className="flex">
      <input
        type="radio"
        id={`payment-index-${id}`}
        name="payment-index"
        className="peer appearance-none"
        value={method}
        onClick={() => setPaymentRefound({ method, value })}
        defaultChecked
      />
      <label
        htmlFor={`payment-index-${id}`}
        className="flex w-full select-none items-center gap-4 rounded-md border-2 
          border-transparent bg-[#3C403C] px-4 py-3 text-lg font-semibold text-[#A7B0A0] 
          shadow-inner transition-all duration-500 hover:cursor-pointer peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
      >
        {icon}
        {IsPayBank && (
          <p className="w-12 text-[10px] font-medium leading-3  text-white">
            Via PayBank
          </p>
        )}
      </label>
    </div>
  )
}
