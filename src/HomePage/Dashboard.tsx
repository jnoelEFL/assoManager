import CardHeader from '@mui/material/CardHeader'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import HomeCard from './HomeCard'

const tuiles = [
  {
    url: '/adherents',
    title: 'Adhérents',
    introduction: 'Gérer les adhérents',
    icone: 'group'
  },
  {
    url: '/activites',
    title: 'Activités',
    introduction: 'Gérer les activités',
    icone: 'sports_soccer'
  }
]

const Dashboard = () => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Administration de l'association" />
          <CardContent>Cette application permet de gérer les différentes parties de l'associations</CardContent>
        </Card>
      </Grid>
      <>
        {tuiles.map(tuile => (
          <Grid item xs={12} sm={6} md={4} key={tuile.title}>
            <HomeCard {...tuile} />
          </Grid>
        ))}
      </>
    </Grid>
  </>
)

export default Dashboard
