import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import useSWR, { SWRResponse } from 'swr'
import { RestaurantInfoWindow } from './restaurantInfoWindow'
import { RestaurantMapMarker } from './restaurantMapMarker'
import { Typography } from '@material-ui/core'

const defaultPosition = {
  lat: 55.6636491054708,
  lng: 12.52207581186912,
}

function BurgerMapComponent({ apiKey }: { apiKey: string }) {
  const { data, error }: SWRResponse<Array<BurgerPlace>, any> = useSWR('/api/burgers')
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  })
  const [currentCenter, setCurrentCenter] = useState({
    lat: currentLocation.latitude,
    lng: currentLocation.longitude,
  })
  const [currentlySelectedRestaurantId, setCurrentlySelectedRestaurantId] = useState('')
  const [showInfoWindow, setShowInfoWindow] = useState(false)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
        if (result.state === 'granted') {
          navigator.geolocation.getCurrentPosition((pos) => {
            setCurrentLocation(pos.coords)
            setCurrentCenter({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            })
          })
        } else if (result.state === 'prompt') {
          console.log('Geolocation is not enabled. Please enable to use this feature')
          setCurrentCenter(defaultPosition)
        } else if (result.state === 'denied') {
          console.log('Geolocation is not enabled. Please enable to use this feature')
        }
        result.onchange = function () {}
      })
    } else {
      alert('Sorry Not available!')
    }
  }, [])

  function getCurrentlySelectedRestaurant(): BurgerPlace {
    const possibleRestaurant = data?.find((burgerPlace) => burgerPlace.id == currentlySelectedRestaurantId)
    if (possibleRestaurant == undefined) {
      throw error
    }
    return possibleRestaurant
  }

  return (
    <div>
      <Typography variant={'h4'}>Find your next burger below</Typography>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '500px',
          }}
          center={currentCenter}
          zoom={13}
          options={{ disableDefaultUI: true }}
          clickableIcons={false}
        >
          <Marker
            position={{
              lat: currentLocation.latitude,
              lng: currentLocation.longitude,
            }}
            label={'You are here'}
          />
          {data?.map((burgerPlace) => (
            <RestaurantMapMarker
              {...burgerPlace}
              key={`burgerMarker: ${burgerPlace.name}:id:${burgerPlace.id}`}
              onClickMarker={(id) => {
                setCurrentCenter(burgerPlace.coordinates)
                setCurrentlySelectedRestaurantId(id)
                setShowInfoWindow(true)
              }}
            />
          ))}
          {showInfoWindow && (
            <RestaurantInfoWindow
              {...getCurrentlySelectedRestaurant()}
              onClickClose={() => {
                setShowInfoWindow(false)
                setCurrentlySelectedRestaurantId('')
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export const BurgerMap = React.memo(BurgerMapComponent)
