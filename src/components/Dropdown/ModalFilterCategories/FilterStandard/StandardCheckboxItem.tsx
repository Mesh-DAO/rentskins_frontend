// import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Title } from '@/components/Title'

interface IProps {
  value: string
}

export default function StandardCheckboxItem({ value }: IProps) {
  return (
    <label className="flex cursor-pointer rounded font-semibold text-white hover:bg-zinc-200 hover:bg-opacity-5">
      <input type="radio" name="standardRadio" className="peer" />
      <Title className="w-full rounded p-2 peer-checked:bg-zinc-200 peer-checked:bg-opacity-20">
        {value}
      </Title>
    </label>
  )
}
