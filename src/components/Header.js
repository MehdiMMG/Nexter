import "../styles/main.scss"
import Logo from "../img/logo.png"
import BBCLogo from "../img/logo-bbc.png"
import ForbesLogo from "../img/logo-forbes.png"
import TechcrunchLogo from "../img/logo-techcrunch.png"
import BiLogo from "../img/logo-bi.png"

const Header = () => {
  return (
    <header className="header">
        <img src={Logo} alt="Nexter logo" className="header__logo" />
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">
            view our properties
        </button>
        <div className="header__seenon-text">
            Seen on
        </div>
        <div className="header__seenon-logos">
            <img src={BBCLogo} alt="Seen on logo 1" />
            <img src={ForbesLogo} alt="Seen on logo 2" />
            <img src={TechcrunchLogo} alt="Seen on logo 3" />
            <img src={BiLogo} alt="Seen on logo 4" />
        </div>
    </header>
  )
}

export default Header