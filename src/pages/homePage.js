import HpContent from "../pageElements/hpContent"
import "../styles/hpContent.css"
import { useLayoutEffect } from "react"

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <HpContent/>
    </>
  )
}

export default HomePage