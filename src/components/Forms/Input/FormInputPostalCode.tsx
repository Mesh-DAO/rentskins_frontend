import { InputHTMLAttributes } from 'react'
import { options } from '../options'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelSide?: 'up' | 'down'
  labelClassName?: string
  inputClassName?: string

  state: any
  setState: any
}

export function FormInputPostalCode({
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

    if (numbers.length > 8) {
      numbers = numbers.slice(0, 8)
    }

    const firstPart = numbers.slice(0, 5)
    const secondPart = numbers.slice(5, 8)

    let result = firstPart + secondPart

    if (firstPart.length === 5 && secondPart.length === 3) {
      result = firstPart + '-' + secondPart
      return result
    }

    return result
  }

  return (
    <label className={`${labelClassName} flex flex-col text-lg`}>
      {label && labelSide === 'up' && label}
      <input
        type="text"
        onChange={({ target }) => setState(formatInput(target.value))}
        value={state}
        className={`${inputClassName} ${options.input.className}`}
        {...rest}
      />
      {label && labelSide === 'down' && label}
    </label>
  )
}
