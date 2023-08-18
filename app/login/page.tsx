import { Box, Typography } from '@mui/material'
import Inputs from './Inputs'

const Login = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        h3: {
          paddingBottom: 2
        }
      }}
    >
      <Typography variant="h3">Login</Typography>
      <Inputs />
    </Box>
  )
}

export default Login
