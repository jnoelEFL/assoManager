import { ChipField, Datagrid, DateField, EmailField, List, TextField } from 'react-admin'

const AdherentsList = () => {
  return (
    <List>
      <Datagrid rowClick={'edit'}>
        <TextField source='lastName' textTransform={'uppercase'} label='Nom' />
        <TextField source='firstName' textTransform={'capitalize'} label='Prénom' />
        <EmailField source='email' />
        <DateField source='birthDate' label='Date de naissance' />
        <TextField source='address' label='Adresse' />
        <TextField source='zipCode' label='Code postal' />
        <TextField source='city' label='Ville' />
        <TextField source='phone' label='Téléphone' />
        <ChipField source='activity' label='Activité(s)' />
      </Datagrid>
    </List>
  )
}

export default AdherentsList
