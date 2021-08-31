import BurgerIcon from '../public/burgerIcon.svg'
import { Grid, SvgIcon, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

export function BurgerRating({
  taste,
  texture,
  visualPresentation,
}: BurgerRating) {
  const ratings = [
    { previousRating: taste, name: 'Taste' },
    { previousRating: texture, name: 'Texture' },
    { previousRating: visualPresentation, name: 'Visual Presentation' },
  ]
  const overallRating: number =
    ratings.reduce((a, b) => a + b.previousRating, 0) / ratings.length
  return (
    <Grid container>
      <Typography variant={'h5'}>My Ratings</Typography>
      {ratings.map((rating) => (
        <Grid key={`rating::${rating}`} item xs={12} container>
          <Grid item xs={3}>
            <Typography>{rating.name}:</Typography>
          </Grid>
          <Grid item xs={3}>
            <Rating
              name="customized-color"
              defaultValue={rating.previousRating}
              precision={1}
              readOnly
              color={'secondary'}
              icon={
                <SvgIcon viewBox={'0 0 512 512'}>
                  <BurgerIcon fontSize="inherit" />
                </SvgIcon>
              }
            />
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12} container>
        <Grid item xs={3}>
          <Typography>Overall:</Typography>
        </Grid>
        <Grid item xs={3}>
          <Rating
            name="customized-color"
            defaultValue={overallRating}
            getLabelText={(value: number) =>
              `${value} Heart${value !== 1 ? 's' : ''}`
            }
            precision={1}
            readOnly
            color={'secondary'}
            icon={
              <SvgIcon viewBox={'0 0 512 512'}>
                <BurgerIcon fontSize="inherit" />
              </SvgIcon>
            }
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
