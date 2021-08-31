import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

export const dummyData: Array<BurgerPlace> = [
  {
    name: "Moe'z Meat n Burger\n",
    id: 'c24148a4-2182-452f-943e-f4cbc2c3a0c9',
    slug: 'moez-meat-n-burger',
    globalratings: {
      overall: 3.25,
      taste: 3,
      texture: 3,
      visualPresentation: 2,
    },
    openingHours: [
      {
        startTime: '16:00',
        endTime: '22:00',
      },
      {
        startTime: '16:00',
        endTime: '22:00',
      },
      {
        startTime: '16:00',
        endTime: '22:00',
      },
      {
        startTime: '16:00',
        endTime: '22:00',
      },
      {
        startTime: '12:00',
        endTime: '22:00',
      },
      {
        startTime: '12:00',
        endTime: '22:00',
      },
      {
        startTime: '12:00',
        endTime: '21:00',
      },
    ],
    address: {
      streetName: 'Gammel Jernbanevej',
      streetNumber: 1,
      zipCode: 2500,
      town: 'København',
    },
    coordinates: {
      lat: 55.66686329297887,
      lng: 12.520815531151895,
    },
    review: {
      title: 'yum yum burger',
      body: lorem.generateParagraphs(7),
      date: new Date('2019-01-01'),
      pictureSrc: 'moez-burger-pic.jpg',
      myRating: {
        overall: 3.25,
        taste: 3,
        texture: 3,
        visualPresentation: 2,
      },
    },
  },
  {
    name: 'Halifax Valby',
    id: '1e697e37-19e7-48d1-ba77-4bbb93c7db4b',
    slug: 'halifax-valby',
    openingHours: [
      {
        startTime: '11:30',
        endTime: '22:00',
      },
      {
        startTime: '11:30',
        endTime: '22:00',
      },
      {
        startTime: '11:30',
        endTime: '22:00',
      },
      {
        startTime: '11:30',
        endTime: '22:00',
      },
      {
        startTime: '11:30',
        endTime: '22:00',
      },
      {
        startTime: '11:30',
        endTime: '22:00',
      },
      {
        startTime: '11:30',
        endTime: '21:00',
      },
    ],
    globalratings: {
      overall: 3.25,
      taste: 3,
      texture: 3,
      visualPresentation: 2,
    },
    address: {
      streetName: 'Skolegade',
      streetNumber: 9,
      zipCode: 2500,
      town: 'København',
    },
    coordinates: {
      lat: 55.66596709644552,
      lng: 12.512275377950473,
    },
  },
  {
    name: 'Burger King, Ny Ellebjerg ',
    id: 'c06f29d3-4f74-4a12-b474-19e1ccb5f3f4',
    slug: 'burger-king-ny-ellebjerg',
    globalratings: {
      overall: 2,
      taste: 3,
      texture: 1,
      visualPresentation: 1,
    },
    openingHours: [
      {
        startTime: '10:00',
        endTime: '24:00',
      },
    ],
    address: {
      streetName: 'Ellebjergvej',
      streetNumber: 142,
      zipCode: 2450,
      town: 'København SV',
    },
    review: {
      title: 'sloppy burger',
      body: lorem.generateParagraphs(7),
      date: new Date('2019-01-16'),
      pictureSrc: 'burger-king-pic.jpg',
      myRating: {
        overall: 3.25,
        taste: 3,
        texture: 3,
        visualPresentation: 2,
      },
    },
    coordinates: {
      lat: 55.651193333462516,
      lng: 12.509440753101472,
    },
  },
]
