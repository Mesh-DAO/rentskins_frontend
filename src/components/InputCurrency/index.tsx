import classNames from 'classnames'
import CurrencyInput from 'react-currency-input-field'

type Props = {
  id?: string
  name?: string
  placeholder?: string
  className?: string
  onChange?: (value?: string) => void
  errors?: any
}

export function InputCurrency({
  onChange,
  name,
  className,
  errors,
  ...props
}: Props) {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-1">
      <CurrencyInput
        {...props}
        groupSeparator="."
        decimalSeparator=","
        decimalsLimit={2}
        onValueChange={(value) => (onChange ? onChange(value) : () => {})}
        className={classNames(className)}
      />
    </div>
  )
}
