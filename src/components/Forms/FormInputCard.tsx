import React, { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelSide?: 'up' | 'down'
  labelClassName?: string
  inputClassName?: string
  stateValue: any
}

export function FormInputCard({
  label,
  labelSide = 'up',
  labelClassName,
  inputClassName,
  stateValue,
  ...rest
}: IProps) {
  const formatCardNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '')
    const limitCardNumber = numbers.slice(0, 16)
    const result = limitCardNumber.replace(/(\d{4})(?=\d)/g, '$1 ')
    return result
  }

  return (
    <label className={`${labelClassName} flex flex-col text-lg`}>
      {label && labelSide === 'up' && label}
      <input
        type="text"
        onChange={({ target }) => formatCardNumber(target.value as any)}
        value={formatCardNumber(stateValue)}
        className={`${inputClassName} rounded-md border-[2px]
        border-mesh-color-primary-1100/50 bg-mesh-color-others-eerie-black px-3 py-3 placeholder:text-white/70`}
        {...rest}
      />
      {label && labelSide === 'down' && label}
    </label>
  )
}
