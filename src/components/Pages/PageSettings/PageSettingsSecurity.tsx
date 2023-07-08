import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { IconAlert } from '@/components/Icons'

export function PageSettingsSecurity() {
  return (
    <div className="flex w-2/3 flex-col gap-8">
      {/* Top */}
      <div className="bg-mesh-neutral-800 rounded-2xl px-4 py-6">
        <CommonTitle bold={700} size={'2xl'} color="white">
          Segurança
        </CommonTitle>

        <div className="mt-8 flex flex-col gap-2">
          <div className="flex items-center justify-between ">
            <div className="flex w-3/4 items-center justify-start gap-3">
              <CommonTitle size={'lg'} color="white">
                Steam Guard
              </CommonTitle>

              <div className="flex items-center justify-center gap-2 rounded-md bg-red-500/10 px-2 py-1 text-mesh-color-rarity-low">
                <IconAlert />
                Desativado
              </div>
            </div>
            <CommonButton className="text-mesh-color-primary-1200 hover:text-mesh-color-primary-1200/50">
              {' '}
              Atualizar{' '}
            </CommonButton>
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
