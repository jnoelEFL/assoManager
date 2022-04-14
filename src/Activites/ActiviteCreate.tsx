import { Create, CreateProps, UpdateParams, useCreate, useNotify, useRedirect, useRefresh } from 'react-admin'
import AdherentForm from './ActiviteForm'
import { AdherentModel } from './type'
import { v4 as uuidv4 } from 'uuid'

const ActiviteCreate = (props: CreateProps) => {
  const [create] = useCreate()
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const activityCreate = (paramData: unknown) => {
    const data = paramData as Partial<UpdateParams<AdherentModel>> | undefined
    if (data) {
      create('activites', {
        data: { ...data, id: uuidv4(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
      })
      notify(`Activite created`)
      redirect('/activites')
      refresh()
    }
  }

  return (
    <Create {...props}>
      <AdherentForm onSubmit={activityCreate} />
    </Create>
  )
}

export default ActiviteCreate
