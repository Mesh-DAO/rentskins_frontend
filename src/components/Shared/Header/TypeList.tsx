import { Title } from '@/components/Title'
import { IconSetaType } from '@/components/Icons'

type Props = {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}

export function TypeList({ children }: Props) {
  return (
    <div className="w-30 mr-2 flex items-center justify-center gap-1">
      <Title className="w-10/12 font-bold text-white">{children}</Title>
      <span className="ml-2">
        <IconSetaType />
      </span>
    </div>
  )
}
