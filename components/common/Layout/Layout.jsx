import { Navigation, Header, Footer } from "@/components/common"

const Layout = ({ children }) => {
  return (
    <section className="section-layout">
      <Navigation position="top" />
      <Header />
      <main className="absolute">{children}</main>
      <Footer />
      <Navigation position="bottom"/>
    </section>
  )
}
export default Layout
