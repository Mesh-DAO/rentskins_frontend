import React from 'react';

interface Props {
  children: React.ReactNode;
  checked?: boolean;
}

export default function InputRadio({ children, checked }: Props) {
  return (
    <label className="relative">
      <input
        type="radio"
        className="z-[-1] absolute peer"
        name="choice-item"
        checked={checked}
      />
      <div
        className="peer-checked:border-b-4 opacity-60 peer-checked:opacity-100
        border-green-500 h-9 font-semibold text-3xl text-white hover:opacity-100 pb-10 pt-3
        flex items-center transition-all cursor-pointer"
      >
        {children}
      </div>
    </label>
  )
}