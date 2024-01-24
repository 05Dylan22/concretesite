import { Link } from "react-router-dom"

const SiteMap = () => {
  return (
    <div className="sitemap">
      <h3>Site Map</h3>
      <div className="sitemap-links">
        <Link className="sitemap-links-text" to="/">Home</Link>
        <Link className="sitemap-links-text" to="/about">About</Link>
        <Link className="sitemap-links-text" to="/all-services">Services</Link>
        <Link className="sitemap-links-text" to="/concreterestoration">Concrete Restoration</Link>
        <Link className="sitemap-links-text" to="/concreteremoval+replacement">Concrete Removal & Replacement</Link>
        <Link className="sitemap-links-text" to="/projects">Projects</Link>
        <Link className="sitemap-links-text" to="/before&afters">Before & After Projects</Link>
        <Link className="sitemap-links-text" to="/concreterepair">Concrete Repair</Link>
        <Link className="sitemap-links-text" to="concreteslabs">Concrete Slabs</Link>
      </div>
      <div className="social-links">
        <Link to={"https://www.facebook.com/"}><img className="social-links-imgs" src="https://1000logos.net/wp-content/uploads/2016/11/meta-logo.png" alt="Facebook Logo" /></Link>
        <Link to={"https://www.linkedin.com/"}><img className="social-links-imgs" src="https://logosmarcas.net/wp-content/uploads/2020/03/LinkedIn-Emblema.png" alt="LinkedIn Logo" /></Link>
        <Link to={"https://www.youtube.com/"}><img className="social-links-imgs" src="https://pngimg.com/uploads/youtube/youtube_PNG102349.png" alt="YouTube Logo" /></Link>
        </div>
    </div>
  )
}

export default SiteMap