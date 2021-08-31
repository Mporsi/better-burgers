import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Grid, Typography } from '@material-ui/core'
import Layout from '../../components/Layout'
import useSWR, { SWRResponse } from 'swr'
import { BurgerRating } from '../../components/rating'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const BurgerPlacePage: NextPage = () => {
  const router = useRouter()
  const { burgerSlug } = router.query
  const { data, error }: SWRResponse<BurgerPlace, any> = useSWR(`/api/restaurant?slug=${burgerSlug}`, fetcher)
  if (!data || error || !data.review) {
    console.log(error)
    return <div> error fetching your review</div>
  }

  const {
    review: { myRating, title, body, date },
  } = data
  return (
    <Layout>
      <Grid container>
        <Typography variant={'h4'}>{title}</Typography>
        <Typography variant={'body1'}>{body}</Typography>
        <Typography variant={'body2'}>{date.toLocaleString()}</Typography>
        <BurgerRating {...myRating} />
      </Grid>
    </Layout>
  )
}

export default BurgerPlacePage
