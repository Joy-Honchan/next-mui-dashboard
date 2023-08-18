import TemplateWithNavbar from 'components/Navbar'

export default function PageLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <TemplateWithNavbar>{children}</TemplateWithNavbar>
}
