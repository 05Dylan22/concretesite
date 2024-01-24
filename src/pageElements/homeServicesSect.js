import HomeServiceBox from "./homeServiceBox"
import "../styles/homeServiceSect.css"

const HomeServicesSect = ({title}) => {
  const homeServiceBoxDetails = [
    {
      key: "0",
      title: "Concrete Slabs",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://th.bing.com/th/id/R.da15629df48479103ed5cf33a8df84d9?rik=Ptq9WVilwSq9TQ&pid=ImgRaw&r=0",
      destination: "/concreteslabs"
    },

    {
      key: "1",
      title: "Concrete Removal And Placement",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://th.bing.com/th/id/R.17d94b880b4ddf2c09c3a426f39ee6bf?rik=hEWxP5xOorF21w&riu=http%3a%2f%2fpalazzoloconcreteremoval.com%2fwp-content%2fuploads%2f2015%2f08%2fIMG_5953.jpg&ehk=YWWzJR2QaEGVuMmva6lHU1OV5R7m3zczTqf0uCC2d%2fU%3d&risl=&pid=ImgRaw&r=0",
      destination: "/concreteremoval+placement"
    },

    {
      key: "2",
      title: "Concrete Repair",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://th.bing.com/th/id/R.da4ffdc54eb04add5568a9cfa5610012?rik=GiPJAZIP%2b9ajQQ&pid=ImgRaw&r=0",
      destination: "/concreterepair"
    },

    {
      key: "3",
      title: "Concrete Restoration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://th.bing.com/th/id/R.b3ca1b1709ba5359085e11ef9d3d014d?rik=FWcn%2f0VHRRpQyw&riu=http%3a%2f%2fpcshadesofcolor.com%2fwp-content%2fuploads%2f2010%2f08%2f006-2.jpg&ehk=%2fjnnZPwzeyMo1hQEp9g3n8btQhy6yvRczjtzV2zPpLc%3d&risl=&pid=ImgRaw&r=0",
      destination: "/concreterestoration"
    }
  ]

  return (
    <div className="services-home-sect">
      <h2 className="services-home-sect-title">{title}</h2>
      <div className="services-home-selection">
        {homeServiceBoxDetails.map(box => 
          <HomeServiceBox title={box.title} desc={box.desc} img={box.img} key={box.key} destination={box.destination}/>
        )}
      </div>
    </div>
  )
}

export default HomeServicesSect