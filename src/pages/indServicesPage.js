import PageHero from "../pageElements/pageHero"
import PageXtraDetails from "../pageElements/pageXtraDetails"
import ServicePageReview from "../pageElements/servicePageReview"
import SidebarCTA from "../pageElements/sidebarCTA"
import { useLayoutEffect } from "react"


const IndServicesPage = ({service, info, info2, projectImg, heroImg, customer, alt, review}) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <PageHero title={service} img={heroImg}/>
      <PageXtraDetails lineTitle={service} info={info} info2={info2}/>
      <ServicePageReview customer={customer} review={review} image={projectImg} alt={alt}/>
      <SidebarCTA title={"Ready For Service"} des={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} cta={"Contact Us!"}/>
    </>
  )
}

export default IndServicesPage