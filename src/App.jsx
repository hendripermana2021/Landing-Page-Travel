import { useEffect, useState } from 'react'
import './App.css'

const phoneNumber = '+62 812-6099-9044'
const whatsappLink = 'https://wa.me/6281260999044'
const slideImages = ['/slide-airport.svg', '/slide-city.svg', '/slide-beach.svg']

const content = {
  en: {
    pageTitle: 'Bowo Travel | Private Travel Service',
    navLabel: 'Primary navigation',
    brandKicker: 'Private driver service',
    nav: {
      services: 'Services',
      pricing: 'Pricing',
      faq: 'FAQ',
      book: 'Book Now',
    },
    pill: 'Airport transfer | City trip | Daily charter',
    heroTitle: 'Comfortable personal travel for tourists and customers.',
    heroText:
      'Travel with confidence using a private car service that is friendly, flexible, and ready to help from the airport to your destination.',
    ctaWhatsApp: 'WhatsApp Us',
    ctaCall: 'Call',
    quickPoints: [
      'Private car service',
      'Airport-ready pickup',
      'Friendly local driver',
      'Flexible daily charter',
    ],
    heroCard: {
      availability: 'Available for direct booking',
      response: 'Fast response on WhatsApp',
      items: [
        { title: 'Private', text: 'No ride sharing' },
        { title: 'Flexible', text: 'Your own schedule' },
        { title: 'Trusted', text: 'Friendly local support' },
      ],
    },
    gallery: {
      label: 'Image carousel',
      title: 'A travel service that feels simple and personal.',
      description:
        'Use this slider to showcase your real car, airport service, and favorite trip destinations.',
      featured: 'Featured service',
      slides: [
        {
          title: 'Airport Pickup & Drop-off',
          description:
            'Smooth private transfers with a personal driver who values punctuality and comfort.',
        },
        {
          title: 'Flexible City Travel',
          description:
            'Perfect for sightseeing, meetings, food trips, and daily transport with your own schedule.',
        },
        {
          title: 'Private Leisure Trips',
          description:
            'Enjoy a relaxed travel day with door-to-door service and a clean, well-kept car.',
        },
      ],
    },
    benefitsSection: {
      label: 'Why choose us',
      title: 'Designed for comfort, trust, and easy travel.',
    },
    benefits: [
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
    ],
    about: {
      label: 'About Bowo Travel',
      title: 'Personal travel service with your convenience in mind.',
      description:
        'Bowo Travel is ideal for customers who want a direct and dependable car service. Whether you are arriving from the airport, visiting the city, or planning a relaxed day trip, this service is built to make transportation easier.',
      points: [
        { title: 'Direct contact', text: 'No complicated booking flow.' },
        { title: 'Tourist-friendly', text: 'Great for first-time visitors and families.' },
        { title: 'Own car service', text: 'A more personal experience for every ride.' },
      ],
    },
    pricing: {
      label: 'Simple pricing',
      title: 'Choose the trip style that fits your plan.',
      action: 'Ask for availability',
      packages: [
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
      ],
    },
    testimonialsSection: {
      label: 'Customer impressions',
      title: 'People love easy, private, and reliable transport.',
      items: [
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
      ],
    },
    faqSection: {
      label: 'FAQ',
      title: 'Questions customers often ask before booking.',
      items: [
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
      ],
    },
    cta: {
      label: 'Ready to travel?',
      title: 'Book your private trip with Bowo Travel today.',
      text: 'Fast response by WhatsApp or direct call for airport and personal travel service.',
      whatsapp: 'Chat on WhatsApp',
    },
    mobile: {
      call: 'Call Now',
      whatsapp: 'WhatsApp',
    },
  },
  id: {
    pageTitle: 'Bowo Travel | Layanan Travel Pribadi',
    navLabel: 'Navigasi utama',
    brandKicker: 'Layanan driver pribadi',
    nav: {
      services: 'Layanan',
      pricing: 'Harga',
      faq: 'FAQ',
      book: 'Pesan Sekarang',
    },
    pill: 'Antar jemput bandara | Perjalanan kota | Charter harian',
    heroTitle: 'Layanan travel pribadi yang nyaman untuk wisatawan dan pelanggan.',
    heroText:
      'Nikmati perjalanan dengan tenang menggunakan layanan mobil pribadi yang ramah, fleksibel, dan siap membantu dari bandara sampai tujuan Anda.',
    ctaWhatsApp: 'Chat WhatsApp',
    ctaCall: 'Telepon',
    quickPoints: [
      'Mobil pribadi',
      'Siap jemput bandara',
      'Driver lokal ramah',
      'Charter harian fleksibel',
    ],
    heroCard: {
      availability: 'Siap untuk pemesanan langsung',
      response: 'Respon cepat via WhatsApp',
      items: [
        { title: 'Privat', text: 'Tanpa berbagi kendaraan' },
        { title: 'Fleksibel', text: 'Sesuai jadwal Anda' },
        { title: 'Terpercaya', text: 'Bantuan lokal yang ramah' },
      ],
    },
    gallery: {
      label: 'Galeri gambar',
      title: 'Layanan travel yang terasa simpel dan personal.',
      description:
        'Gunakan slider ini untuk menampilkan mobil Anda, layanan bandara, dan tujuan perjalanan favorit.',
      featured: 'Layanan unggulan',
      slides: [
        {
          title: 'Jemput & Antar Bandara',
          description:
            'Perjalanan bandara yang lancar dengan driver pribadi yang mengutamakan ketepatan waktu dan kenyamanan.',
        },
        {
          title: 'Perjalanan Kota Fleksibel',
          description:
            'Cocok untuk jalan-jalan, meeting, kuliner, dan transport harian sesuai jadwal Anda sendiri.',
        },
        {
          title: 'Perjalanan Santai Pribadi',
          description:
            'Nikmati perjalanan santai dengan layanan door-to-door dan mobil yang bersih serta terawat.',
        },
      ],
    },
    benefitsSection: {
      label: 'Kenapa memilih kami',
      title: 'Dirancang untuk kenyamanan, kepercayaan, dan perjalanan yang mudah.',
    },
    benefits: [
      {
        title: 'Perjalanan Nyaman',
        text: 'Nikmati mobil pribadi dengan suasana yang tenang, bersih, dan nyaman.',
      },
      {
        title: 'Booking Mudah',
        text: 'Pelanggan bisa langsung menghubungi lewat telepon atau WhatsApp untuk pemesanan cepat.',
      },
      {
        title: 'Tepat Waktu',
        text: 'Cocok untuk kedatangan bandara, keberangkatan, dan jadwal penting lainnya.',
      },
      {
        title: 'Layanan Personal',
        text: 'Pengalaman yang lebih ramah dan fleksibel dibanding transport biasa.',
      },
    ],
    about: {
      label: 'Tentang Bowo Travel',
      title: 'Layanan travel pribadi yang mengutamakan kenyamanan Anda.',
      description:
        'Bowo Travel cocok untuk pelanggan yang ingin layanan mobil yang langsung, aman, dan dapat diandalkan. Baik Anda datang dari bandara, berkeliling kota, atau merencanakan perjalanan santai, layanan ini dibuat agar transportasi jadi lebih mudah.',
      points: [
        { title: 'Kontak langsung', text: 'Tanpa proses booking yang rumit.' },
        { title: 'Ramah wisatawan', text: 'Cocok untuk pengunjung pertama dan keluarga.' },
        { title: 'Mobil milik sendiri', text: 'Pengalaman yang lebih personal di setiap perjalanan.' },
      ],
    },
    pricing: {
      label: 'Harga sederhana',
      title: 'Pilih jenis perjalanan yang sesuai dengan rencana Anda.',
      action: 'Tanya ketersediaan',
      packages: [
        {
          name: 'Transfer Bandara',
          price: 'Mulai dari IDR 250K',
          details: 'Antar atau jemput bandara satu arah dengan kenyamanan pribadi.',
        },
        {
          name: 'Perjalanan Kota',
          price: 'Mulai dari IDR 450K',
          details: 'Transport pribadi fleksibel untuk belanja, makan, atau meeting.',
        },
        {
          name: 'Trip Seharian',
          price: 'Mulai dari IDR 850K',
          details: 'Nikmati perjalanan seharian penuh dengan driver pribadi khusus.',
        },
      ],
    },
    testimonialsSection: {
      label: 'Kesan pelanggan',
      title: 'Banyak pelanggan menyukai transport yang mudah, privat, dan terpercaya.',
      items: [
        {
          name: 'Anna, Wisatawan',
          text: 'Sangat mudah dipesan dan perjalanan dari bandara terasa lancar dan nyaman.',
        },
        {
          name: 'Daniel, Pebisnis',
          text: 'Profesional, tepat waktu, dan jauh lebih praktis dibanding menunggu transport umum.',
        },
        {
          name: 'Rina, Wisata Keluarga',
          text: 'Pelayanannya ramah dan waktunya fleksibel. Kami merasa aman dan santai sepanjang perjalanan.',
        },
      ],
    },
    faqSection: {
      label: 'FAQ',
      title: 'Pertanyaan yang sering ditanyakan pelanggan sebelum booking.',
      items: [
        {
          question: 'Apakah bisa booking untuk jemput bandara?',
          answer: 'Bisa. Antar jemput bandara adalah salah satu layanan utama dari Bowo Travel.',
        },
        {
          question: 'Bagaimana cara memesan layanan?',
          answer: 'Cukup telepon atau kirim WhatsApp untuk konfirmasi rute, tanggal, dan jam penjemputan.',
        },
        {
          question: 'Apakah mobil bisa dipakai untuk perjalanan seharian?',
          answer: 'Bisa. Tersedia opsi charter harian untuk perjalanan pribadi, wisata, dan mobilitas kota yang fleksibel.',
        },
        {
          question: 'Apakah gambar bisa diganti nanti dengan foto asli?',
          answer: 'Bisa. Galeri ini sudah siap untuk menampilkan foto mobil dan tujuan wisata Anda kapan saja.',
        },
      ],
    },
    cta: {
      label: 'Siap berangkat?',
      title: 'Pesan perjalanan pribadi Anda bersama Bowo Travel sekarang.',
      text: 'Respon cepat lewat WhatsApp atau telepon langsung untuk layanan bandara dan perjalanan pribadi.',
      whatsapp: 'Chat di WhatsApp',
    },
    mobile: {
      call: 'Telepon',
      whatsapp: 'WhatsApp',
    },
  },
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [language, setLanguage] = useState('en')

  const t = content[language]
  const current = {
    image: slideImages[currentSlide],
    ...t.gallery.slides[currentSlide],
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.pageTitle
  }, [language, t.pageTitle])

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="brand-kicker">{t.brandKicker}</p>
          <h2 className="brand-name">Bowo Travel</h2>
        </div>

        <div className="topbar-actions">
          <div className="lang-switcher" aria-label="Language switcher">
            <button
              type="button"
              className={language === 'en' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={language === 'id' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLanguage('id')}
            >
              ID
            </button>
          </div>

          <nav className="topnav" aria-label={t.navLabel}>
            <a href="#services">{t.nav.services}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="#faq">{t.nav.faq}</a>
            <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
              {t.nav.book}
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <span className="pill">{t.pill}</span>
            <h1>{t.heroTitle}</h1>
            <p className="hero-text">{t.heroText}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                {t.ctaWhatsApp}
              </a>
              <a className="btn btn-secondary" href="tel:+6281260999044">
                {t.ctaCall} {phoneNumber}
              </a>
            </div>

            <ul className="quick-points" aria-label="Service highlights">
              {t.quickPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>{t.heroCard.availability}</span>
              <strong>{t.heroCard.response}</strong>
            </div>

            <div className="hero-metrics">
              {t.heroCard.items.map((item) => (
                <div key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-section" aria-labelledby="gallery-title">
          <div className="section-heading">
            <p className="section-label">{t.gallery.label}</p>
            <h2 id="gallery-title">{t.gallery.title}</h2>
            <p>{t.gallery.description}</p>
          </div>

          <div className="carousel-card">
            <button className="carousel-button" onClick={goToPrev} aria-label="Previous slide">
              &lt;
            </button>

            <div className="carousel-frame">
              <img src={current.image} alt={current.title} className="carousel-image" />
              <div className="carousel-copy">
                <p className="section-label">{t.gallery.featured}</p>
                <h3>{current.title}</h3>
                <p>{current.description}</p>
              </div>
            </div>

            <button className="carousel-button" onClick={goToNext} aria-label="Next slide">
              &gt;
            </button>
          </div>

          <div className="carousel-dots" aria-label="Slide selection">
            {t.gallery.slides.map((slide, index) => (
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
            <p className="section-label">{t.benefitsSection.label}</p>
            <h2>{t.benefitsSection.title}</h2>
          </div>

          <div className="card-grid">
            {t.benefits.map((benefit) => (
              <article className="info-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-panel">
            <p className="section-label">{t.about.label}</p>
            <h2>{t.about.title}</h2>
            <p>{t.about.description}</p>
          </div>
          <div className="about-points">
            {t.about.points.map((item) => (
              <div className="mini-card" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-heading">
            <p className="section-label">{t.pricing.label}</p>
            <h2>{t.pricing.title}</h2>
          </div>

          <div className="pricing-grid">
            {t.pricing.packages.map((item) => (
              <article className="price-card" key={item.name}>
                <h3>{item.name}</h3>
                <p className="price-tag">{item.price}</p>
                <p>{item.details}</p>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  {t.pricing.action}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials-section">
          <div className="section-heading">
            <p className="section-label">{t.testimonialsSection.label}</p>
            <h2>{t.testimonialsSection.title}</h2>
          </div>

          <div className="testimonial-grid">
            {t.testimonialsSection.items.map((item) => (
              <blockquote className="testimonial-card" key={item.name}>
                <p>{item.text}</p>
                <footer>{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-heading">
            <p className="section-label">{t.faqSection.label}</p>
            <h2>{t.faqSection.title}</h2>
          </div>

          <div className="faq-list">
            {t.faqSection.items.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta-banner">
          <div>
            <p className="section-label">{t.cta.label}</p>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              {t.cta.whatsapp}
            </a>
            <a className="btn btn-secondary" href="tel:+6281260999044">
              {phoneNumber}
            </a>
          </div>
        </section>
      </main>

      <div className="mobile-contact-bar">
        <a className="mobile-call" href="tel:+6281260999044">
          {t.mobile.call}
        </a>
        <a className="mobile-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
          {t.mobile.whatsapp}
        </a>
      </div>
    </div>
  )
}

export default App
