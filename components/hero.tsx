import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, useTheme } from '@material-ui/core'
import Image from 'next/image'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import burgerpic from '../public/BurgerHero.png'

const useStyles = makeStyles((theme) => ({
  leftSection: {
    paddingLeft: theme.spacing(4),
  },
}))

export function Hero() {
  const classes = useStyles()
  const { pxToRem } = useTheme().typography
  const matches = useMediaQuery('(min-width:900px)')
  return (
    <Grid container>
      <Grid item xs={matches ? 5 : 12} className={classes.leftSection}>
        <Typography variant={'h1'}>Better Burgers</Typography>
      </Grid>
      <Grid item xs={matches ? 7 : 12}>
        <Image
          src={burgerpic}
          alt="Picture of a lot of burgers"
          height={500}
          placeholder={'blur'}
          objectFit={'cover'}
        />
      </Grid>
    </Grid>
  )
}
