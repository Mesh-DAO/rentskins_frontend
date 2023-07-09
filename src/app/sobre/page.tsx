import { CommonTitle } from '@/components/Common/CommonTitle'

export default function Sobre() {
  return (
    <main className="w-full bg-mesh-color-others-black">
      <div className="mx-auto w-10/12 py-10">
        <CommonTitle
          bold={700}
          color="white"
          className="flex justify-center text-center text-5xl"
        >
          Sobre a RentSkins
        </CommonTitle>

        <div className="mt-2 space-y-10 pb-20">
          <div>
            <CommonTitle bold={700} color="white" className="text-2xl">
              O que é a RentSkins?
            </CommonTitle>
            <p className="mt-5 text-mesh-color-neutral-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit
              animi, repudiandae optio qui architecto excepturi perspiciatis,
              porro voluptate distinctio vitae nam. Corrupti necessitatibus
              magnam dolor quam quis consequatur quae.
            </p>
          </div>

          <div>
            <CommonTitle bold={700} color="white" className="text-2xl">
              O que fazemos?
            </CommonTitle>
            <p className="mt-5 text-mesh-color-neutral-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit
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
  )
}
