import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button, Grid, Paper, SvgIcon, Typography } from '@material-ui/core'
import Layout from '../../components/Layout'
import useSWR, { SWRResponse } from 'swr'
import 'draft-js/dist/Draft.css'
import MUIRichTextEditor from 'mui-rte'
import { makeStyles } from '@material-ui/core/styles'
import { ImageUploaderWithPreview } from '../../components/imageUpload/ImageUploader'
import React, { useState } from 'react'
import { Rating } from '@material-ui/lab'
import BurgerIcon from '../../public/burgerIcon.svg'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const useStyles = makeStyles((theme) => ({
  rootGrid: {
    minHeight: '50%',
  },
  rtePaper: {
    width: '100%',
    minHeight: `${theme.typography.pxToRem(300)}`,
    padding: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}))

const BurgerPlacePage: NextPage = () => {
  const classes = useStyles()
  const router = useRouter()
  const { burgerSlug } = router.query
  const { data, error }: SWRResponse<BurgerPlace, any> = useSWR(
    `/api/restaurant?slug=${burgerSlug}`,
    fetcher
  )
  const [tasteRating, setTasteRatings] = useState<number>(1)
  const [textureRating, setTextureRating] = useState<number>(1)
  const [visualPresentationRating, setVisualPresentationRating] =
    useState<number>(1)
  const ratings = [
    { name: 'Taste', value: tasteRating, setter: setTasteRatings },
    { name: 'Texture', value: textureRating, setter: setTextureRating },
    {
      name: 'Visual Presentation',
      value: visualPresentationRating,
      setter: setVisualPresentationRating,
    },
  ]

  if (!data || error) {
    console.log(error)
    return <div> error fetching burgerplace info</div>
  }

  const save = (data: string) => {
    console.log(data)
  }

  return (
    <Layout>
      <Grid container className={classes.rootGrid}>
        <Typography variant={'h3'}>Write a review of {data.name} </Typography>
        <Paper className={classes.rtePaper}>
          <Grid container>
            {ratings?.map((rating, index) => (
              <Grid key={`rating:${rating.name}`} item xs={12} container>
                <Grid item xs={4}>
                  <Typography>{rating.name}:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Rating
                    name={rating.name}
                    precision={1}
                    onChange={(
                      event: React.ChangeEvent<{}>,
                      value: number | null
                    ) => {
                      if (!value) return
                      rating.setter(value)
                    }}
                    value={rating.value}
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
            <Grid item xs={12} container style={{ marginTop: '15px' }}>
              <Grid item xs={4} style={{ borderTop: '2px dashed' }}>
                <Typography>Overall:</Typography>
              </Grid>
              <Grid item xs={2} style={{ borderTop: '2px dashed' }}>
                <Rating
                  name={'overallRating'}
                  precision={1}
                  readOnly
                  value={ratings.reduce((a, b) => a + b.value, 0) / 3}
                  color={'secondary'}
                  icon={
                    <SvgIcon viewBox={'0 0 512 512'}>
                      <BurgerIcon fontSize="inherit" />
                    </SvgIcon>
                  }
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <MUIRichTextEditor
                controls={[
                  'title',
                  'bold',
                  'italic',
                  'underline',
                  'strikethrough',
                  'numberList',
                  'bulletList',
                  'quote',
                  'code',
                  'clear',
                  'save',
                ]}
                label="How was the burger?"
                onSave={save}
                onChange={(state) => console.log(state)}
              />
            </Grid>
          </Grid>
        </Paper>
        <Grid item xs={12}>
          <Typography>How did it look?</Typography>
          <ImageUploaderWithPreview />
        </Grid>
        <Button variant={'contained'} color={'primary'}>
          Save
        </Button>
      </Grid>
    </Layout>
  )
}

export default BurgerPlacePage
