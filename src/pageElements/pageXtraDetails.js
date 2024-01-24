import "../styles/pageXtraDetails.css"

const PageXtraDetails = ({lineTitle, info, info2}) => {
  return (
    <div className="pg-xtra-details">
        <div className="pg-xtra-details-title-div">
          <div className="pg-xtra-details-empty-line"></div>
          <p>{lineTitle}</p>
        </div>
        <div className="pg-xtra-details-info">
          <p>{info}</p>
          <p>{info2}</p>
        </div>
      </div>
  )
}

export default PageXtraDetails