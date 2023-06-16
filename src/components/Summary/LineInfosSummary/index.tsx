import { Title } from '@/components/Title'
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
      <Title color="white" size={size} bold={400}>
        {title}
      </Title>
      <Title color="white" size={size} bold={600}>
        {!value.includes('%') && 'R$'}
        {value}
      </Title>
    </div>
  )
}
