import axios from 'axios'

export interface CommmuneModel {
  codePostal: string
  codeCommune: string
  nomCommune: string
  libelleAcheminement: string
}

export const getCommunes = async (zipCode: string): Promise<CommmuneModel[]> => {
  const response = await axios.get(`https://apicarto.ign.fr/api/codes-postaux/communes/${zipCode}`)
  return response.data
}
