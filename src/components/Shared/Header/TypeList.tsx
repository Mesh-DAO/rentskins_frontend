import { SetaType } from "@/components/Icons/SetaType";
import { Title } from "@/components/Title";

type Props = {
  children: React.ReactNode
}

export function TypeList({ children }: Props) {
  return (
    <div className="w-30 flex items-center justify-center gap-1 mr-2">
      <Title className="w-10/12 text-white font-bold">{children}</Title>
      <span className="ml-2"><SetaType /></span>
    </div>
  )
}