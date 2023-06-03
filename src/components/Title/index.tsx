import classNames from 'classnames'

type Props = {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
  size?: string
  color?: string
  className?: string
  bold?: number
  onClick?: () => void
}

export function Title({
  children,
  onClick,
  color = 'black',
  className,
}: Props) {
  return (
    <h1
      onClick={onClick}
      className={classNames(
        'flex items-center gap-2 font-inter transition-all duration-300 ease-in-out',
        {
          'text-white': color === 'white',
        },
        {
          'text-mesh-dark-3': color === 'cinza',
        },
        className,
      )}
    >
      {children}
    </h1>
  )
}
