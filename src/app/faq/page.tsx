import { RadixAccordion } from '@/components/FAQ'
import { Title } from '@/components/Title'

export default function Faq() {
  return (
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
  )
}
