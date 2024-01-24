import PageHero from "../pageElements/pageHero"
import PageXtraDetails from "../pageElements/pageXtraDetails"
import HomeServicesSect from "../pageElements/homeServicesSect"
import { useLayoutEffect } from "react"

const AllServicesPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  //IMORTANT: I THINK THE KEY ERROR IS COMING FROM THE ARRAY INSIDE THE INFO PROP

  return (
    <>
      <PageHero title={"All Services"} img={"https://th.bing.com/th/id/OIP.kg5hzWb8m7ISPbJF3wWxOgHaFj?pid=ImgDet&rs=1"}/>
      <PageXtraDetails lineTitle={"Who We Are"}/>
      <HomeServicesSect title={"How Can We Help You"}/>
    </>
  )
}

export default AllServicesPage