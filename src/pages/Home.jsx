import "../styles/Home.css"
import { Link } from "react-router-dom"
import Services from "./Services"
function Home() {
  const items = [
    { id: 1, value: '20+', text: 'Active Clients' },
    { id: 2, value: '100+', text: 'Projects Delivered' },
    { id: 3, value: '23+', text: 'Countries Supported' },
    { id: 4, value: '10+', text: 'Team Members' },
    { id: 5, value: '100+', text: 'Happy Clients' },
    { id: 6, value: '1.5+', text: 'Years of Experience' },
  ];


  return (
    <section className="home-page-container">
    <section className="home-page-wrapper">
<div className="home-page-banner-section">
<div className="header-banner-txt">
<h1 className="head">Revolutionizing Your Digital Journey</h1>
<p>Partner with us to turn your ideas into reality with our top-notch software development services.</p>
</div>
<div className="homepage-banner-button-wrap">
  <Link to="/contact" className="button-primary">Get Started</Link>
<Link to="https://github.com/hanzilarasool/" target="_blank" className="button-secondary">See our Work</Link>
</div>
</div>
    </section>
{/* scroll container */}

<div className="scroll-wrapper">
<div className="scroll-container">
      <ul className="scroll-list">
        {items.map(item => (
          <li key={item.id}>
            <span>{item.value}</span>
            <p>{item.text}</p>
          </li>
        ))}
        {items.map(item => (
          <li key={`duplicate-${item.id}`}>
            <span>{item.value}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
</div>
{/*  */}
    <Services/>
    </section>
  )
}

export default Home