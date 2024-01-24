import { Link } from "react-router-dom"
import "../styles/homeServiceBox.css"

const HomeServiceBox = ({title, desc, img, destination}) => {
  return (
    <div className="home-service-box" style={{backgroundImage: `url(${img})`}}>
      <Link to={destination}>
        <div className="color-hover-service-box">
          <div className="service-box-details-div">
            <p className="home-service-box-title">{title}</p>
            <p className="home-service-box-desc">
              {desc}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeServiceBox