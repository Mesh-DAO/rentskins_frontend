import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  console.log('getStaticProps!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  return {
    props: { wallets: {}, revalidate: 60 * 60 },
  }
}

export default function Profile(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  console.log(props)
  return <div>Página do usuário logado</div>
}
