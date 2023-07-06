import { FormInputButton } from './Type/FormInputButton'
import { FormInputCPF } from './Type/FormInputCPF'
import { FormInputCard } from './Type/FormInputCard'
import { FormInputEmail } from './Type/FormInputEmail'
import { FormInputMonthYear } from './Type/FormInputMonthYear'
import { FormInputNumber } from './Type/FormInputNumber'
import { FormInputText } from './Type/FormInputText'
import { FormRoot } from './FormRoot'
import { FormInputDate } from './Type/FormInputDate'
import { FormInputPhone } from './Type/FormInputPhone'

const Form = {
  Root: FormRoot,
  Button: FormInputButton,
  Input: {
    Text: FormInputText,
    Email: FormInputEmail,
    Card: FormInputCard,
    CPF: FormInputCPF,
    MonthYear: FormInputMonthYear,
    Number: FormInputNumber,
    Date: FormInputDate,
    Phone: FormInputPhone,
  },
}

export default Form
