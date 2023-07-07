import React, { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  showCurrencySign?: boolean
  currencySign?: string
  label?: string
  labelSide?: 'up' | 'down'
  labelClassName?: string
  limit?: number
  inputClassName?: string
  state: any
  setState: any
}

export function FormInputCurrency({
  showCurrencySign = true,
  currencySign = 'R$',
  label,
  labelSide = 'up',
  labelClassName,
  limit = 0,
  inputClassName,
  state,
  setState,
  ...rest
}: IProps) {
  const formatInput = (value: string): string => {
    let numbers = value.replace(/[^0-9.,]/g, '')

    numbers = numbers.replace('.', ',')

    if (limit > 0) {
      return numbers.slice(0, limit)
    }

    const sides = numbers.split(',')

    if (sides.length > 1) {
      const decimal = sides[1].slice(0, 2)
      return `${sides[0]},${decimal}`
    } else {
      return numbers
    }
  }

  return (
    <label className={`${labelClassName} flex flex-col text-lg text-white`}>
      {label && labelSide === 'up' && label}
      <div className="flex items-center">
        {showCurrencySign && (
          <text className="absolute ml-4 select-none font-semibold text-mesh-color-neutral-400">
            {currencySign}
          </text>
        )}
        <input
          type="text"
          step="any"
          onChange={({ target }) => setState(formatInput(target.value))}
          value={state}
          className={`${inputClassName} rounded-md border-[2px] border-mesh-color-primary-1100/50
        bg-mesh-color-others-eerie-black px-3 py-3 pl-12 placeholder:text-white/70`}
          {...rest}
        />
      </div>
      {label && labelSide === 'down' && label}
    </label>
  )
}
