'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const SignOut = () => {
  const router = useRouter()

  useEffect(() => {
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = undefined

    router.replace('/login')
  })

  return null
}

export default SignOut
