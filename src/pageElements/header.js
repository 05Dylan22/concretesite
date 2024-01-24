import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const Header = () => {

  const mouseOver = (e) => {
    e.currentTarget.childNodes[0].classList.add("header-link-hover")
    let el = e.currentTarget.childNodes[1]
    el.classList.add("active")
  }

  const mouseLeave = (e) => {
    e.currentTarget.childNodes[0].classList.remove("header-link-hover")
    let el = e.currentTarget.childNodes[1]
    el.classList.remove("active")
  }

  const tapOn = (e) => {
    let el = e.currentTarget.childNodes[1]
    el.classList.add("active")
  }

  const tapOff = (e) => {
    let el = e.currentTarget.childNodes[1]
    if (el.contains(e.target)) return
    el.classList.remove("active")
  }

  return (
    <header className="header">
      <div className="logo-div">
        <button className="logo">
          Concrete Business
        </button>
      </div>
      <div className="nav-div">
        <nav className="nav">
          <Link to="/" className="header-link">Home</Link>
          <Link to="/about" className="header-link">About</Link>
          <div className="header-hover-container" onTouchEnd={tapOff} onTouchStart={tapOn} onMouseLeave={mouseLeave} onMouseOver={mouseOver}>
            <Link to="/all-services" className="header-link" id="services-hover">Services</Link>
            <div className="services-options">
              <Link className="options-text" to="/concreterepair">Concrete Repair</Link>
              <Link className="options-text" to="/concreterestoration">Concrete Restoration</Link>
              <Link className="options-text" to="/concreteslabs">Concrete Slabs</Link>
              <Link className="options-text" to="/concreteremoval+replacement">Concrete Removal & Replacement</Link>
            </div>
          </div>
          <div className="header-hover-container">
            <a href="/" className="header-link" id="projects-hover">Projects</a>
          </div>
          <HashLink smooth to="#form">
            <button className="header-contact-button">Get A Free Quote</button>
          </HashLink>
        </nav>
      </div>
    </header>
  )
}

export default Header