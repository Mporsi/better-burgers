import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  mediaArea: {
    height: '100%',
  },
  image: {
    top: 0,
    height: 140,
  },
  contentArea: {
    height: 160,
  },
}))

export function RecentBurgerCard(props: BurgerPlace) {
  const classes = useStyles()
  const cardImage = require(`../../public/${props.review?.pictureSrc}`)
  const matches = useMediaQuery('(min-width:900px)')

  return (
    <Grid item xs={matches ? 3 : 12}>
      <Card className={classes.root}>
        <CardActionArea className={classes.mediaArea} href={`/myreviews/${props.slug}`}>
          <CardMedia className={classes.image} image={cardImage.default.src} title="Contemplative Reptile" />
          <CardContent className={classes.contentArea}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.review?.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.review?.body.substring(0, 100)}...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
