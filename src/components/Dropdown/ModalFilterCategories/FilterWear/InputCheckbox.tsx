interface IProps {
  inputValues: string[]
}

export default function InputCheckbox({ inputValues }: IProps) {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-5">
      {inputValues.map((value, idx) => (
        <label
          key={`${value}-${idx}`}
          className="flex cursor-pointer items-center gap-2 text-white"
        >
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              value={value}
              className="peer absolute z-[-1]"
            />
            <div className="flex h-5 w-5 items-start justify-center rounded border border-mesh-color-neutral-400"></div>
            <div className="absolute mb-1 h-2 w-3 -rotate-45 peer-checked:border-b-2 peer-checked:border-l-2" />
          </div>
          {value}
        </label>
      ))}
    </div>
  )
}
