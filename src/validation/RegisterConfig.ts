import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const RegisterConfigSchema = yup.object({
  linkTrade: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .required('LinkTarde é obrigatório'),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('Formato do e-mail é invalido'),
  termos: yup.bool().oneOf([true], 'Você precisa aceitar os termos'),
})

export const RegisterConfigResolve = yupResolver(RegisterConfigSchema)
