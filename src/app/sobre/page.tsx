import { LayoutPage } from '@/components/Shared'
import { Title } from '@/components/Title'

export default function Privacidade() {
  return (
    <LayoutPage>
      <main className="w-full bg-mesh-dark-2">
        <div className="mx-auto w-10/12 py-10">
          <Title
            bold={700}
            color="white"
            className="flex justify-center text-center text-5xl"
          >
            Sobre a RentSkins
          </Title>

          <div className="mt-2 space-y-10 pb-20">
            <div>
              <Title bold={700} color="white" className="text-2xl">
                O que é a RentSkins?
              </Title>
              <p className="mt-5 text-[#D0D7CB]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                odit animi, repudiandae optio qui architecto excepturi
                perspiciatis, porro voluptate distinctio vitae nam. Corrupti
                necessitatibus magnam dolor quam quis consequatur quae.
              </p>
            </div>

            <div>
              <Title bold={700} color="white" className="text-2xl">
                O que fazemos?
              </Title>
              <p className="mt-5 text-[#D0D7CB]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                odit animi, repudiandae optio qui architecto excepturi
                perspiciatis, porro voluptate distinctio vitae nam. Corrupti
                necessitatibus magnam dolor quam quis consequatur quae. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quod odit
                animi, repudiandae optio qui architecto excepturi perspiciatis,
                porro voluptate distinctio vitae nam. Corrupti necessitatibus
                magnam dolor quam quis consequatur quae. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quod odit animi, repudiandae
                optio qui architecto excepturi perspiciatis, porro voluptate
                distinctio vitae nam. Corrupti necessitatibus magnam dolor quam
                quis consequatur quae. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quod odit animi, repudiandae optio qui
                architecto excepturi perspiciatis, porro voluptate distinctio
                vitae nam. Corrupti necessitatibus magnam dolor quam quis
                consequatur quae. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quod odit animi, repudiandae optio qui
                architecto excepturi perspiciatis, porro voluptate distinctio
                vitae nam. Corrupti necessitatibus magnam dolor quam quis
                consequatur quae.
              </p>
            </div>
          </div>
        </div>
      </main>
    </LayoutPage>
  )
}