import React from 'react'
import { Title } from '../Title'

type PropsType = {
  label: string
  label2?: string
  checked: boolean
  onChange?: any
}

const InputCheckBox = ({ label, label2, checked, onChange }: PropsType) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-checkbox border-text-mesh-color-neutral-200 h-5 w-5 rounded-[4px] border checked:bg-blue-500"
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

export default InputCheckBox
