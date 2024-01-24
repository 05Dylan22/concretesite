import Testimonial from "./testimonial"
import "../pageElements/testimonialSect.css"

const TestimonialSect = () => {
  const testimonialDetails = [
    {
      key: "0",
      imgSrc: "https://th.bing.com/th/id/R.7507dd026deb06281c8378adc21a1d4d?rik=Btk0%2bKzG7WPosg&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fportrait-profile-013.jpg&ehk=Qlhl%2fEpKalGz7JhqS04F8t2u4xrKGF3BSj5%2bHLSZxIA%3d&risl=&pid=ImgRaw&r=0",
      personName: "Jane Smith",
      review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },

    {
      key: "1",
      imgSrc: "https://th.bing.com/th/id/R.14f0d99ac07d35bea61431f492429c30?rik=lS%2fN2%2b8XU2O5Ag&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fedited-TSP_3683-1.jpg&ehk=b6SVTDjHi%2fo2KGIQMhg1OVOQo4rv5vWKM0%2be0%2bnc9Fs%3d&risl=&pid=ImgRaw&r=0",
      personName: "John Smith",
      review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    {
      key: "2",
      imgSrc: "https://th.bing.com/th/id/R.1ccea548839a965cc6c68e19b4dc7241?rik=E5mXZbyM4hgR4A&pid=ImgRaw&r=0",
      personName: "Jane Smith",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ]

  return (
    <div className="testimonial-home-section">
      <h2>Join The Hundreds Of Other Satisfied Customers</h2>
      {testimonialDetails.map(item => 
        <Testimonial imgSrc={item.imgSrc} personName={item.personName} review={item.review} key={item.key}/>
      )}
    </div>
  )
}

export default TestimonialSect