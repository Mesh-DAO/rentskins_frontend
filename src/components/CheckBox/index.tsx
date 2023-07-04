import { Input } from '../Input'
import React from 'react'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { children: React.ReactNode }

export function CheckBox({ name, id, children }: Props) {
  return (
    <div className="flex w-full">
      <Input
        type="checkbox"
        id={id}
        name={name}
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
