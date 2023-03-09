import { Header, Footer } from "@/components/common"

const Layout = ({ children }) => {
  return (
    <section className="section-layout">
      <div className="layout-container">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </section>
  )
}
export default Layout
