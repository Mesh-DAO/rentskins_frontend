import React from 'react'
import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
  defaultChecked?: boolean
  style?: string
  radio?: string
  name: string
}

export function InputRadio({
  children,
  className,
  style,
  radio,
  name,
  defaultChecked,
}: Props) {
  return (
    <label className="relative flex">
      <input
        type="radio"
        name={name}
        defaultChecked={defaultChecked}
        className={classNames({
          'peer absolute z-[-1]': radio === 'dia',
          'peer h-5 w-5 cursor-pointer rounded border border-mesh-color-neutral-300 checked:bg-mesh-color-primary-1400':
            radio === 'filter',
        })}
      />
      <div
        className={classNames(
          'cursor-pointer text-sm font-normal transition duration-[400ms]',
          {
            'peer-checked:bg-mesh-light-2 text-mesh-neutralborder-mesh-color-neutral-300 flex h-[35px] w-[67px] justify-center rounded-lg border':
              style === 'cinza',
          },
          className,
        )}
      >
        {children}
      </div>
    </label>
  )
}
