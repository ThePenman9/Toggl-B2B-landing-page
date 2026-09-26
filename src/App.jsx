import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Gauge,
  LineChart,
  Menu,
  PieChart,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Time tracking', href: 'https://toggl.com/track/' },
  { label: 'Planning', href: 'https://toggl.com/plan/' },
  { label: 'Reporting', href: 'https://toggl.com/track/features/reporting/' },
  { label: 'Resources', href: 'https://toggl.com/blog/' },
]

const features = [
  {
    icon: Clock3,
    title: 'Know where time goes.',
    body: 'See how your team spends its hours across projects and tasks.',
    tone: 'coral',
  },
  {
    icon: CircleDollarSign,
    title: "Know what it's costing.",
    body: 'Compare estimates with actuals and understand project costs and profitability.',
    tone: 'purple',
  },
  {
    icon: UsersRound,
    title: 'Know who has capacity.',
    body: 'See workload across your team so you can plan work around real availability.',
    tone: 'mint',
  },
  {
    icon: Gauge,
    title: 'Know what to do next.',
    body: 'Use the data to adjust projects, workloads, and plans with more confidence.',
    tone: 'yellow',
  },
]

const testimonials = [
  {
    quote: '“Toggl Track increased our profitability by at least 20%.”',
    name: 'Dax Kimbrough',
    role: 'Business Consultant',
    company: 'Sweat+Co',
  },
  {
    quote:
      '“Toggl Track has made us more aware of the time we’re devoting to each task, and we’ve been improving our efficiency as a result.”',
    name: 'Brian Lee',
    role: 'President',
    company: 'Revelation PR',
  },
  {
    quote: '“Toggl data helps us when it’s time to renegotiate contracts for clients.”',
    name: 'Angela Wells',
    role: 'Senior Project Manager',
    company: 'Impekable',
  },
]

function Reveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.14 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Toggl home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-dot" />
        <span className="brand-hand" />
      </span>
      <span>Toggl</span>
    </a>
  )
}

