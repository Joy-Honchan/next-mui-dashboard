'use client'
import { useState, ReactNode, useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios'

interface AuthValueType {
  token: string
  handleToken: (token: string) => void
}

const initValue: AuthValueType = {
  token: '',
  handleToken: () => {}
}

export const AuthContext = createContext(initValue)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const isClient = typeof window !== 'undefined'
  const initToken = isClient ? localStorage.getItem('token') : null
  const [token, setToken] = useState(initToken || '')

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization =
        localStorage.getItem('token')
    }
  }, [token])

  const handleToken = (token: string) => {
    setToken(token)
    localStorage.setItem('token', token)
  }

  return (
    <AuthContext.Provider value={{ token, handleToken }}>
      {children}
    </AuthContext.Provider>
  )
}
