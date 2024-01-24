import "./pageElements/header.css"
import "./pageElements/footer.css"
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import AllServicesPage from "./pages/allServicesPage";
import {Routes, Route} from "react-router-dom"
import Header from "./pageElements/header";
import Footer from "./pageElements/footer";
import Page404 from "./pages/404";
import PrivacyPolicy from "./pages/privacyPolicy";
import IndServicesPage from "./pages/indServicesPage";

function App() {


  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/all-services" element={<AllServicesPage/>}/>
          <Route path="/concreteslabs" element={<IndServicesPage service={"Concrete Slabs"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} info2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} projectImg={"https://i0.wp.com/www.brisbaneconcreteservice.com/wp-content/uploads/2011/07/p7020211.jpg"} heroImg={"https://th.bing.com/th/id/R.da15629df48479103ed5cf33a8df84d9?rik=Ptq9WVilwSq9TQ&pid=ImgRaw&r=0"} alt={"Finished concrete slab project"} review={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} customer={"https://th.bing.com/th/id/R.14f0d99ac07d35bea61431f492429c30?rik=lS%2fN2%2b8XU2O5Ag&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fedited-TSP_3683-1.jpg&ehk=b6SVTDjHi%2fo2KGIQMhg1OVOQo4rv5vWKM0%2be0%2bnc9Fs%3d&risl=&pid=ImgRaw&r=0"}/>}/>
          <Route path="/concreterepair" element={<IndServicesPage service={"Concrete Repair"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} info2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} projectImg={"https://th.bing.com/th/id/R.da4ffdc54eb04add5568a9cfa5610012?rik=GiPJAZIP%2b9ajQQ&pid=ImgRaw&r=0"} heroImg={"https://th.bing.com/th/id/R.da15629df48479103ed5cf33a8df84d9?rik=Ptq9WVilwSq9TQ&pid=ImgRaw&r=0"} alt={"Concrete repair finished project"} review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} customer={"https://th.bing.com/th/id/R.7507dd026deb06281c8378adc21a1d4d?rik=Btk0%2bKzG7WPosg&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fportrait-profile-013.jpg&ehk=Qlhl%2fEpKalGz7JhqS04F8t2u4xrKGF3BSj5%2bHLSZxIA%3d&risl=&pid=ImgRaw&r=0"}/>}/>
          <Route path="/concreterestoration" element={<IndServicesPage service={"Concrete Restoration"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} info2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} projectImg={"https://th.bing.com/th/id/R.b3ca1b1709ba5359085e11ef9d3d014d?rik=FWcn%2f0VHRRpQyw&riu=http%3a%2f%2fpcshadesofcolor.com%2fwp-content%2fuploads%2f2010%2f08%2f006-2.jpg&ehk=%2fjnnZPwzeyMo1hQEp9g3n8btQhy6yvRczjtzV2zPpLc%3d&risl=&pid=ImgRaw&r=0"} heroImg={"https://th.bing.com/th/id/R.da15629df48479103ed5cf33a8df84d9?rik=Ptq9WVilwSq9TQ&pid=ImgRaw&r=0"} alt={"Finished concrete restoration project"} review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} customer={"https://th.bing.com/th/id/R.14f0d99ac07d35bea61431f492429c30?rik=lS%2fN2%2b8XU2O5Ag&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fedited-TSP_3683-1.jpg&ehk=b6SVTDjHi%2fo2KGIQMhg1OVOQo4rv5vWKM0%2be0%2bnc9Fs%3d&risl=&pid=ImgRaw&r=0"}/>}/>
          <Route path="/concreteremoval+replacement" element={<IndServicesPage service={"Concrete Removal And Replacement"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} info2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} projectImg={"https://th.bing.com/th/id/R.17d94b880b4ddf2c09c3a426f39ee6bf?rik=hEWxP5xOorF21w&riu=http%3a%2f%2fpalazzoloconcreteremoval.com%2fwp-content%2fuploads%2f2015%2f08%2fIMG_5953.jpg&ehk=YWWzJR2QaEGVuMmva6lHU1OV5R7m3zczTqf0uCC2d%2fU%3d&risl=&pid=ImgRaw&r=0"} heroImg={"https://th.bing.com/th/id/R.da15629df48479103ed5cf33a8df84d9?rik=Ptq9WVilwSq9TQ&pid=ImgRaw&r=0"} alt={"Concrete removal project"} review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} customer={"https://th.bing.com/th/id/R.1ccea548839a965cc6c68e19b4dc7241?rik=E5mXZbyM4hgR4A&pid=ImgRaw&r=0"}/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
