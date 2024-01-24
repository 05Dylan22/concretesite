import MapGoogle from "./map"

const BusInfo = () => {

  return (
    <div className="business-info">
      <h1>Concrete Of Jamestown</h1>
      <div className="map-info-div">
        <div className="map-container">
          <div className="map">
            <MapGoogle/>
          </div>
        </div>
        <div className="info-div">
          <p className="businfo-title">
            Location:
          </p>
          <p className="businfo-details">
            817 W High Street
          </p>
          <p className="businfo-title">
            Hours:
          </p>
          <p className="businfo-details">
            Moday-Friday 8am-4pm<br/>
            Saturday-Sunday 8am-12pm
          </p>
          <p className="businfo-title">
            Contact Info:
          </p>
          <p className="businfo-details">
            Email: concreteofjamestown@gmail<br/>
            Phone: 716-923-9300
          </p>
        </div>
      </div>
    </div>
  )
}

export default BusInfo