import useFilterStore from '@/stores/filters.store'
import { Input } from '../Input'
import React from 'react'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { children: React.ReactNode }

export function CheckBox({ name, id, children, value }: Props) {
  const { inventoryFilter, setInventoryFilter } = useFilterStore()

  const handleOnChange = ({ target }: any) => {
    console.log(target.checked)
    if (target.checked) {
      if (!inventoryFilter.includes(target.value)) {
        setInventoryFilter([...inventoryFilter, target.value])
      }
    } else {
      if (inventoryFilter.includes(target.value)) {
        const newFilter = inventoryFilter.filter(
          (item) => item !== target.value,
        )
        setInventoryFilter([...newFilter])
      }
    }
  }

  return (
    <div className="flex w-full">
      <Input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={(event) => handleOnChange(event)}
        className="mr-4 !h-5 !w-5 rounded-[4px] border border-mesh-color-neutral-300 !px-0 !py-0 checked:bg-mesh-color-primary-1400"
      />
      <label
        htmlFor={id}
        className="w-[95%] text-sm text-mesh-color-neutral-200"
      >
        {' '}
        {children}
      </label>
    </div>
  )
}
