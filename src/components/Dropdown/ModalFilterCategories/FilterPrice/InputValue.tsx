import { Title } from '@/components/Title'
import { InputCurrency } from '@/components/InputCurrency'

interface IProps {
  title: string
  value: number | undefined
  defaultValue?: number | string
  setValue: (value: number) => void
}

export default function InputValue({
  title,
  value,
  setValue,
  defaultValue,
}: IProps) {
  return (
    <div className="flex flex-col gap-2">
      <Title color="white" size="sm">
        {title}
      </Title>
      <div className="items flex items-center">
        <div className="absolute ml-2 text-sm font-semibold text-mesh-color-neutral-0 opacity-60">
          R$
        </div>
        <InputCurrency
          onChange={() => setValue}
          value={value}
          defaultValue={defaultValue}
          className="h-10 w-full rounded bg-mesh-color-neutral-900 pl-8 text-white outline-none active:border-mesh-color-primary-700"
        />
      </div>
    </div>
  )
}
