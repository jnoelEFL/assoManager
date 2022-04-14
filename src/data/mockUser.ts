import { v4 as uuidv4 } from 'uuid'

export const defaultMockData = {
  adherents: [
    {
      id: uuidv4(),
      firstName: 'Julien',
      lastName: 'NOEL',
      birthDate: new Date('1979-08-13').toISOString(),
      email: 'j.noel28@gmail.com',
      phone: '0609894378',
      address: '1 rue de la paix',
      zipCode: '75001',
      city: 'Paris',
      activity: 'Football',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]
}
