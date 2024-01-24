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
      <PageXtraDetails lineTitle={"Who We Are"} info={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", <br/>, <br/>, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]}/>
      <HomeServicesSect title={"How Can We Help You"}/>
    </>
  )
}

export default AllServicesPage