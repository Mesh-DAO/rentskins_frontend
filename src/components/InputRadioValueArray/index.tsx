import React, { MouseEventHandler } from 'react'

interface IItems {
  label: string
  value: number
}

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  items: IItems[]
  hasPaybank?: boolean
  hasGrid?: boolean
  hasFlex?: boolean
  handleOnClick: MouseEventHandler
  className?: string
}

export function InputRadioValueArray({
  items,
  handleOnClick,
  className,
  hasPaybank = false,
  hasFlex = false,
  hasGrid = false,
}: IProps) {
  const createInputs = () => {
    return items.map((item, index) => (
      <div key={index} className="h-18 flex w-full">
        <input
          type="radio"
          id={'radio-index-value-' + index}
          name={'radio-value-index'}
          className="peer appearance-none"
          value={item.value}
          defaultChecked={index === 0}
          onClick={handleOnClick}
        />
        <label
          htmlFor={'radio-index-value-' + index}
          className="flex w-full cursor-pointer select-none items-center justify-center gap-4 rounded-md border-2 
border-transparent bg-mesh-color-neutral-500 px-4 py-3 text-lg font-semibold
text-mesh-color-neutral-200 transition-all duration-500 hover:bg-mesh-color-neutral-500/50 peer-checked:border-mesh-color-primary-600 peer-checked:bg-mesh-color-neutral-400 peer-checked:text-white"
        >
          {item.label}
        </label>
      </div>
    ))
  }

  return (
    <div
      className={`${className} mt-4 ${hasGrid && 'grid'} ${
        hasFlex && 'flex'
      } grid-cols-2 gap-2`}
    >
      {createInputs()}
    </div>
  )
}
