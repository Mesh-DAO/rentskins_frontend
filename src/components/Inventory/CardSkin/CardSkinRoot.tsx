import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function CardSkinRoot({ children }: Props) {
  return <>{children}</>
}
