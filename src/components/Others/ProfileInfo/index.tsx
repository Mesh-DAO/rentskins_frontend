import Common from '@/components/Common'

interface Props {
  title: string
  value: string
}

export default function ProfileInfo({ title, value }: Props) {
  const isPercent = value.includes('%') ? 'green' : 'white'

  return (
    <div
      className="flex w-56 flex-col items-center justify-center gap-1 rounded-xl border
      border-mesh-color-primary-1400 px-2 py-5"
    >
      <Common.Title className="text-mesh-light-2">{title}</Common.Title>
      <Common.Title color={isPercent}>{value}</Common.Title>
    </div>
  )
}
