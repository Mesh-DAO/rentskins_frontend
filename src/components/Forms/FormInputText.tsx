import React, { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelSide?: 'up' | 'down'
  labelClassName?: string
  inputClassName?: string
  stateValue: any
}

export function FormInputText({
  label,
  labelSide = 'up',
  labelClassName,
  inputClassName,
  stateValue,
  ...rest
}: IProps) {
  const formatInput = (value: string): string => {
    return value
  }

  return (
    <label className={`${labelClassName} flex flex-col text-lg`}>
      {label && labelSide === 'up' && label}
      <input
        type="text"
        value={formatInput(stateValue)}
        onChange={({ target }) => formatInput(target.value as any)}
        className={`${inputClassName} rounded-md border-[2px]
        border-mesh-color-primary-1100/50 bg-mesh-color-others-eerie-black px-3 py-3 placeholder:text-white/70`}
        {...rest}
      />
      {label && labelSide === 'down' && label}
    </label>
  )
}
