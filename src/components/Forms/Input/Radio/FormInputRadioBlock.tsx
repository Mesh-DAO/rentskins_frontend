import Image, { StaticImageData } from 'next/image'
import React, { InputHTMLAttributes } from 'react'

type TypeItem = {
  label: string | StaticImageData
  value: string
  disabled?: boolean
}

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  labelSide?: 'up' | 'down'
  labelClassname?: string
  options: TypeItem[]
  state: any
  setState: any
  className?: string
}

export function FormInputRadioBlock({
  name,
  label,
  labelSide = 'up',
  labelClassname,
  options,
  state,
  className,
  setState,
  ...rest
}: IProps) {
  const createItems = options.map((item, index) => (
    <div key={index} className="flex w-full items-center gap-2">
      <input
        type="radio"
        id={'form-radio-block-for' + label + '-' + index}
        name={'form-radio-block-' + name}
        className="peer appearance-none
        transition-all checked:bg-mesh-color-primary-1100"
        value={item.value}
        onChange={(event) => setState(event.target.value)}
        defaultChecked={index === 0 && true}
        disabled={item.disabled}
        {...rest}
      />
      <label
        htmlFor={'form-radio-block-for' + label + '-' + index}
        className={`${labelClassname} flex w-full cursor-pointer select-none items-center justify-center gap-4 rounded-md 
          border-2 border-transparent bg-mesh-color-neutral-500 px-4 py-3 text-lg font-semibold text-mesh-color-neutral-200
          transition-all duration-500 hover:bg-mesh-color-neutral-500/50 peer-checked:border-mesh-color-primary-600
          peer-checked:bg-mesh-color-neutral-400 peer-checked:text-white peer-disabled:cursor-default
          peer-disabled:border-mesh-color-neutral-600 peer-disabled:bg-mesh-color-neutral-600`}
      >
        {typeof item.label !== 'string' ? (
          <Image src={item.label} alt={item.value as string} />
        ) : (
          item.label
        )}
      </label>
    </div>
  ))

  return (
    <div>
      {label && labelSide === 'up' && label}
      <div className={`${className}`}> {createItems} </div>
      {label && labelSide === 'down' && label}
    </div>
  )
}
