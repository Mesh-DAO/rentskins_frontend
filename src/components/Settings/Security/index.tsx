import { Title } from '../../Title'
import Image from 'next/image'
import IconAlert from '../../../components/Icons/icon-alert.svg'
import { InlineButton } from '../../InlineButton'

export function SettingsSecurity() {
  return (
    <div className='flex w-2/3 flex-col gap-8'>
      {/* Top */}
      <div className='rounded-2xl bg-mesh-dark-1 px-4 py-6'>
        <Title bold={700} size={'2xl'} color='white'>
          Segurança
        </Title>

        <div className='mt-8 flex flex-col gap-2'>
          <div className='flex items-center justify-between '>
            <div className='flex w-3/4 items-center justify-start gap-3'>
              <Title size={'lg'} color='white'>
                Steam Guard
              </Title>

              <div className='flex gap-2 rounded-md bg-red-500/10 px-2 py-1 text-[#E84E6A]'>
                <Image src={IconAlert} alt='Alert' />
                Desativado
              </div>
            </div>
            <InlineButton className='text-alt-steam-button hover:text-alt-steam-button/50'>
              {' '}
              Atualizar{' '}
            </InlineButton>
          </div>

          {/* CHANGE COLOR! */}
          <span className='text-base leading-5 text-[#90988B]'>
            O Steam Guard é um nível extra de segurança para a sua conta Steam.
            Ele evita que pessoal mal intencionadas roubem seus itens e é um
            requisito para que você possa trocar no SkinsMonkey.
          </span>
        </div>
      </div>
    </div>
  )
}