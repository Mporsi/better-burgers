import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import burgerpic from '../public/BurgerHero.png'

const useStyles = makeStyles((theme) => ({
  leftSection: {
    paddingLeft: theme.spacing(4),
  },
  image: {
    maxHeight: 300,
    width: '100%',
    objectFit: 'cover',
  },
}))

export function Hero() {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:900px)')
  return (
    <Grid container>
      <Grid item xs={matches ? 5 : 12} className={classes.leftSection}>
        <Typography variant={'h1'}>Better Burgers</Typography>
      </Grid>
      <Grid item xs={matches ? 7 : 12}>
        <img src={burgerpic.src} alt="Picture of a lot of burgers" className={classes.image} />
      </Grid>
    </Grid>
  )
}

/*
*           height={500}
          objectFit={'cover'}*/
