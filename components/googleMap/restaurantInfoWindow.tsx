import { InfoWindow } from '@react-google-maps/api'
import React from 'react'
import { Grid, Link as MUILink, Typography } from '@material-ui/core'
import { OpeningHours } from './openingHours'

function formatAddress(address: Address) {
  return `${address.streetName} ${address.streetNumber}, ${address.zipCode} ${address.town}`
}

export function RestaurantInfoWindow({
  coordinates,
  onClickClose,
  name,
  slug,
  address,
  openingHours,
}: BurgerPlace & { onClickClose: () => void }) {
  return (
    <InfoWindow
      position={coordinates}
      onCloseClick={() => {
        onClickClose()
      }}
    >
      <Grid container>
        <MUILink variant={'button'} href={`/review/${slug}`}>
          Review this place
        </MUILink>
        <Grid item xs={12} style={{ marginTop: '15px' }}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{formatAddress(address)}</Typography>
        </Grid>
        <OpeningHours openingHours={openingHours} />
      </Grid>
    </InfoWindow>
  )
}
