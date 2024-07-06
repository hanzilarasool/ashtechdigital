import { Link } from "react-router-dom";
import servicesData from "../servicesdata";
import "../styles/Services.css"

import { useState } from "react"

function Services() {
    const [data] = useState(servicesData);
  return (
   <section className="services-page-wrapper">
 
   <div className="services-page-title">
   <h1 className="services-title">From Concept to Launch, We Deliver Complete Digital Excellence</h1>
   </div>
     <section className="servies-sections-grid">
{
    data.map((service,index)=>(
       <Link to={`/services/${service.id}`} key={index}>
        <div className="service-card" key={index}>
<div className="service-card-icon">
<img src={service.iconImage} alt="icon" />
</div>
<div className="service-card-text">
<h1>{service.title}</h1>
<p>{service.description}</p>
</div>
<p className="line-full"></p>
<p className="line-full-1"></p>
        </div>
       </Link>
    ))
}

    </section>

   </section>
  )
}

export default Services