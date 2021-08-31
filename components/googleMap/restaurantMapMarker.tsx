import { Marker } from '@react-google-maps/api'
import React from 'react'

export function RestaurantMapMarker({
  name,
  coordinates,
  id,
  onClickMarker,
}: BurgerPlace & { onClickMarker: (id: string) => void }) {
  return (
    <Marker
      key={`name${name}`}
      position={coordinates}
      title={name}
      icon={'https://www.svgrepo.com/show/287733/burger.svg'}
      onClick={() => onClickMarker(id)}
    />
  )
}
