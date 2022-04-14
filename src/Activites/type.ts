export interface NewAdherentModel {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  zipCode: string
  city: string
  birthDate: string
  activity: string
}

export interface AdherentModel extends NewAdherentModel {
  id: string
  createdAt: string
  updatedAt: string
}
