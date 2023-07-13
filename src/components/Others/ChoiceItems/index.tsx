'use client'
// import InputRadioChoice from '../InputRadioChoice'
import Form from '@/components/Forms'
import useFilterStore from '@/stores/filters.store'

interface Props {
  thereIsRented?: boolean
}

export default function ChoiceItems({ thereIsRented = false }: Props) {
  const { sales, rented, setSales, setRented } = useFilterStore()

  return (
    <div className="mt-16 flex gap-16 self-start">
      <Form.Input.Radio.Choice
        checked={sales}
        setState={setSales}
        name="choice-item"
        title="Itens à venda"
      />
      {thereIsRented ? (
        <Form.Input.Radio.Choice
          checked={rented}
          setState={setRented}
          name="choice-item"
          title="Alugados"
        />
      ) : null}
    </div>
  )
}
