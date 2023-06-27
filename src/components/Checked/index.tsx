import React from 'react'
import { Title } from '../Title'

type PropsType = {
  label: string
  label2?: string
  checked: boolean
  onChange: any
}

const Checked = ({ label, checked, label2, onChange }: PropsType) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="!h-5 !w-5 rounded-[4px] border border-mesh-color-neutral-200 px-0 checked:bg-[#B7E03E]"
        checked={checked}
        onChange={onChange}
      />
      <Title className="text-mesh-color-neutral-200">
        {label}
        <span className="text-[#B7E03E]">{label2}</span>
      </Title>
    </label>
  )
}

export default Checked
