'use client'
import { Box, TextField, Button } from '@mui/material'
import { useState, ChangeEventHandler, useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { AuthContext } from 'provider/AuthProvider'

const Inputs = () => {
  const router = useRouter()
  const { handleToken } = useContext(AuthContext)
  const [userName, setuserName] = useState('')
  const [password, setpassword] = useState('')
  const [userError, setUserError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleLogin = async () => {
    const res = await axios.post('/api/auth', {
      userName,
      password
    })

    if (res.data.msg === 'Login Failed') {
      setUserError(res.data.userName)
      setPasswordError(res.data.password)
    } else if (res.data.msg === 'Login Success') {
      handleToken(res.data.token)
      localStorage.setItem('token', res.data.token)
      axios.defaults.headers.common.Authorization = `${res.data.token}`
      router.push('/')
    }
  }

  const handleUserName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setuserName(e.target.value)
  }
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setpassword(e.target.value)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '.MuiTextField-root, .MuiButton-root': {
          marginBottom: 1
        }
      }}
    >
      <TextField
        value={userName}
        label="Username"
        onChange={handleUserName}
        error={!!userError}
        helperText={userError}
      />
      <TextField
        value={password}
        label="Password"
        onChange={handlePassword}
        error={!!passwordError}
        helperText={passwordError}
      />
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  )
}

export default Inputs
