import { RadixAccordion } from '@/components/FAQ'
import { LayoutPage } from '@/components/Shared'
import { Title } from '@/components/Title'

export default function Faq() {
  return (
    <LayoutPage>
      <main className="mx-auto mt-6 w-10/12">
        <Title
          bold={700}
          color="white"
          className="mx-auto flex justify-center text-5xl"
        >
          Perguntas Frequentes (FAQ)
        </Title>
        <RadixAccordion />
      </main>
    </LayoutPage>
  )
}
