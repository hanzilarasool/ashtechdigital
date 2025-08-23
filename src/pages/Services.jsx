import { Link } from "react-router-dom";
import servicesData from "../servicesdata";
import "../styles/Services.css";

function Services() {
  return (
    <section className="services-page-wrapper">
      <div className="services-page-title">
        <h1 className="services-title">From Concept to Launch, We Deliver Complete Digital Excellence</h1>
      </div>
      <section className="services-sections-grid">
    
        {servicesData.map((service) => (
          // 1. Use the unique 'service.id' for the key. It's stable and reliable.
          // 2. Add a className to the Link for better styling control.
          <Link to={`/services/${service.id}`} key={service.id} className="service-card-link">
            <div className="service-card">
              <div className="service-card-icon">
                {/* Improved alt text for accessibility */}
                <img src={service.iconImage} alt={`${service.title} icon`} />
              </div>
              <div className="service-card-text">
                {/* Use <h2> for card titles for better page structure */}
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
                <p className="line-full"></p>
                <p className="line-full-1"></p>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
}

export default Services;