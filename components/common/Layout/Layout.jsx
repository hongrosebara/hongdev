import { Navigation, Header, Footer } from "@/components/common"

const Layout = ({ children }) => {
  return (
    <section className="section-layout">
      <Navigation position="top" />
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  )
}
export default Layout
