import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Link from 'next/link'
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/Logout'
import deCapitalize from 'utils/deCapitalize'

const drawerWidth = 240

export default function ClippedDrawer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
          <Link href={'/signout'} prefetch={false}>
            <Button color="inherit" startIcon={<LogoutIcon />}>
              Sign Out
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'Posts', 'Todo', 'Charts', 'PlainChart'].map(
              (text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ a: { width: '100%' } }}
                >
                  <Link
                    href={text === 'Home' ? '/' : `/${deCapitalize(text)}/`}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}
      >
        <Toolbar />
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </Box>
    </Box>
  )
}
