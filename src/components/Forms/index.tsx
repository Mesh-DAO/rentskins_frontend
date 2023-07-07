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
import { FormDropdown } from './FormDropdown'
import { FormDropzone } from './FormDropzone'
import { FormInputCheckbox } from './Type/FormInputCheckbox'

const Form = {
  Root: FormRoot,
  Button: FormButton,
  Dropdown: FormDropdown,
  Dropzone: FormDropzone,
  Input: {
    Card: FormInputCard,
    Checkbox: FormInputCheckbox,
    CPF: FormInputCPF,
    Date: FormInputDate,
    Email: FormInputEmail,
    MonthYear: FormInputMonthYear,
    Number: FormInputNumber,
    Phone: FormInputPhone,
    PostalCode: FormInputPostalCode,
    Text: FormInputText,
  },
}

export default Form
