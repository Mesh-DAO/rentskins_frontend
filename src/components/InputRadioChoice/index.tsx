'use client'
import useComponentStore from '@/stores/components.store'
import React, { useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
  checked?: boolean
  value: string
}

export default function InputRadio({ children, checked = true, value }: Props) {
  const { setProfileTabValue } = useComponentStore()
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [])

  return (
    <label className="relative">
      <input
        type="radio"
        className="peer absolute z-[-1]"
        name="choice-item"
        value={value}
        defaultChecked={isChecked}
        onChange={({ target: { value } }) => {
          setProfileTabValue(value as 'sales' | 'rented')
        }}
      />
      <div
        className="flex h-9 cursor-pointer
        items-center pb-10 pt-3 text-3xl font-semibold text-white opacity-60 transition-all
        hover:opacity-100 peer-checked:border-b-4 peer-checked:border-green-500 peer-checked:opacity-100"
      >
        {children}
      </div>
    </label>
  )
}
