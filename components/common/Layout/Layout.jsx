import { Header, Footer } from "@/components/common"

const Layout = ({ children }) => {
  return (
    <section className="section-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  )
}
export default Layout
