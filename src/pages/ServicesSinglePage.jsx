import { useParams } from "react-router-dom"
import servicesData from "../servicesdata"
import "../styles/ServicesSingle.css"
import tick from "../assets/services/tick.svg";

function ServicesSinglePage() {
    const {id}=useParams()
    
   const singleservice=servicesData.find(service => service.id ==id);

//    format benifit head
function formatCamelCase(str) {
    return str
      .replace(/([A-Z])/g, ' $1') // Insert space before each uppercase letter
      .replace(/^./, function(str){ return str.toUpperCase(); }) // Capitalize the first letter
      .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize the first letter of each word
      .trim(); // Remove any leading/trailing spaces
  }
  
  return (
    <section className="single-service-page-wrapper">
        {/* <img src="./services/fdesign.svg" alt="" /> */}
<div className="single-service-banner-section">
      <div className="banner-text">
      <h1 className="head">{singleservice.title}</h1>
      <p className="para">{singleservice.description}</p>
      </div>
    </div>
    <div>
        {/* service description + para */}
        <div className="single-service-details">
<h2 className="head">
  Service Description:
</h2>
<p className="para">  {singleservice.details}</p>
        </div>
        {/* image + service includes */}
        <div className="services-includes-image">
  <div className="services-includes-side-image-container">
    <div className="image-wrapper">
      <img src={singleservice.image} alt="service-image" />
    </div>
  </div>
  <aside className="aside">
    <h2>Services Includes:</h2>
    <ul className="services-list">
      {
        singleservice.services.map((eachservice, index) => (
          <li className="eachservice" key={index}>
            <img src={tick} alt="tick-icon" width="24px" />
            {eachservice}
          </li>
        ))
      }
    </ul>
  </aside>
</div>

        {/* benifits */}
        <div className="service-benifits">
            <h2>Benefits </h2>
            <ul>
            {Object.entries(singleservice.benefits).map(([name, content], index) => (
              <li className="each-benefit" key={index}>
                <strong className="head">
                    {formatCamelCase(name)+" : "}
                </strong>
                <p className="para">{ "   " + content}</p>
              </li>
            ))}

            </ul>
        </div>
    </div>
    </section>
  )
}

export default ServicesSinglePage