import React, { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelSide?: 'up' | 'down'
  labelClassName?: string
  inputClassName?: string

  state: any
  setState: any
}

export function FormInputPhone({
  label,
  labelSide = 'up',
  labelClassName,
  inputClassName,
  state,
  setState,
  ...rest
}: IProps) {
  const formatInput = (value: string): string => {
    let numbers = value.replace(/\D/g, '')

    if (numbers.length > 11) {
      numbers = numbers.slice(0, 11)
    }

    if (numbers.length > 2) {
      const ddd = numbers.slice(0, 2)
      const primeiraParte = numbers.slice(2, 7)
      const segundaParte = numbers.slice(7, 11)

      numbers = `(${ddd}) ${primeiraParte}${
        primeiraParte.length === 5 && segundaParte.length === 4 ? '-' : ''
      }${segundaParte}`
    }

    return numbers
  }

  return (
    <label className={`${labelClassName} flex flex-col text-lg`}>
      {label && labelSide === 'up' && label}
      <input
        type="text"
        onChange={({ target }) => setState(formatInput(target.value))}
        value={state}
        // onChange={({ target }) => formatInput(target.value as any)}
        // value={formatInput(stateValue)}
        className={`${inputClassName} rounded-md border-[2px]
        border-mesh-color-primary-1100/50 bg-mesh-color-others-eerie-black px-3 py-3 placeholder:text-white/70`}
        {...rest}
      />
      {label && labelSide === 'down' && label}
    </label>
  )
}
