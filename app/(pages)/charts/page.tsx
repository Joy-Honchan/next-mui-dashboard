import ReactChart from 'components/chart/react-chart'
import PieOption from 'components/chart/pie-option'
import { useMemo } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { BarLineChart } from 'components/chart/charts'

const Charts = () => {
  const pieOption = useMemo(() => PieOption(), [])
  return (
    <Grid container spacing={2} sx={{ height: '100%', alignItems: 'stretch' }}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ height: '100%' }}>
          <ReactChart option={pieOption} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ height: '100%' }}>
          <BarLineChart />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Charts
