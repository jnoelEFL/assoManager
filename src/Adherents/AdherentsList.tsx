import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import {
  ChipField,
  Datagrid,
  DateField,
  EmailField,
  List,
  ReferenceArrayField,
  SimpleList,
  SingleFieldList,
  TextField
} from 'react-admin'

const AdherentsList = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <List title={'Liste des adhérents'}>
      {isSmall ? (
        <SimpleList
          primaryText={record => `${record.lastName} ${record.firstName}`}
          secondaryText={record => `${record.email}`}
        />
      ) : (
        <Datagrid rowClick={'edit'}>
          <TextField source='lastName' textTransform={'uppercase'} label='Nom' />
          <TextField source='firstName' textTransform={'capitalize'} label='Prénom' />
          <EmailField source='email' />
          <DateField source='birthDate' label='Date de naissance' />
          <TextField source='address' label='Adresse' />
          <TextField source='zipCode' label='Code postal' />
          <TextField source='city' label='Ville' />
          <TextField source='phone' label='Téléphone' />
          <ReferenceArrayField label='Activité(s)' reference='activites' source='activity'>
            <SingleFieldList>
              <ChipField source='name' />
            </SingleFieldList>
          </ReferenceArrayField>
        </Datagrid>
      )}
    </List>
  )
}

export default AdherentsList
