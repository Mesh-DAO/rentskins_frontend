'use client'
import InputRadioChoice from '../InputRadioChoice'

interface Props {
  thereIsRented?: boolean
}

export default function ChoiceItems({ thereIsRented = false }: Props) {
  return (
    <div className="mt-16 flex gap-16 self-start">
      <InputRadioChoice checked={true}>Items à venda</InputRadioChoice>
      {thereIsRented ? <InputRadioChoice>Alugados</InputRadioChoice> : null}
    </div>
  )
}
