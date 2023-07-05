import React from 'react'

interface IProps {
  children: React.ReactNode
}

export function FormRoot({ children }: IProps) {
  return <form className="w-full">{children}</form>
}
