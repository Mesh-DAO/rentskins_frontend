import classNames from 'classnames'
import React from 'react'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { placeHolder?: string }

export function Input({
  className,
  placeHolder = '',
  type = 'text',
  name,
  ...props
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      {...props}
      className={classNames(
        'h-[42px] rounded-[12px] px-4 py-2 no-underline outline-none',
        className,
      )}
    />
  )
}
