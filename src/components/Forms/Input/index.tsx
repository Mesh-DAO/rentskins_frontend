import React, { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  classname?: string
  rounded?: string
}

export function FormInput({
  label,
  type,
  onChange,
  value,
  classname,
  rounded = 'rounded-md',
  ...rest
}: IProps) {
  return (
    <label className="mb-2 flex flex-col text-lg">
      <span className="mt-2">{label}</span>
      {/* CHANGE COLOR */}
      <input
        type={type}
        onChange={onChange}
        value={value}
        autoComplete="off"
        {...rest}
        className={`${rounded} border-[2px] border-mesh-color-primary-1100/50 bg-mesh-color-others-eerie-black px-3 py-3 placeholder:text-white/70 ${classname}`}
      />
    </label>
  )
}
