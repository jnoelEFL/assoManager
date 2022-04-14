import { Datagrid, List, TextField } from 'react-admin'

const ActivitesList = () => {
  return (
    <List>
      <Datagrid rowClick={'edit'}>
        <TextField source='name' textTransform={'uppercase'} label='Activite' />
        <TextField source='responsable.lastName' textTransform={'uppercase'} label='Nom responsable' />
        <TextField source='responsable.firstName' textTransform={'capitalize'} label='Prénom responsable' />
      </Datagrid>
    </List>
  )
}

export default ActivitesList
