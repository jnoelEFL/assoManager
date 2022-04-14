import { Layout, AppBar, ToggleThemeButton, LayoutProps, AppBarProps } from 'react-admin'
import { Box, Typography } from '@mui/material'
import { createThemeHelper } from './themes'

const CustomAppBar = (props: AppBarProps) => {
  return (
    <AppBar {...props}>
      <Box flex='1'>
        <Typography variant='h6' id='react-admin-title'></Typography>
      </Box>
      <ToggleThemeButton lightTheme={createThemeHelper('light')} darkTheme={createThemeHelper('dark')} />
    </AppBar>
  )
}

export const CustomLayout = (props: LayoutProps) => <Layout {...props} appBar={CustomAppBar} />
