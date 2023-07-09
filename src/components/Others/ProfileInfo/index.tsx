import { CommonTitle } from '@/components/Common/CommonTitle'

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
      <CommonTitle className="text-mesh-light-2">{title}</CommonTitle>
      <CommonTitle color={isPercent}>{value}</CommonTitle>
    </div>
  )
}
