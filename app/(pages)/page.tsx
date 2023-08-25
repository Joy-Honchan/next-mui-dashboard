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
            height: '100%',
            '.go-btn': {
              width: '100px',
              backgroundColor: 'pink',
              padding: '5px',
              '.go-span': { position: 'relative', transition: 'all 0.5s' },
              '&:hover': {
                span: {
                  paddingRight: '15px',
                  transition: 'all 0.5s'
                },
                '.go-span::after': {
                  content: '"\u00BB"',
                  position: 'absolute',
                  right: 0,
                  transition: 'all 0.5s'
                }
              }
            },
            '.img-container': {
              maxWidth: '250px',
              position: 'relative',
              img: {
                width: '100%'
              },
              '&:hover': {
                '.overlay': {
                  height: '100%',
                  transition: 'all 0.5s'
                }
              }
            },
            '.overlay': {
              position: 'absolute',
              inset: 0,
              top: 'auto',
              backgroundColor: 'rgba(0,0,0,0.5)',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 0,
              overflow: 'hidden',
              transition: 'all 3s',
              '.click-btn': {
                color: 'white',
                backgroundColor: 'blue',
                padding: '10px',
                borderRadius: '10px'
              }
            }
          }}
        >
          <button className="go-btn">
            <span className="go-span">Go</span>
          </button>

          <div className="img-container">
            <img src="https://picsum.photos/id/1/200/300" alt="computer" />

            <div className="overlay">
              <button className="click-btn">Click Here</button>
            </div>
          </div>
        </Paper>
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
