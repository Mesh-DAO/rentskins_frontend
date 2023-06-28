import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const RegisterConfigSchema = yup.object({
  linkTrade: yup.string().required('LinkTarde é obrigatório'),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('Formato do e-mail é invalido'),
  termos: yup
    .boolean()
    .oneOf([true], 'Você precisa aceitar os termos de serviços'),
  promo: yup.boolean(),
})

export const RegisterConfigResolve = yupResolver(RegisterConfigSchema)
