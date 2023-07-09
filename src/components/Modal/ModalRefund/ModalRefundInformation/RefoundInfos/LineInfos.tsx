import { CommonTitle } from '@/components/Common/CommonTitle'

interface Props {
  label: string
  value: string
  size?: 'lg' | '2xl' | '3xl' | 'base'
  color?: 'white' | 'cinza' | 'dark/6'
  className?: string
  bold?: 500 | 600 | 700
}

export default function LineInfos({
  label,
  value,
  bold = 600,
  className,
  color = 'white',
  size = 'base',
}: Props) {
  return (
    <div className="flex flex-col">
      <CommonTitle className="text-mesh-light-2 text-lg font-semibold">
        {label}
      </CommonTitle>
      <CommonTitle bold={bold} className={className} color={color} size={size}>
        R${value}
      </CommonTitle>
    </div>
  )
}
