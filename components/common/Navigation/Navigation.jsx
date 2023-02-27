

const Navigation = ({ position }) => {
  return (
    <div className={`navigation navigation--${position}`}>
      <div className="navigation-brand">
         <span className="navigation-logo">Hong Le</span>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items-list">
          <li className="main-nav__item">Linkedin</li>
          <li className="main-nav__item">Linkedin</li>
          <li className="main-nav__item">Linkedin</li>
          <li className="main-nav__item">Linkedin</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation