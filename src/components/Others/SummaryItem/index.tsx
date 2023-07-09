import { CommonTitle } from '@/components/Common/CommonTitle'
import classNames from 'classnames'

interface Props {
  title: string
  value: string
  className?: string
  size?: 'base' | 'lg'
}

export default function LineInfosSummaryh({
  title,
  value,
  className,
  size = 'base',
}: Props) {
  return (
    <div className={classNames('flex w-full justify-between', className)}>
      <CommonTitle color="white" size={size} bold={400}>
        {title}
      </CommonTitle>
      <CommonTitle color="white" size={size} bold={600}>
        {!value.includes('%') && 'R$'}
        {value}
      </CommonTitle>
    </div>
  )
}
