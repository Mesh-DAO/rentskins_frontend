import React, { FormHTMLAttributes } from 'react'

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
  className?: string
}

export function FormRoot({ children, className, ...rest }: IProps) {
  return (
    <form className={`${className} w-full`} {...rest}>
      {children}
    </form>
  )
}
