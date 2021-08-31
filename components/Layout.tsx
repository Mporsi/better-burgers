import TopBar from './Topmenu/topmenu'
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { ThemeOptions } from '@material-ui/core/styles/createTheme'
import { SWRConfig } from 'swr'

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#fe9738',
    },
    secondary: {
      main: '#E94444',
    },
  },
}
const theme = createTheme(themeOptions)

export default function Layout({
  children,
  HeaderComponent,
}: {
  children: React.ReactNode
  HeaderComponent?: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
        }}
      >
        <CssBaseline />
        <TopBar />
        {HeaderComponent && HeaderComponent}
        <main style={{ marginRight: '10%', marginLeft: '10%' }}>{children}</main>
      </SWRConfig>
    </ThemeProvider>
  )
}
