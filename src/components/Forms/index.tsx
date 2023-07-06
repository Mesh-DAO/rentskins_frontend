import { FormRoot } from './FormRoot'
import { FormButton } from './FormButton'

import { FormInputCPF } from './Type/FormInputCPF'
import { FormInputCard } from './Type/FormInputCard'
import { FormInputEmail } from './Type/FormInputEmail'
import { FormInputMonthYear } from './Type/FormInputMonthYear'
import { FormInputNumber } from './Type/FormInputNumber'
import { FormInputText } from './Type/FormInputText'
import { FormInputDate } from './Type/FormInputDate'
import { FormInputPhone } from './Type/FormInputPhone'
import { FormInputPostalCode } from './Type/FormInputPostalCode'

const Form = {
  Root: FormRoot,
  Button: FormButton,
  Input: {
    Text: FormInputText,
    Email: FormInputEmail,
    Card: FormInputCard,
    CPF: FormInputCPF,
    MonthYear: FormInputMonthYear,
    Number: FormInputNumber,
    Date: FormInputDate,
    Phone: FormInputPhone,
    PostalCode: FormInputPostalCode,
  },
}

export default Form
