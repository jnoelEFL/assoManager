import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Datagrid, List, SimpleList, TextField } from 'react-admin'

const ActivitesList = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={record => `${record.name}`}
          secondaryText={record => `${record.responsable.lastName} ${record.responsable.firstName}`}
        />
      ) : (
        <Datagrid rowClick={'edit'}>
          <TextField source='name' textTransform={'uppercase'} label='Activite' />
          <TextField source='responsable.lastName' textTransform={'uppercase'} label='Nom responsable' />
          <TextField source='responsable.firstName' textTransform={'capitalize'} label='Prénom responsable' />
        </Datagrid>
      )}
    </List>
  )
}

export default ActivitesList
