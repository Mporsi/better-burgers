import { Grid } from '@material-ui/core'
import React from 'react'

enum WeekDay {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export function OpeningHours({
  openingHours,
}: {
  openingHours: Array<{ startTime: string; endTime: string }>
}) {
  return (
    <Grid container item xs={12}>
      {Object.values(WeekDay).map((weekday, index) => {
        const currentDayHours =
          openingHours.length > 1 ? openingHours[index] : openingHours[0]
        return (
          <>
            <Grid item xs={4}>
              {weekday}:{' '}
            </Grid>
            <Grid item xs={6}>
              {currentDayHours.startTime}-{currentDayHours.endTime}
            </Grid>
          </>
        )
      })}
    </Grid>
  )
}
