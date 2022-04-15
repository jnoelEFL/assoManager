import { Admin, Resource } from 'react-admin'
import localStorageDataProvider from 'ra-data-local-storage'
import { defaultMockData } from './data/mockUser'
import UserIcon from '@mui/icons-material/Group'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import { AdherentCreate, AdherentEdit, AdherentsList } from './Adherents'
import Dashboard from './HomePage/Dashboard'
import { CustomLayout } from './CustomLayout'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useLocalStorage } from '@caldwell619/react-hooks'
import { createThemeHelper } from './themes'
import { ActiviteCreate, ActiviteEdit, ActivitesList } from './Activites'

type ThemeName = 'dark' | 'light'

const AppRouter = () => {
  const dataProvider = localStorageDataProvider({
    defaultData: process.env.NODE_ENV === 'development' ? defaultMockData : undefined
  })

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme] = useLocalStorage<ThemeName>('theme', prefersDarkMode ? 'dark' : 'light', true)

  return (
    <Admin
      dataProvider={dataProvider}
      dashboard={Dashboard}
      layout={CustomLayout}
      theme={createThemeHelper(theme)}
      title='AssoManager'
    >
      <Resource
        name='adherents'
        list={AdherentsList}
        edit={AdherentEdit}
        create={AdherentCreate}
        icon={UserIcon}
        options={{ label: 'Adhérents' }}
      />
      <Resource
        name='activites'
        list={ActivitesList}
        edit={ActiviteEdit}
        create={ActiviteCreate}
        icon={SportsSoccerIcon}
        options={{ label: 'Activités' }}
      />
    </Admin>
  )
}

export default AppRouter
