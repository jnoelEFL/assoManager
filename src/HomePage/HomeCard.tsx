import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Icon from '@mui/material/Icon'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { FC } from 'react'

interface HomeCardProps {
  url: string
  title: string
  introduction: string
  icone: string
}
const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const HomeCard: FC<HomeCardProps> = ({ url, title, introduction, icone }) => {
  return (
    <Link to={url} style={{ textDecoration: 'none' }}>
      <Item>
        <Icon sx={{ fontSize: 96 }}>{icone}</Icon>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {introduction}
          </Typography>
        </CardContent>
      </Item>
    </Link>
  )
}

export default HomeCard
