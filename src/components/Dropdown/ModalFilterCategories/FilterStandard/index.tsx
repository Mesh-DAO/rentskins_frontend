'use client'
import StandardCheckboxItem from './StandardCheckboxItem'

export default function FilterStandard() {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-1">
      <StandardCheckboxItem value="Menor preço" />
      <StandardCheckboxItem value="Maior Preço" />
      <StandardCheckboxItem value="Maior float" />
    </div>
  )
}
