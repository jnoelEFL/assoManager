import { Edit, UpdateParams, useNotify, useRedirect, useRefresh, useUpdate } from 'react-admin'
import ActiviteForm from './ActiviteForm'
import ActiviteTitle from './ActiviteTitle'
import { AdherentModel } from './type'

const ActiviteEdit = () => {
  const [update] = useUpdate()
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const activiteSave = (paramData: unknown) => {
    const data = paramData as Partial<UpdateParams<AdherentModel>> | undefined
    console.log(data)
    if (data) {
      update('activites', { id: data.id, data: { ...data, updatedAt: new Date().toISOString() } })
      notify(`Changes saved`)
      redirect('/activites')
      refresh()
    }
  }
  return (
    <Edit title={<ActiviteTitle />}>
      <ActiviteForm onSubmit={activiteSave} />
    </Edit>
  )
}

export default ActiviteEdit
