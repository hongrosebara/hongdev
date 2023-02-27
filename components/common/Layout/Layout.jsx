import { Navigation, Header, Footer } from "@/components/common"

const Layout = ({ children }) => {
  return (
    <section className="section-layout">
      <Navigation />
      <Header />
      <main className="absolute">{children}</main>
      <Footer />
    </section>
  )
}
export default Layout
