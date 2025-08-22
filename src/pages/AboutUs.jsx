// AboutUs.js
import teamMembers from '../teammember';
import testimonials from '../testimonials';
import '../styles/AboutUs.css';
// import visionimg from  "../assets/about/vision.png"
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="about-us-wrapper">

   <div className='our-vision-container'>
<div className='our-vision-image-container'>

<img src="./about/it-services1.png" alt="vision" width="300px" className='.round-image' />

</div>
<div className='our-vision-text-container'>
    <h2 className='sub-head-text'>When you choose ASH Tech Digital Solutions, you are opting for excellence.</h2>
    <h3 className='our-vision-head'>Our Vision</h3>
    <p className='vision-para'>ASH Tech Digital Solutions, an emerging leader in the tech industry, understands the digital challenges businesses face today. Our forward-thinking vision aims to transform IT solutions into intelligent, adaptable, and AI-driven digital assets.</p>
    <p className='vision-para'> We are dedicated to leading digital transformation efforts, offering agile and globally-focused services to clients worldwide. In this rapidly changing landscape, our innovative and resilient team propels the IT sector toward a future where groundbreaking solutions align with the evolving needs of the digital world.</p>
</div>
   </div>
   {/* leadership team */}
   <div className='leadership-team-section-text'>
    <h2 className='our-vision-head'>Meet Our Leadership Team</h2>
    <p className='vision-para'> At ASH Tech Digital Solutions, our leadership team is the driving force behind our innovative and client-centric approach. With a blend of expertise, vision, and dedication, they are committed to turning challenges into opportunities, ensuring our clients thrive in the ever-evolving digital landscape. Each member brings a unique perspective, fostering a culture of creativity, collaboration, and excellence. Together, we are paving the way for a smarter, more agile, and technology-driven future.</p>
   </div>
      <ul className="about-us__team-list">
        {teamMembers.map((member) => (
          <li key={member.id} className="about-us__team-item">
            <div className='about-us-team-item-img-container'>
            {/* <img src={member.image} alt={member.name} className="about-us__team-image" /> */}
            </div>
            <h3 className="about-us__team-name">{member.name}</h3>
         <div className='role-plus-social-links' style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
         <p className="about-us__team-role">{member.role}</p>
<Link to={member.linkedin} ><img src="./Footer/link-black.svg" width="24px" alt="icon" /></Link>
         </div>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
 {/* Testimonials Section */}
      <div className='testimonials-section'>
        <div className='testimonials-header'>
          <h2 className='our-vision-head'>What Our Clients Say</h2>
          <p className='vision-para'>Hear from our satisfied clients who have experienced the ASH Tech difference.</p>
        </div>
        
        <div className='testimonials-container'>
          {testimonials.map((testimonial) => {
              const fullStars = Math.floor(testimonial.rating); // whole stars
              const hasHalfStar = testimonial.rating % 1 >= 0.5; // check if 0.5+
              const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

              return (
                <div key={testimonial.id} className='testimonial-card'>
                  <div className='testimonial-rating'>
                    {/* Full Stars */}
                    {[...Array(fullStars)].map((_, i) => (
                      <span key={`full-${i}`} className='star'>★</span>
                    ))}

                    {/* Half Star */}
                    {hasHalfStar && <span className='star half'>★</span>}

                    {/* Empty Stars */}
                    {[...Array(emptyStars)].map((_, i) => (
                      <span key={`empty-${i}`} className='star empty'>☆</span>
                    ))}
                  </div>

                  <p className='testimonial-text'>"{testimonial.text}"</p>
                  <div className='testimonial-author'>
                    <h4 className='author-name'>{testimonial.name}</h4>
                    <p className='author-projecttype'>{testimonial.projectType}</p>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;