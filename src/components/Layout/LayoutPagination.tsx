import { Dispatch, SetStateAction } from 'react'
import Form from '../Forms'

interface IProps {
  maxPages: number
  pageState: string | number
  setPageState:
    | Dispatch<SetStateAction<number>>
    | Dispatch<SetStateAction<string>>
}

export default function LayoutPagination({
  maxPages,
  pageState,
  setPageState,
}: IProps) {
  return (
    <div>
      {Number(pageState) > 1 && (
        <Form.Input.Radio.Block
          state={pageState}
          setState={setPageState}
          compareChecked={String(pageState)}
          name="inventory-pagination"
          containerClassname="flex gap-2"
          labelClassname="flex w-full h-full bg-transparent border-mesh-color-neutral-400 border rounded-lg text-white peer-checked:text-mesh-color-others-black
          peer-checked:bg-mesh-color-primary-1200 hover:bg-mesh-color-neutral-500 peer-checked:font-bold peer-checked:border-mesh-color-primary-1200"
          wrapperClassname="w-10 h-10"
          options={renderPagesOptions(maxPages)}
        />
      )}
    </div>
  )
}

const renderPagesOptions = (maxPages: number): any => {
  const indexes = Array.from({ length: maxPages }).map((item, index) => ({
    value: index + 1,
    label: index + 1,
    labelType: 'string',
  }))

  return indexes
}
