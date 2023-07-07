import React, { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  labelClassName?: string
  inputClassName?: string
  checked?: boolean
  state: any
  setState: any
}

export function FormInputCheckbox({
  label,
  labelSize = 'md',
  labelClassName,
  inputClassName,
  state,
  checked,
  setState,
  ...rest
}: IProps) {
  return (
    <label className={`flex items-center justify-between gap-2 text-lg`}>
      <input
        type="checkbox"
        onChange={({ target }) => setState(target.value)}
        value={state}
        className={`${inputClassName} peer rounded-md
        border-[2px] border-mesh-color-primary-1100/50 bg-mesh-color-others-eerie-black px-3 py-3 placeholder:text-white/70`}
        checked={checked}
        {...rest}
      />
      <div className="absolute -mt-[0.2rem] ml-[0.4rem] h-2 w-4 -rotate-45 border-b-2 border-l-2 bg-transparent opacity-0 peer-checked:opacity-100" />
      <text
        className={`text-${labelSize} ${labelClassName} select-none text-white`}
      >
        {label}
      </text>
    </label>
  )
}
