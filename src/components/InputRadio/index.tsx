import React from 'react'
import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
  defaultChecked?: boolean
}

export function InputRadio({ children, className, defaultChecked }: Props) {
  return (
    <label className="relative">
      <input
        type="radio"
        name="tag"
        defaultChecked={defaultChecked}
        className="absolute z-[-1]"
      />
      <div
        className={classNames(
          'flex h-5 cursor-pointer items-center gap-2 px-3 font-inter text-sm font-normal transition duration-[400ms]',
          className,
        )}
      >
        {children}
      </div>
    </label>
  )
}
