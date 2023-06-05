import { InlineButton } from '../../InlineButton'
import { Title } from '../../Title'

export function SettingsInformation() {
  return (
    <div className='flex w-2/3 flex-col gap-8'>
      {/* Top */}
      <div className='rounded-2xl bg-mesh-dark-1 px-4 py-6'>
        <div>
          <Title bold={700} size={'2xl'} color='white'>
            Informações Pessoais
          </Title>
          {/* CHANGE COLOR! */}
          <span className='text-[#90988B]'>
            Aqui você encontra informações sobre a sua conta RentsSkins.
            Recomendamos que você mantenha a sua URL de Troca e outras
            informações importantes atualizadas para não ter problema na hora da
            negociação.
          </span>
        </div>

        <div className='mt-8 flex flex-col gap-2'>
          <Title size={'lg'} color='white'>
            URL de Troca
          </Title>
          <div className='flex gap-4'>
            <input
              // CHANGE COLOR!
              className='w-5/6 rounded-md bg-mesh-dark-0 py-3 pl-3 text-alt-steam-button placeholder:text-[#E3F1D8]'
              placeholder='https://steamcommunity.com/tradeoffer/new/?partner=240416830&token=vzAomQ5n'
            />
            <div className='flex w-1/6 items-center justify-center gap-2'>
              <InlineButton className='text-alt-steam-button hover:text-alt-steam-button/50'>
                {' '}
                Obter URL{' '}
              </InlineButton>
              <InlineButton className='text-alt-steam-button hover:text-alt-steam-button/50'>
                {' '}
                Aplicar{' '}
              </InlineButton>
            </div>
          </div>
        </div>

        {/* CHANGE COLOR! */}
        {/* Line */}
        <div className='my-6 h-[1px] w-full bg-[#90988B]' />

        <div className='flex flex-col'>
          <Title size={'lg'} color='white'>
            Link de Venda
          </Title>
          <div className='flex items-center justify-between '>
            <span className='text-[#90988B]'>
              {' '}
              https://rentskins/?sellerid=10902554 (MAKE IT FUNCTIONAL){' '}
            </span>
            <InlineButton className='text-alt-steam-button hover:text-alt-steam-button/50'>
              {' '}
              Copiar Link{' '}
            </InlineButton>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='rounded-2xl bg-mesh-dark-1 px-4 py-6'>
        <Title bold={700} size={'2xl'} color='white'>
          Informações de Contato
        </Title>
        <div className='mt-8 flex items-center justify-between'>
          <div className='flex flex-col'>
            <Title size={'lg'} color='white'>
              Email
            </Title>
            <span className='text-[#90988B]'>
              {' '}
              https://rentskins/?sellerid=10902554 (MAKE IT FUNCTIONAL){' '}
            </span>
          </div>
          <InlineButton className='text-alt-steam-button hover:text-alt-steam-button/50'>
            {' '}
            Copiar Link{' '}
          </InlineButton>
        </div>
      </div>
    </div>
  )
}