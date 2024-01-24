import PageHero from "./pageHero"
import PageXtraDetails from "./pageXtraDetails"
import SidebarCTA from "./sidebarCTA"

const About = () => {
  return (
    <div>
      <PageHero title={"About Us"} img={"https://th.bing.com/th/id/R.e39c9d702cb03753f9ed9d3646c98bff?rik=uAtRQmQKB13tyg&pid=ImgRaw&r=0"}/>
      <PageXtraDetails lineTitle={"Who We Are"} info={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", <br/>, <br/>, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]}/>
      <div className="home-advisor-div">
        <img src="https://www.dunmar.com/wp-content/uploads/2018/04/home-advisor-top-rated-award.png" alt="Home advisor top rated" />
        <img src="https://www.floorsdirectnj.com/wp-content/uploads/2018/01/EliteService_500x474-2-300x284.png" alt="Home advisor elite service" />
        <img src="https://audiojay.com/wp-content/uploads/2021/03/Home-Advisor-badge-1024x927.png" alt="Home advisor screened and approved" />
      </div>
      <SidebarCTA title={"Get In Touch Today"} des={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} cta={"Contact"} linkDestination={null} hash={true}/>
    </div>
  )
}

export default About