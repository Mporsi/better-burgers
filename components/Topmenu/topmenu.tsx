import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from 'next/link'
import { Button, Link as MUILink, SvgIcon } from '@material-ui/core'
import { LinkProps } from 'next/dist/client/link'
import { IconButton } from '@material-ui/core'
import Logo from '../../public/Logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

// eslint-disable-next-line react/display-name
const LinkBehavior = React.forwardRef((props: LinkProps, ref) => (
  <Link {...props} />
))

export default function TopBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" color={'primary'} elevation={0}>
        <Toolbar variant={'dense'} disableGutters>
          <IconButton color={'secondary'} size={'small'} href={'/'}>
            <SvgIcon viewBox={'0 0 50 50'}>
              <Logo />
            </SvgIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
