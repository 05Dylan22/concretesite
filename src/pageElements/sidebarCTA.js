import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "../pageElements/sidebarCTA.css"

const SidebarCTA = ({title, des, cta, linkDestination, hash}) => {
  return (
    <div className="sidebar-cta">
      <p className="sidebar-cta-title">{title}</p>
      <p className="sidebar-cta-des">{des}</p>
      {hash ? <HashLink smooth to="#form"><button className="cta-link">{cta}</button></HashLink> : <Link to={linkDestination}><button className="cta-link">{cta}</button></Link>}
    </div>
  )
}

export default SidebarCTA