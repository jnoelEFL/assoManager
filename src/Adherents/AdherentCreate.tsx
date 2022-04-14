import { Create, CreateProps, UpdateParams, useCreate, useNotify, useRedirect, useRefresh } from 'react-admin'
import AdherentForm from './AdherentForm'
import { AdherentModel } from './type'
import { v4 as uuidv4 } from 'uuid'

const AdherentCreate = (props: CreateProps) => {
  const [create] = useCreate()
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const adherentCreate = (paramData: unknown) => {
    const data = paramData as Partial<UpdateParams<AdherentModel>> | undefined
    console.log(data)
    if (data) {
      create('adherents', {
        data: { ...data, id: uuidv4(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
      })
      notify(`Adherent created`)
      redirect('/adherents')
      refresh()
    }
  }

  return (
    <Create {...props}>
      <AdherentForm onSubmit={adherentCreate} />
    </Create>
  )
}

export default AdherentCreate
