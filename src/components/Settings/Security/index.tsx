import { Title } from '../../Title'
import { IconAlert } from '@/components/Icons'
import { InlineButton } from '../../InlineButton'

export function SettingsSecurity() {
  return (
    <div className="flex w-2/3 flex-col gap-8">
      {/* Top */}
      <div className="bg-mesh-neutral-800 rounded-2xl px-4 py-6">
        <Title bold={700} size={'2xl'} color="white">
          Segurança
        </Title>

        <div className="mt-8 flex flex-col gap-2">
          <div className="flex items-center justify-between ">
            <div className="flex w-3/4 items-center justify-start gap-3">
              <Title size={'lg'} color="white">
                Steam Guard
              </Title>

              <div className="flex items-center justify-center gap-2 rounded-md bg-red-500/10 px-2 py-1 text-mesh-color-rarity-low">
                <IconAlert />
                Desativado
              </div>
            </div>
            <InlineButton className="text-mesh-color-primary-1200 hover:text-mesh-color-primary-1200/50">
              {' '}
              Atualizar{' '}
            </InlineButton>
          </div>

          {/* CHANGE COLOR! */}
          <span className="text-base leading-5 text-mesh-color-neutral-200">
            O Steam Guard é um nível extra de segurança para a sua conta Steam.
            Ele evita que pessoal mal intencionadas roubem seus itens e é um
            requisito para que você possa trocar no SkinsMonkey.
          </span>
        </div>
      </div>
    </div>
  )
}
