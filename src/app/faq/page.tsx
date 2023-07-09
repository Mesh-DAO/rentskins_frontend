import { CommonTitle } from '@/components/Common/CommonTitle'
import { PageFAQ } from '@/components/Pages/PageFAQ/PageFAQ'

export default function Faq() {
  return (
    <main className="mx-auto mt-6 w-10/12">
      <CommonTitle
        bold={700}
        color="white"
        className="mx-auto flex justify-center text-5xl"
      >
        Perguntas Frequentes (FAQ)
      </CommonTitle>
      <PageFAQ />
    </main>
  )
}
