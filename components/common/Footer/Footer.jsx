import { Navigation } from "@/components/common"
import Contact from "@/components/ContactUs"

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="contact-card">
        <div className="contact-card__left">
          <h2>Contact</h2>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
    
        <div className="contact-card__right">
          <Contact />
        </div>
      </div>
    </footer>
  )
}
export default Footer