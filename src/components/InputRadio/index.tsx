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
          'peer h-5 w-5 rounded border border-[#808080] checked:bg-dark-lime-green':
            radio === 'filter',
        })}
      />
      <div
        className={classNames(
          'cursor-pointer text-sm font-normal transition duration-[400ms]',
          {
            'flex h-[35px] w-[67px] justify-center rounded-lg border text-[#808080] peer-checked:bg-mesh-light-2':
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
