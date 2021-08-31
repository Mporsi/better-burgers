import type { GetStaticProps, NextPage } from 'next'
import { BurgerMap } from '../components/googleMap/mapHero'
import Layout from '../components/Layout'
import { Hero } from '../components/hero'
import { RecentBurgers } from '../components/recentBurgers/recentBurgers'
import { AppProps } from 'next/app'

const Home = ({ googleApiKey }: { googleApiKey: string }) => {
  return (
    <Layout HeaderComponent={<Hero />}>
      <BurgerMap apiKey={googleApiKey} />
      <RecentBurgers />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const googleApiKey = process.env.GOOGLE_MAPS_API_KEY
  return {
    props: {
      googleApiKey,
    },
  }
}

export default Home
