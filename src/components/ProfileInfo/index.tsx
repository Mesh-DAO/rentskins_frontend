import { Title } from "../Title";

interface Props {
  title: string;
  value: string;
}

export default function ProfileInfo({ title, value }: Props) {
  const isPercent = value.includes('%') ? 'green' : 'white'

  return (
    <div
      className="flex flex-col items-center justify-center py-5 px-2 gap-1 border
      border-dark-olive-green rounded-xl w-56"
    >
      <Title className="text-mesh-light-2">{title}</Title>
      <Title color={isPercent}>{value}</Title>
    </div>
  )
}