import React, { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  hasLabel: boolean
  label: string
  labelSide?: 'up' | 'down'
  labelClassName?: string
  inputClassName?: string
}

export function FormInputText({
  hasLabel = true,
  label,
  labelSide = 'up',
  labelClassName,
  inputClassName,
  ...rest
}: IProps) {
  return (
    <label className={`${labelClassName} flex flex-col text-lg`}>
      {hasLabel && labelSide === 'up' && label}
      <input
        type="text"
        className={`${inputClassName} rounded-md border-[2px]
        border-mesh-color-primary-1100/50 bg-mesh-color-others-eerie-black px-3 py-3 placeholder:text-white/70`}
        {...rest}
      />
      {hasLabel && labelSide === 'down' && label}
    </label>
  )
}
