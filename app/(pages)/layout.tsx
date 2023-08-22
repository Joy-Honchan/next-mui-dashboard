'use client'
import { useContext, useEffect } from 'react'
import TemplateWithNavbar from 'components/Navbar'
import { AuthContext } from 'provider/AuthProvider'
import { useRouter } from 'next/navigation'

export default function PageLayout({
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

  return <TemplateWithNavbar>{children}</TemplateWithNavbar>
}
