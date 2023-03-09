import Image from "next/image"
import { Navigation } from "@/components/common"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Navigation position="top" />
        <div className="header-svg"></div>
        <div className="header__image-box">
          <Image
            src="/images/hong le.jpeg"
            alt="Hong Le Dev"
            width={444.88}
            height={618}
          />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Nice to meet you!</span>
            <span>
              I&apos;m <span className="heading-primary--sub">Hong Le</span>
            </span>
            <span>.</span>
          </h1>
          <p className="heading-secondary">
            Based in London, I&apos;m a front-end developer passionate about
            creating beautiful and practical web apps that users love.
          </p>
        </div>

        <div className="header__cta-button">CONTACT ME</div>
      </div>
    </header>
  )
}

export default Header
