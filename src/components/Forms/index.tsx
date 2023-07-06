import { FormInputButton } from './FormInputButton'
import { FormInputCPF } from './FormInputCPF'
import { FormInputCard } from './FormInputCard'
import { FormInputEmail } from './FormInputEmail'
import { FormInputMonthYear } from './FormInputMonthYear'
import { FormInputNumber } from './FormInputNumber'
import { FormInputText } from './FormInputText'
import { FormRoot } from './FormRoot'

const Form = {
  Root: FormRoot,
  Input: {
    Text: FormInputText,
    Email: FormInputEmail,
    Card: FormInputCard,
    CPF: FormInputCPF,
    MonthYear: FormInputMonthYear,
    Number: FormInputNumber,
    Button: FormInputButton,
  },
}

export default Form
