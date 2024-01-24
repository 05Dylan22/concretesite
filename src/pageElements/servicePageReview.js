import "./servicePageReview.css"

const ServicePageReview = ({customer, image, alt, review}) => {
  return (
    <div className="service-page-review-container">
      <img className="service-page-customer" src={customer} alt="Satisfied customer" />
      <p className="service-page-review">{`"` +review + `"`}</p>
      <img className="service-page-project" src={image} alt={alt} />
    </div>
  )
}

export default ServicePageReview