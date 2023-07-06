import React, { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelSide?: 'up' | 'down'
  labelClassName?: string
  inputClassName?: string
  stateValue: any
}

export function FormInputMonthYear({
  label,
  labelSide = 'up',
  labelClassName,
  inputClassName,
  stateValue,
  ...rest
}: IProps) {
  const formatMonthYear = (value: string): string => {
    const numbers = value.replace(/\D/g, '')

    const month = numbers.slice(0, 2)
    const year = numbers.slice(2, 4)

    if (value.length > 2) {
      return `${month}/${year}`
    }
    return String(month)
  }

  return (
    <label className={`${labelClassName} flex flex-col text-lg`}>
      {label && labelSide === 'up' && label}
      <input
        type="text"
        onChange={({ target }) => formatMonthYear(target.value as any)}
        value={formatMonthYear(stateValue)}
        className={`${inputClassName} rounded-md border-[2px]
        border-mesh-color-primary-1100/50 bg-mesh-color-others-eerie-black px-3 py-3 placeholder:text-white/70`}
        {...rest}
      />
      {label && labelSide === 'down' && label}
    </label>
  )
}
