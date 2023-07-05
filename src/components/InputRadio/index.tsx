import React from 'react'
import classNames from 'classnames'
import useFilterStore from '@/stores/filters.store'

interface Props {
  children: React.ReactNode
  className?: string
  defaultChecked?: boolean
  style?: string
  radio?: string
  name: string
  checked?: boolean
  onChange?: any
  value?: string
}

export function InputRadio({
  children,
  className,
  style,
  radio,
  name,
  value,
  onChange,
  defaultChecked,
}: Props) {
  const { inventoryMainFilter, setInventoryMainFilter } = useFilterStore()

  const handleOnChange = ({ target }: any) => {
    setInventoryMainFilter(target.value)
  }

  console.log(inventoryMainFilter)

  return (
    <label className="relative flex">
      <input
        type="radio"
        name={name}
        defaultChecked={defaultChecked}
        value={value}
        onChange={handleOnChange}
        className={classNames({
          'peer absolute z-[-1]': radio === 'dia',
          ' h-5 w-5 cursor-pointer rounded border border-mesh-color-neutral-300 checked:bg-mesh-color-primary-1400':
            radio === 'filter',
        })}
      />
      <div
        className={classNames(
          'cursor-pointer text-sm font-normal transition duration-[400ms]',
          {
            'text-mesh-neutralborder-mesh-color-neutral-300 flex h-[35px] w-[67px] justify-center rounded-lg border border-opacity-50 peer-checked:bg-[#CA1733]':
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