function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Logo />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="desktop-actions">
          <a className="text-link" href="https://track.toggl.com/login" target="_blank" rel="noreferrer">
            Log in
          </a>
          <a className="button button-small" href="https://toggl.com/track/signup/" target="_blank" rel="noreferrer">
            Try Toggl
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-panel ${open ? 'is-open' : ''}`}>
        <div className="container mobile-panel-inner">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              {item.label}
              <ChevronRight size={18} />
            </a>
          ))}
          <div className="mobile-actions">
            <a className="text-link" href="https://track.toggl.com/login" target="_blank" rel="noreferrer">
              Log in
            </a>
            <a className="button button-small" href="https://toggl.com/track/signup/" target="_blank" rel="noreferrer">
              Try Toggl
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function MockupFrame({ label, children, className = '' }) {
  return (
    <div className={`mockup-frame ${className}`}>
      <div className="mockup-topbar">
        <div className="mockup-dots" aria-hidden="true"><span /><span /><span /></div>
        <span className="mockup-label">{label}</span>
      </div>
      <div className="mockup-body">{children}</div>
    </div>
  )
}

function HeroMockup() {
  return (
    <MockupFrame label="Conceptual data view" className="hero-mockup">
      <div className="hero-ui-header">
        <div>
          <span className="ui-kicker">This week</span>
          <strong>Team time overview</strong>
        </div>
        <div className="status-pill"><span /> Live view</div>
      </div>

      <div className="metric-grid">
        <div className="metric-card accent-coral"><Clock3 size={18} /><span>Tracked time</span><strong>142h</strong></div>
        <div className="metric-card accent-purple"><BriefcaseBusiness size={18} /><span>Projects</span><strong>8</strong></div>
        <div className="metric-card accent-mint"><UsersRound size={18} /><span>Capacity</span><strong>74%</strong></div>
      </div>

      <div className="chart-panel">
        <div className="chart-head"><span>Hours by project</span><span className="muted">Mon–Fri</span></div>
        <div className="bar-chart" aria-hidden="true">
          {[48, 65, 55, 82, 70, 91, 58, 77].map((height, index) => (
            <span key={index} style={{ '--bar-height': `${height}%` }} />
          ))}
        </div>
      </div>

      <div className="flow-row" aria-label="Time to decision flow">
        {['Time', 'Projects', 'Capacity', 'Costs', 'Decisions'].map((item, index) => (
          <div className="flow-item" key={item}>
            <span>{item}</span>
            {index < 4 && <ArrowRight size={14} />}
          </div>
        ))}
      </div>
    </MockupFrame>
  )
}

function ConnectionMockup() {
  return (
    <MockupFrame label="Conceptual project relationship view">
      <div className="connection-map">
        <div className="map-node primary"><Clock3 size={19} /><span>Time</span></div>
        <div className="map-line line-a" />
        <div className="map-line line-b" />
        <div className="map-line line-c" />
        <div className="map-node project"><BriefcaseBusiness size={19} /><span>Projects</span></div>
        <div className="map-node people"><UsersRound size={19} /><span>People</span></div>
        <div className="map-node cost"><CircleDollarSign size={19} /><span>Costs</span></div>
        <div className="map-summary">
          <Sparkles size={16} />
          <span>One clearer picture</span>
        </div>
      </div>
    </MockupFrame>
  )
}

function CostMockup() {
  return (
    <MockupFrame label="Conceptual cost and profitability view">
      <div className="cost-summary">
        <div><span className="ui-kicker">Project Alpha</span><strong>Estimate vs actual</strong></div>
        <LineChart size={22} />
      </div>
      <div className="cost-bars">
        <div className="cost-row"><span>Estimated</span><div className="progress-track"><i style={{ width: '72%' }} /></div><strong>72%</strong></div>
        <div className="cost-row"><span>Actual</span><div className="progress-track alt"><i style={{ width: '61%' }} /></div><strong>61%</strong></div>
      </div>
      <div className="cost-cards">
        <div><span>Hours</span><strong>64h</strong></div>
        <div><span>Cost view</span><strong>On track</strong></div>
        <div><span>Margin</span><strong>Visible</strong></div>
      </div>
    </MockupFrame>
  )
}

function CapacityMockup() {
  const team = [
    ['Maya', 78],
    ['Eli', 54],
    ['Noor', 88],
    ['Sam', 66],
  ]

  return (
    <MockupFrame label="Conceptual workload and capacity view">
      <div className="capacity-head">
        <div><span className="ui-kicker">Team workload</span><strong>Available capacity</strong></div>
        <Gauge size={22} />
      </div>
      <div className="capacity-list">
        {team.map(([name, value]) => (
          <div className="capacity-row" key={name}>
            <span className="avatar">{name[0]}</span>
            <span className="person-name">{name}</span>
            <div className="capacity-track"><i style={{ width: `${value}%` }} /></div>
            <strong>{value}%</strong>
          </div>
        ))}
      </div>
      <div className="capacity-note"><Check size={16} /> Plan work around real availability</div>
    </MockupFrame>
  )
}

function FeatureCard({ icon: Icon, title, body, tone }) {
  return (
    <article className="feature-card">
      <div className={`feature-icon ${tone}`}><Icon size={22} /></div>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}

function App() {
  return (
    <div className="page" id="top">
      <Navigation />

      <main>
        <section className="hero section-pad">
          <div className="container hero-grid">
            <Reveal className="hero-copy">
              <span className="eyebrow">FROM TRACKED TIME TO CLEARER DECISIONS</span>
              <h1>See what your team's time is doing to your business.</h1>
              <p className="hero-subheadline">Turn the hours your team tracks into a clearer picture of your projects, workload, capacity, and profitability.</p>
              <div className="hero-actions">
                <a className="button" href="https://toggl.com/track/" target="_blank" rel="noreferrer">
                  See what your time is telling you <ArrowRight size={18} />
                </a>
              </div>
              <p className="supporting-message">See where time goes. Understand what it costs. Know what to do next.</p>
            </Reveal>

            <Reveal className="hero-visual"><HeroMockup /></Reveal>
          </div>
        </section>

        <section className="problem section-pad">
          <div className="container narrow">
            <Reveal>
              <h2>Knowing how long something took isn't the same as knowing what it cost.</h2>
              <div className="progression-list">
                <div><span>01</span><strong>Time affects your projects.</strong></div>
                <div><span>02</span><strong>Your projects affect your people.</strong></div>
                <div><span>03</span><strong>And both affect your bottom line.</strong></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="shift section-pad">
          <div className="container story-stack">
            <Reveal className="story-row">
              <div className="story-copy">
                <span className="story-number">01</span>
                <h2>Connect the dots.</h2>
                <p>Your team's hours don't exist in isolation. Connect them to projects, people, costs, and capacity to see the bigger picture.</p>
              </div>
              <ConnectionMockup />
            </Reveal>

            <Reveal className="story-row reverse">
              <div className="story-copy">
                <span className="story-number">02</span>
                <h2>Know what it costs.</h2>
                <p>See how the time your team spends affects project costs and profitability, before the numbers surprise you.</p>
              </div>
              <CostMockup />
            </Reveal>

            <Reveal className="story-row">
              <div className="story-copy">
                <span className="story-number">03</span>
                <h2>Know what to do next.</h2>
                <p>Use your time data to make clearer decisions about projects, people, and priorities.</p>
              </div>
              <CapacityMockup />
            </Reveal>
          </div>
        </section>

        <section className="guide section-pad-sm">
          <div className="container">
            <Reveal className="guide-panel">
              <div className="guide-icon"><BarChart3 size={26} /></div>
              <p>Toggl turns your time data into answers. Know where your hours go, what they cost, and what to do next.</p>
            </Reveal>
          </div>
        </section>

        <section className="benefits section-pad">
          <div className="container">
            <Reveal className="section-heading">
              <span className="eyebrow">HOW TOGGL HELPS YOU DO THIS</span>
              <h2>From tracked hours to better decisions.</h2>
            </Reveal>
            <div className="feature-grid">
              {features.map((feature) => (
                <Reveal key={feature.title}><FeatureCard {...feature} /></Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section-pad">
          <div className="container">
            <Reveal className="section-heading">
              <span className="eyebrow">CUSTOMER PROOF</span>
              <h2>Don't take our word for it.</h2>
            </Reveal>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <Reveal key={testimonial.name}>
                  <article className="testimonial-card">
                    <PieChart size={22} />
                    <blockquote>{testimonial.quote}</blockquote>
                    <div className="testimonial-person">
                      <div className="initials" aria-hidden="true">{testimonial.name.split(' ').map((part) => part[0]).join('')}</div>
                      <div>
                        <strong>{testimonial.name}</strong>
                        <span>{testimonial.role}, {testimonial.company}</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta section-pad">
          <div className="container">
            <Reveal className="cta-panel">
              <div className="cta-steps" aria-hidden="true">
                <span>Track</span><ArrowRight size={16} /><span>Understand</span><ArrowRight size={16} /><span>Act</span>
              </div>
              <h2>Your time already tells a story. Start listening.</h2>
              <p>Track the work, understand the numbers, and make decisions with a clearer view of what's happening across your business.</p>
              <a className="button button-light" href="https://toggl.com/track/" target="_blank" rel="noreferrer">
                See what your time is telling you <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Speculative portfolio concept inspired by Toggl's visual language.</p>
          </div>
          <div className="footer-links">
            {['Product', 'Resources', 'Company', 'Support', 'Privacy', 'Terms'].map((item) => (
              <a key={item} href="https://toggl.com/" target="_blank" rel="noreferrer">{item}</a>
            ))}
          </div>
          <div className="footer-actions">
            <a className="text-link" href="https://track.toggl.com/login" target="_blank" rel="noreferrer">Log in</a>
            <a className="button button-small" href="https://toggl.com/track/signup/" target="_blank" rel="noreferrer">Try Toggl</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
