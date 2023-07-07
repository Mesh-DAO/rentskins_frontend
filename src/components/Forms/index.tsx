import { FormRoot } from './FormRoot'
import { FormButton } from './FormButton'

import { FormInputCPF } from './Input/FormInputCPF'
import { FormInputCard } from './Input/FormInputCard'
import { FormInputEmail } from './Input/FormInputEmail'
import { FormInputMonthYear } from './Input/FormInputMonthYear'
import { FormInputNumber } from './Input/FormInputNumber'
import { FormInputText } from './Input/FormInputText'
import { FormInputDate } from './Input/FormInputDate'
import { FormInputPhone } from './Input/FormInputPhone'
import { FormInputPostalCode } from './Input/FormInputPostalCode'
import { FormDropdown } from './FormDropdown'
import { FormDropzone } from './FormDropzone'
import { FormInputCheckbox } from './Input/FormInputCheckbox'
import { FormInputCurrency } from './Input/FormInputCurrency'
import { FormInputRadioInline } from './Input/Radio/FormInputRadioInline'
import { FormInputRadioBlock } from './Input/Radio/FormInputRadioBlock'

const Form = {
  Root: FormRoot,
  Button: FormButton,
  Dropdown: FormDropdown,
  Dropzone: FormDropzone,
  Input: {
    Card: FormInputCard,
    Checkbox: FormInputCheckbox,
    CPF: FormInputCPF,
    Currency: FormInputCurrency,
    Date: FormInputDate,
    Email: FormInputEmail,
    MonthYear: FormInputMonthYear,
    Number: FormInputNumber,
    Phone: FormInputPhone,
    PostalCode: FormInputPostalCode,
    Radio: {
      Block: FormInputRadioBlock,
      Inline: FormInputRadioInline,
    },
    Text: FormInputText,
  },
}

export default Form
