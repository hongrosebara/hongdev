import Link from "next/link"
import Image from "next/image"

const Navigation = ({ position }) => {
  return (
    <div className={`navigation navigation--${position}`}>
      <div className="navigation-brand">
        <Link href="/">
          <span className="navigation-logo">adamkeyes</span>
         </Link>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items-list">
          <li className="main-nav__item">
            <Image src="/images/icon-github.svg" width={25} height={25} />
          </li>
          <li className="main-nav__item">
          <Image src="/images/icon-linkedin.svg" width={25} height={25} />
          </li>
          <li className="main-nav__item">
          <Image src="/images/icon-twitter.svg" width={25} height={25} />
          </li>
          <li className="main-nav__item">
          <Image src="/images/icon-frontend-mentor.svg" width={25} height={25} />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation