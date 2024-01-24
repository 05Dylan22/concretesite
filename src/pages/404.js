import { Link } from "react-router-dom"
import "../styles/404.css"
import { useLayoutEffect } from "react"
import TestimonialSect from "../pageElements/testimonialSect"

const Page404 = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  
  return (
    <div className="container-404">
      <h1 className="heading-404">Hmm, The Page You're Looking For Can't Be Found</h1>
      <h2  className="subhead-404">You can view all our services by clicking the button below</h2>
      <Link to="/all-services"><button className="button-404">All Services</button></Link>
    </div>
  )
}

export default Page404