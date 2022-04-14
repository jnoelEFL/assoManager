import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { SimpleForm, TextInput } from 'react-admin'

const Separator = () => <Box pt='1em' />

interface ActiviteFormProps {
  onSubmit: (data: unknown) => void
}

const ActiviteForm: FC<ActiviteFormProps> = ({ onSubmit }) => {
  return (
    <SimpleForm onSubmit={onSubmit}>
      <Typography variant='h6' gutterBottom>
        Activités
      </Typography>
      <TextInput source='name' isRequired fullWidth label='Activité' />
      <Separator />
      <Typography variant='h6' gutterBottom>
        Identité du responsable
      </Typography>
      <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          <TextInput source='responsable.firstName' isRequired fullWidth label='Prénom' />
        </Box>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          <TextInput source='responsable.lastName' isRequired fullWidth label='Nom' />
        </Box>
      </Box>
    </SimpleForm>
  )
}

export default ActiviteForm
