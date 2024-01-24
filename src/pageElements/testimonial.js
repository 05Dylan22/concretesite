import "../pageElements/testimonial.css"

const Testimonial = ({imgSrc, personName, review}) => {
  return (
    <div className="testimonial">
      <div className="testimonial-person">
        <img src={imgSrc} alt="Headshot profile image" />
        <p>{personName}</p>
      </div>
      <div className="testimonial-review">
        <span className="testimonial-quote">&quot;</span>{review}<span className="testimonial-quote2">&quot;</span>
      </div>
    </div>
  )
}

export default Testimonial