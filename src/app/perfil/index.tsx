import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  console.log('getStaticProps!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  return {
    props: { wallets: {}, revalidate: 60 * 60 },
  }
}
