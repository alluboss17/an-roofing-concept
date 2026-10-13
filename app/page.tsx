import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";

const services = [
  ["01", "Roof replacements", "A clear route for homeowners comparing full reroofing options, materials, scope and next steps."],
  ["02", "Flat roofing", "Present systems, suitable property types and maintenance expectations without burying the important detail."],
  ["03", "Roof repairs", "Make urgent repair enquiries easy to start from mobile, with space for photos and property context."],
  ["04", "Gutters & roofline", "Give related roofline services a dedicated place instead of hiding them in a general services paragraph."],
];

const faqs = [
  ["How should a real roofing business use this template?", "Replace every placeholder with the contractor's verified services, real service areas, genuine project photography, accurate accreditations, insurance information and review sources."],
  ["Can it connect to WhatsApp, email or a CRM?", "Yes. A production client version can route enquiries to email, WhatsApp, a CRM or an approved form provider depending on the business process."],
  ["Can the pages be expanded for SEO?", "Yes. A real build can add structured service and location pages where they are genuinely useful. Content should describe real services and real coverage rather than mass-produced location pages."],
  ["Is RidgeCraft Roofing a real contractor?", "No. RidgeCraft Roofing is fictional sample content used only to demonstrate a website direction for UK roofing businesses."],
];

export default function HomePage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero section-dark">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="shell hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow eyebrow-light"><span /> UK ROOFING WEBSITE CONCEPT</p>
            <h1>Roofing built to stand up to <em>British weather.</em></h1>
            <p className="hero-lede">A premium website direction for roofing contractors who want homeowners to understand the work, trust the evidence and request a quote without hunting for the next step.</p>
            <div className="button-row">
              <a className="button button-light" href="#quote">Request a roofing quote <span>→</span></a>
              <a className="button button-ghost" href="#projects">View example projects</a>
            </div>
            <p className="microcopy">Concept business for demonstration. Real client versions should use verified credentials, reviews and project photography.</p>
          </Reveal>

          <Reveal delay={120} className="hero-card">
            <p className="eyebrow">WHAT A STRONG SITE SHOULD MAKE OBVIOUS</p>
            <h2>Clear scope. Real proof. Easy enquiry.</h2>
            <ul className="check-list">
              <li>Services that are easy to scan</li>
              <li>Real projects close to the customer</li>
              <li>Verified trust signals only</li>
              <li>One clear quote path</li>
            </ul>
            <div className="hero-card-meta"><span>Example coverage</span><strong>Greater London</strong></div>
          </Reveal>
        </div>
      </section>

      <section className="statement-section">
        <div className="shell split-heading">
          <Reveal>
            <p className="eyebrow">A BETTER FIRST IMPRESSION</p>
            <h2>Your workmanship can be excellent.<br/><em>Your website should make that obvious.</em></h2>
          </Reveal>
          <Reveal delay={100} className="body-copy">
            <p>Homeowners compare contractors before they make contact. A useful website should explain what you do, where you work, what your process feels like and how to take the next step.</p>
            <p>This concept is intentionally structured around service clarity, project presentation, trust and a low-friction enquiry path.</p>
          </Reveal>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="shell">
          <Reveal className="section-heading-row">
            <div>
              <p className="eyebrow">CORE SERVICES</p>
              <h2>Show homeowners exactly <em>what you are built to do.</em></h2>
            </div>
            <p>For a real client build, this section should be narrowed to the contractor's actual services and profitable work.</p>
          </Reveal>
          <div className="service-grid">
            {services.map(([number, title, body], index) => (
              <Reveal key={title} delay={index * 70} className="service-card">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <i />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section section-dark">
        <div className="shell">
          <Reveal className="section-heading-row projects-heading">
            <div>
              <p className="eyebrow eyebrow-light">PROJECT PRESENTATION</p>
              <h2>Let the work <em>carry the proof.</em></h2>
            </div>
            <p>These panels are built to receive licensed concept imagery now and genuine project photography on a real contractor website.</p>
          </Reveal>

          <div className="project-grid">
            <Reveal className="project-card project-large project-one">
         
              <span className="project-label">PITCHED ROOF</span>
              <div className="project-info"><div><h3>Full roof replacement</h3><p>SOUTH LONDON · EXAMPLE PROJECT</p></div><b>→</b></div>
            </Reveal>
            
            <div className="project-stack">
              <Reveal delay={80} className="project-card project-two">
                <span className="project-label">FLAT ROOF</span>
                <div className="project-info"><div><h3>Warm roof system</h3><p>GREATER LONDON · EXAMPLE PROJECT</p></div><b>→</b></div>
              </Reveal>
              <Reveal delay={140} className="project-card project-three">
                <span className="project-label">REPAIR</span>
                <div className="project-info"><div><h3>Storm damage repair</h3><p>NORTH LONDON · EXAMPLE PROJECT</p></div><b>→</b></div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="shell process-grid">
          <Reveal>
            <p className="eyebrow">HOW THE PROJECT MOVES</p>
            <h2>A professional process <em>before the first ladder arrives.</em></h2>
            <p className="body-copy">Strong contractor websites reduce uncertainty by explaining what happens between the first enquiry and completed work.</p>
          </Reveal>
          <div className="steps">
            {[['01','Understand the property','Start with the roof type, symptoms, location and outcome the homeowner needs.'],['02','Survey & define scope','Explain what will be inspected and how the recommended scope will be documented.'],['03','Schedule the work','Set expectations around access, materials, timing and weather dependencies.'],['04','Complete & communicate','Keep one clear point of contact and make completion details easy to understand.']].map(([n,t,b],i)=>(
              <Reveal key={n} delay={i*60} className="step"><span>{n}</span><div><h3>{t}</h3><p>{b}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="evidence-section">
        <div className="shell evidence-grid">
          <Reveal className="evidence-dark">
            <p className="eyebrow eyebrow-light">FOR A REAL CLIENT BUILD</p>
            <h2>Replace claims with evidence.</h2>
            <p>Add only verified reviews, genuine accreditations, correct insurance details, real guarantees and real project photography.</p>
          </Reveal>
          <Reveal delay={100} className="evidence-light">
            <p className="eyebrow">CONVERSION ESSENTIALS</p>
            <ul className="evidence-list">
              <li><span>✓</span> Tap-to-call or WhatsApp on mobile</li>
              <li><span>✓</span> Real projects close to the target customer</li>
              <li><span>✓</span> One clear quote path on every page</li>
              <li><span>✓</span> Fast-loading, readable mobile layouts</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="shell faq-grid">
          <Reveal>
            <p className="eyebrow">FREQUENTLY ASKED</p>
            <h2>Answer the questions <em>before they become objections.</em></h2>
          </Reveal>
          <div className="faq-list">
            {faqs.map(([q,a], index)=>(
              <Reveal key={q} delay={index*50}>
                <details>
                  <summary>{q}<span>+</span></summary>
                  <p>{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="quote-section section-dark">
        <div className="shell quote-grid">
          <Reveal>
            <p className="eyebrow eyebrow-light">PROJECT ENQUIRY</p>
            <h2>Make the next step feel simple.</h2>
            <p className="body-copy light-copy">This demonstration form prepares an email to AN Digital Studio. A production client website can connect the same interface to the contractor's email, WhatsApp, CRM or approved form provider.</p>
            <div className="contact-block"><span>DEMO ENQUIRIES</span><strong>hello@andigitalstudio.com</strong></div>
          </Reveal>
          <Reveal delay={100}><QuoteForm /></Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-top">
          <div className="brand brand-light"><span className="brand-mark light-mark">RC</span><span><strong>RIDGECRAFT</strong><small>ROOFING · CONCEPT</small></span></div>
          <p>Concept contractor website created to demonstrate a premium, conversion-focused build for UK roofing businesses.</p>
          <div className="footer-links"><a href="#services">Services</a><a href="#projects">Projects</a><a href="#process">Process</a><a href="#faq">FAQ</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 RIDGECRAFT CONCEPT WEBSITE. EXAMPLE CONTENT ONLY.</span><a href="https://www.andigitalstudio.com/" target="_blank" rel="noopener noreferrer">DESIGNED & BUILT BY AN DIGITAL STUDIO ↗</a></div>
      </footer>
    </main>
  );
}
