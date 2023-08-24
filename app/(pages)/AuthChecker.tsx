'use client'
import { useContext, useEffect } from 'react'
import { AuthContext } from 'provider/AuthProvider'
import { useRouter } from 'next/navigation'

export default function AuthChecker({
  children
}: {
  children: React.ReactNode
}) {
  const { token } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!token) {
      router?.push('/signout')
    }
  }, [token])

  if (!token) {
    return null
  }

  return <>{children}</>
}
