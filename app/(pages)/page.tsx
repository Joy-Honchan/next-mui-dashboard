import { useMemo } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import CompactBox from 'components/graph/topology'
import ReactChart from 'components/chart/react-chart'
import PieOption from 'components/chart/pie-option'
import { BarLineChart } from 'components/chart/charts'
import { Button } from '@mui/material'

export const metadata = {
  title: 'Dashboard'
}

export default function Home() {
  const pieOption = useMemo(() => PieOption(), [])

  return (
    <Grid container spacing={2} sx={{ height: '100%' }}>
      <Grid item xs={12} md={4} sx={{ height: '50%' }}>
        <Paper
          sx={{
            height: '100%'
          }}
        ></Paper>
      </Grid>
      <Grid item xs={12} md={8} sx={{ height: '50%' }}>
        <Paper sx={{ height: '100%' }}>
          <BarLineChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} sx={{ height: '50%' }}>
        <Paper sx={{ height: '100%' }}>
          <CompactBox />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} sx={{ height: '50%' }}>
        <Paper sx={{ height: '100%' }}>
          <ReactChart option={pieOption} />
        </Paper>
      </Grid>
    </Grid>
    // <Box>
    //   <CompactBox />
    // </Box>
  )
}
