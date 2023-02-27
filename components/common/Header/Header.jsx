const Header = () => {
  return (
    <header className="header">
      <div className="header-svg"></div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Nice to meet you!</span>
          <span>
            I'm <span className="heading-primary--sub">Hong Le</span>
          </span>
          <span>.</span>
        </h1>
        <p className="heading-secondary">Based in Lisbon, I'm a front-end developer passionate about creating beautiful and practical web apps that users love.</p>
      </div>

      <div className="header__image-box">
        <img src="/images/image-profile-desktop.webp" alt="" />
      </div>

      <div className="header__cta-button">
        CONTACT ME
      </div>
    </header>
  )
}
export default Header
