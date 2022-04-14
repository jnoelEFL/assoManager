import { useRecordContext } from 'react-admin'

const ActiviteTitle = () => {
  const record = useRecordContext()
  return <span>Activité {record ? `- ${record.name}` : ''}</span>
}

export default ActiviteTitle
