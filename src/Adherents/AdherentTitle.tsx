import { useRecordContext } from 'react-admin'

const AdherentTitle = () => {
  const record = useRecordContext()
  return <span>Adhérent {record ? `- ${record.firstName} ${record.lastName}` : ''}</span>
}

export default AdherentTitle
