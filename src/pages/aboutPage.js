import About from "../pageElements/about"
import "../pageElements/aboutpage.css"
import { useLayoutEffect } from "react"

const AboutPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
      <About/>
    </div>
  )
}

export default AboutPage