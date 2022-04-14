import { FC } from 'react'
import { Link, Slider } from '@mui/material'

const App: FC = () => {
  return (
    <div>
      <h2>
        How much do you like{' '}
        <Link href='https://vitejs.dev/' target='_blank' rel='noopener noreferrer'>
          Vite?
        </Link>
      </h2>
      <Slider />
    </div>
  )
}

export default App
