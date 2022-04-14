import { Edit, UpdateParams, useNotify, useRedirect, useRefresh, useUpdate } from 'react-admin'
import AdherentForm from './AdherentForm'
import AdherentTitle from './AdherentTitle'
import { AdherentModel } from './type'

const AdherentEdit = () => {
  const [update] = useUpdate('adherents')
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const adherentSave = (paramData: unknown) => {
    const data = paramData as Partial<UpdateParams<AdherentModel>> | undefined
    console.log(data)
    if (data) {
      update('adherents', { id: data.id, data: { ...data, updatedAt: new Date().toISOString() } })
      notify(`Changes saved`)
      redirect('/adherents')
      refresh()
    }
  }
  return (
    <Edit title={<AdherentTitle />}>
      <AdherentForm onSubmit={adherentSave} />
    </Edit>
  )
}

export default AdherentEdit
