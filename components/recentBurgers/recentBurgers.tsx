import { RecentBurgerCard } from './RecentBurgerCard'
import { Grid, Typography } from '@material-ui/core'
import useSWR, { SWRResponse } from 'swr'

export function RecentBurgers() {
  const {
    data,
    error,
  }: SWRResponse<Array<BurgerPlace>, any> = useSWR('/api/recentBurgers')

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={'h4'}>My recent burgers</Typography>
      </Grid>
      {data?.map((burgerPlace) => (
        <RecentBurgerCard
          key={`burgerCard:${burgerPlace.id}`}
          {...burgerPlace}
        />
      ))}
    </Grid>
  )
}
