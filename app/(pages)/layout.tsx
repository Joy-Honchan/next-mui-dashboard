import TemplateWithNavbar from 'components/Navbar'
import AuthChecker from './AuthChecker'

export default function PageLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AuthChecker>
      <TemplateWithNavbar>{children}</TemplateWithNavbar>
    </AuthChecker>
  )
}
