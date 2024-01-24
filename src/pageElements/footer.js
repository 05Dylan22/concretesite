import Contact from "./contact"
import BusInfo from "./busInfo"
import SiteMap from "./sitemap"
import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <footer className="footer">
      <h1 id="form" className="form-header">Get A Free Quote</h1>
      <div className="contact-container">
        <Contact/>
      </div>
      <div className="bottom-footer">
        <BusInfo/>
        <SiteMap/>
      </div>
      <p className="footer-copyright">@Copyright all rights reserved | <Link to={"/privacypolicy"} className="privacy-policy">Privacy Policy</Link></p>
    </footer>
  )
}

export default Footer