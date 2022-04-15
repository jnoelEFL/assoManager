import { getCommunes } from '@/api/communes'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC, useState, useEffect } from 'react'
import {
  DateInput,
  SimpleForm,
  TextInput,
  SelectInput,
  SelectInputProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ChipField
} from 'react-admin'
import { useWatch } from 'react-hook-form'

const Separator = () => <Box pt='1em' />

interface AdherentFormProps {
  onSubmit: (data: unknown) => void
}

const CityInput = (props: SelectInputProps) => {
  const zipCode = useWatch({ name: 'zipCode' })
  const [cities, setCities] = useState<{ id: string; name: string }[]>([])

  useEffect(() => {
    if (zipCode) {
      getCommunes(zipCode).then(communes => {
        setCities(communes.map(commune => ({ id: commune.nomCommune, name: commune.nomCommune })))
      })
    }
  }, [zipCode])
  return <SelectInput choices={zipCode ? cities : []} {...props} emptyValue={null} />
}

const AdherentForm: FC<AdherentFormProps> = ({ onSubmit }) => {
  return (
    <SimpleForm onSubmit={onSubmit}>
      <Typography variant='h6' gutterBottom>
        Identité
      </Typography>
      <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          <TextInput source='firstName' isRequired fullWidth label='Prénom' />
        </Box>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          <TextInput source='lastName' isRequired fullWidth label='Nom' />
        </Box>
      </Box>
      <TextInput source='email' type='email' isRequired fullWidth label='Email' />
      <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          <DateInput source='birthDate' isRequired fullWidth label='Date de naissance' />
        </Box>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          <TextInput source='phone' isRequired fullWidth label='Téléphone' />
        </Box>
      </Box>
      <Separator />
      <Typography variant='h6' gutterBottom>
        Adresse
      </Typography>
      <TextInput source='address' isRequired fullWidth label='Adresse' />
      <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          <TextInput source='zipCode' isRequired fullWidth label='Code postal' />
        </Box>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          <CityInput source='city' isRequired fullWidth label='Ville' />
        </Box>
      </Box>
      <Separator />
      <Typography variant='h6' gutterBottom>
        Activités
      </Typography>
      <ReferenceArrayInput source='activity' reference='activites'>
        <SelectArrayInput label='Activité(s)' fullWidth isRequired>
          <ChipField source='name' />
        </SelectArrayInput>
      </ReferenceArrayInput>
    </SimpleForm>
  )
}

export default AdherentForm
