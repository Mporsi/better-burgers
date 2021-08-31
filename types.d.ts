interface BurgerRating {
  overall: number
  taste: number
  texture: number
  visualPresentation: number
}

type Address = {
  streetName: string
  streetNumber: number
  zipCode: number
  town: string
}

interface BurgerPlace {
  name: string
  globalratings: BurgerRating
  coordinates: { lat: number; lng: number }
  address: Address
  openingHours: Array<{ startTime: string; endTime: string }>
  review?: {
    myRating: BurgerRating
    title: string
    body: string
    date: Date
    pictureSrc: string
  }
  id: string
  slug: string
}
