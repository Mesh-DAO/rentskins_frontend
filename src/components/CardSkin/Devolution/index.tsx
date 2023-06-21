import { Button } from '@/components/Button'
import { Title } from '@/components/Title'

interface IProps {
  devolutionTime: number
}

export default function Devolution({ devolutionTime }: IProps) {
  return (
    <div className="flex flex-col items-end gap-3">
      <Button className="text text- border-none bg-mesh-color-neutral-500 px-4 py-1 text-lg font-semibold">
        Devolução
      </Button>
      <div className="rounded-2xl bg-mesh-color-rarity-lowest bg-opacity-10 px-2 py-[2px]">
        <Title color="red" bold={500}>
          Expira em {devolutionTime} dias
        </Title>
      </div>
    </div>
  )
}
