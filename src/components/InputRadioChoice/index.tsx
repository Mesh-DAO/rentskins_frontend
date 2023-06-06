import React from 'react'

interface Props {
  children: React.ReactNode
  checked?: boolean
}

export default function InputRadio({ children, checked }: Props) {
  return (
    <label className="relative">
      <input
        type="radio"
        className="peer absolute z-[-1]"
        name="choice-item"
        defaultChecked={checked}
      />
      <div
        className="flex h-9 cursor-pointer
        items-center border-green-500 pb-10 pt-3 text-3xl font-semibold text-white opacity-60
        transition-all hover:opacity-100 peer-checked:border-b-4 peer-checked:opacity-100"
      >
        {children}
      </div>
    </label>
  )
}
