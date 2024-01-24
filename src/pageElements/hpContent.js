import HomeServicesSect from "./homeServicesSect"
import LoopItem from "./loopItem"
import PageXtraDetails from "./pageXtraDetails"
import SidebarCTA from "./sidebarCTA"
import TestimonialSect from "./testimonialSect"
import {useState, useEffect} from "react"

const HpContent = () => {
  const loopItems = [
    {
      key: "projectOne",
      profileImg: "https://th.bing.com/th/id/OIP.vQcH6uRqJd1SIpce-41uUgHaLH?pid=ImgDet&rs=1",
      review: "Words cant express how happy I am about this job. Concrete of Jamestown was able to make the perfect patio and now I have the backyard of my dreams!",
      projectImg: "https://i.pinimg.com/originals/60/e6/34/60e63448d62ce76988aaa33bc1c2a38c.jpg"
    },

    {
      key: "projectTwo",
      profileImg: "https://th.bing.com/th/id/R.8ebcae52020758bfb51550f6c30f285a?rik=egPqt6R0ObI2%2fQ&pid=ImgRaw&r=0",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      projectImg: "https://i.pinimg.com/originals/19/a4/e1/19a4e1ec1c0be86edb8a6e0853fc40c5.png"
    },

    {
      key: "projectThree",
      profileImg: "https://th.bing.com/th/id/R.4e76a56cd738ebf56bf134ff76ad334f?rik=woT3Ct3sJjMPxg&pid=ImgRaw&r=0",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      projectImg: "https://th.bing.com/th/id/R.4586779ef4ea138b51c087db3c142045?rik=W2Pr53jVtGZ42A&pid=ImgRaw&r=0"
    },

    {
      key: "projectFour",
      profileImg: "https://th.bing.com/th/id/R.a53725b6b43db107819d73848baa31bd?rik=aFe9eGC8Uc3TBA&pid=ImgRaw&r=0",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectImg: "https://th.bing.com/th/id/OIP.umYsKYQjnLYZX2zGPCK_hAHaFj?pid=ImgDet&rs=1"
    }
  ]

  const loopElements = loopItems.map(item => 
      <LoopItem key={item.key} profileImg={item.profileImg} review={item.review} projectImg={item.projectImg}/>
    )

  const [loopNumber, setLoopNumber] = useState(0)
  const [showElement, setShowElement] = useState(loopElements[3])


  const autoLoopItems = () => {
    setTimeout(() => {
      setShowElement(loopElements[loopNumber])
      setLoopNumber(loopNumber + 1)
      if (loopNumber === 3) setLoopNumber(0)
    },4500)
  }

  useEffect(() => {
    autoLoopItems()
  }, [loopNumber])


  return (
    <div>
      <div className="home-hero">
        <h1>Concrete Of Jamestown</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <PageXtraDetails lineTitle={"Why Choose Us"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} info2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}/>
      {/* {<div className="loop-wrapper"> */}
        {/* <div className="auto-loop-projects"> */}
          {/* {showElement} */}
        {/* </div> */}
      {/* </div>} */}
      <SidebarCTA title={"View More Projects!"} des={"Excepteur sint occaecat, mollit anim id est laborum."} cta={"View Projects"} linkDestination={"/projects"} hash={false}/>
      <HomeServicesSect title={"Here's How We Can Help You"}/>
      <TestimonialSect/>
      <SidebarCTA title={"Get In Touch Today!"} des={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} cta={"Contact"} linkDestination={null} hash={true}/>
    </div>
  )
}

export default HpContent