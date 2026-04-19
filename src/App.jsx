import { useEffect, useState } from 'react'
import './App.css'

const phoneNumber = '+62 812-6099-9044'
const whatsappLink = 'https://wa.me/6281260999044'

const slides = [
  {
    image: '/slide-airport.svg',
    title: 'Airport Pickup & Drop-off',
    description:
      'Smooth private transfers with a personal driver who values punctuality and comfort.',
  },
  {
    image: '/slide-city.svg',
    title: 'Flexible City Travel',
    description:
      'Perfect for sightseeing, meetings, food trips, and daily transport with your own schedule.',
  },
  {
    image: '/slide-beach.svg',
    title: 'Private Leisure Trips',
    description:
      'Enjoy a relaxed travel day with door-to-door service and a clean, well-kept car.',
  },
]

const highlights = [
  'Private car service',
  'Airport-ready pickup',
  'Friendly local driver',
  'Flexible daily charter',
]

const benefits = [
  {
    title: 'Comfortable Ride',
    text: 'Travel in a private car with a calm, clean, and comfortable atmosphere.',
  },
  {
    title: 'Easy Booking',
    text: 'Customers can contact directly by phone or WhatsApp for quick arrangements.',
  },
  {
    title: 'Reliable Timing',
    text: 'Ideal for airport arrivals, departures, and important appointments.',
  },
  {
    title: 'Personal Service',
    text: 'A more friendly and flexible experience than standard transport options.',
  },
]

const packages = [
  {
    name: 'Airport Transfer',
    price: 'Start from IDR 250K',
    details: 'One-way airport pickup or drop-off with private comfort.',
  },
  {
    name: 'City Ride',
    price: 'Start from IDR 450K',
    details: 'Flexible personal transport for shopping, dining, or meetings.',
  },
  {
    name: 'Full-Day Trip',
    price: 'Start from IDR 850K',
    details: 'Enjoy a whole day of travel with a dedicated private driver.',
  },
]

const testimonials = [
  {
    name: 'Anna, Tourist',
    text: 'Very easy to book and the ride from the airport was smooth and comfortable.',
  },
  {
    name: 'Daniel, Business Visitor',
    text: 'Professional, punctual, and much more convenient than waiting for public transport.',
  },
  {
    name: 'Rina, Family Traveler',
    text: 'Friendly service and flexible timing. We felt safe and relaxed during the whole trip.',
  },
]

const faqs = [
  {
    question: 'Can I book for airport pickup?',
    answer: 'Yes. Airport pickup and drop-off are one of the main services offered by Bowo Travel.',
  },
  {
    question: 'How do I book the service?',
    answer: 'Simply call or send a WhatsApp message to confirm your route, date, and pickup time.',
  },
  {
    question: 'Can I use the car for a full day trip?',
    answer: 'Yes. Daily charter options are available for personal travel, sightseeing, and flexible city movement.',
  },
  {
    question: 'Can I replace the images later with real photos?',
    answer: 'Yes. The gallery is ready for your own car and destination images whenever you want to update the site.',
  },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const current = slides[currentSlide]

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="brand-kicker">Private driver service</p>
          <h2 className="brand-name">Bowo Travel</h2>
        </div>

        <nav className="topnav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
            Book Now
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <span className="pill">Airport transfer | City trip | Daily charter</span>
            <h1>Comfortable personal travel for tourists and customers.</h1>
            <p className="hero-text">
              Travel with confidence using a private car service that is friendly,
              flexible, and ready to help from the airport to your destination.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
              <a className="btn btn-secondary" href="tel:+6281260999044">
                Call {phoneNumber}
              </a>
            </div>

            <ul className="quick-points" aria-label="Service highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>Available for direct booking</span>
              <strong>Fast response on WhatsApp</strong>
            </div>

            <div className="hero-metrics">
              <div>
                <strong>Private</strong>
                <span>No ride sharing</span>
              </div>
              <div>
                <strong>Flexible</strong>
                <span>Your own schedule</span>
              </div>
              <div>
                <strong>Trusted</strong>
                <span>Friendly local support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section" aria-labelledby="gallery-title">
          <div className="section-heading">
            <p className="section-label">Image carousel</p>
            <h2 id="gallery-title">A travel service that feels simple and personal.</h2>
            <p>
              Use this slider to showcase your real car, airport service, and favorite trip destinations.
            </p>
          </div>

          <div className="carousel-card">
            <button className="carousel-button" onClick={goToPrev} aria-label="Previous slide">
              &lt;
            </button>

            <div className="carousel-frame">
              <img src={current.image} alt={current.title} className="carousel-image" />
              <div className="carousel-copy">
                <p className="section-label">Featured service</p>
                <h3>{current.title}</h3>
                <p>{current.description}</p>
              </div>
            </div>

            <button className="carousel-button" onClick={goToNext} aria-label="Next slide">
              &gt;
            </button>
          </div>

          <div className="carousel-dots" aria-label="Slide selection">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={index === currentSlide ? 'dot active' : 'dot'}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="benefits-section" id="services">
          <div className="section-heading">
            <p className="section-label">Why choose us</p>
            <h2>Designed for comfort, trust, and easy travel.</h2>
          </div>

          <div className="card-grid">
            {benefits.map((benefit) => (
              <article className="info-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-panel">
            <p className="section-label">About Bowo Travel</p>
            <h2>Personal travel service with your convenience in mind.</h2>
            <p>
              Bowo Travel is ideal for customers who want a direct and dependable car service.
              Whether you are arriving from the airport, visiting the city, or planning a relaxed
              day trip, this service is built to make transportation easier.
            </p>
          </div>
          <div className="about-points">
            <div className="mini-card">
              <strong>Direct contact</strong>
              <span>No complicated booking flow.</span>
            </div>
            <div className="mini-card">
              <strong>Tourist-friendly</strong>
              <span>Great for first-time visitors and families.</span>
            </div>
            <div className="mini-card">
              <strong>Own car service</strong>
              <span>A more personal experience for every ride.</span>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-heading">
            <p className="section-label">Simple pricing</p>
            <h2>Choose the trip style that fits your plan.</h2>
          </div>

          <div className="pricing-grid">
            {packages.map((item) => (
              <article className="price-card" key={item.name}>
                <h3>{item.name}</h3>
                <p className="price-tag">{item.price}</p>
                <p>{item.details}</p>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Ask for availability
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials-section">
          <div className="section-heading">
            <p className="section-label">Customer impressions</p>
            <h2>People love easy, private, and reliable transport.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="testimonial-card" key={item.name}>
                <p>{item.text}</p>
                <footer>{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-heading">
            <p className="section-label">FAQ</p>
            <h2>Questions customers often ask before booking.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta-banner">
          <div>
            <p className="section-label">Ready to travel?</p>
            <h2>Book your private trip with Bowo Travel today.</h2>
            <p>Fast response by WhatsApp or direct call for airport and personal travel service.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
            <a className="btn btn-secondary" href="tel:+6281260999044">
              {phoneNumber}
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
