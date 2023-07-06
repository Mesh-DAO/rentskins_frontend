import { FormInputButton } from './FormInputButton'
import { FormInputCard } from './FormInputCard'
import { FormInputMonthYear } from './FormInputMonthYear'
import { FormInputNumber } from './FormInputNumber'
import { FormInputText } from './FormInputText'
import { FormRoot } from './FormRoot'

const Form = {
  Root: FormRoot,
  Input: {
    Text: FormInputText,
    Card: FormInputCard,
    MonthYear: FormInputMonthYear,
    Number: FormInputNumber,
    Button: FormInputButton,
  },
}

export default Form
