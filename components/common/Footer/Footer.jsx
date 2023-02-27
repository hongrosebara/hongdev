import { Navigation } from "@/components/common"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-card">
        <div className="contact-card__left">
          <h2>Contact</h2>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        <div className="contact-card__right">
          <div className="input-group">
            <div className="input-group__name">NAME</div>
            <div className="input-group__email">EMAIL</div>
            <div className="input-group__message">MESSAGE</div>
            <div className="input-group__submit">SEND MESSAGE</div>
          </div>
        </div>
      </div>

      <hr />
      <Navigation />
    </footer>
  )
}
export default Footer