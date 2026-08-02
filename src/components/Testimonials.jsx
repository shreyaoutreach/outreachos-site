import { Icon } from './IconSprite.jsx';
import { useReveal } from '../useReveal.js';

const TESTIMONIALS = [
  {
    featured: true,
    quote: "Outreach OS took over the part of outbound we always deprioritized — consistent LinkedIn content and follow-up — and it immediately felt like a second SDR joined the team, minus the ramp-up time.",
    initials: 'MW', name: 'Marcus Webb', role: 'Head of Growth, Northlane Analytics · United States',
  },
  {
    quote: "The AI sequencing doesn't read like a bot. Prospects reply assuming a real person wrote it, because someone actually did review it before it sent.",
    initials: 'PA', name: 'Priya Anand', role: 'VP Sales, Solstice Health Tech · Canada',
  },
  {
    quote: "We'd tried three other outbound agencies before this. The difference is that Outreach OS actually reads our market before writing anything.",
    initials: 'CD', name: 'Claire Dubois', role: 'Founder, Marbleworks Studio · United Kingdom',
  },
  {
    quote: 'Our newsletter used to be the thing we "meant to send." Now it goes out like clockwork, and it\'s become one of our best-performing channels for re-engaging old leads.',
    initials: 'JW', name: 'James Whitfield', role: 'CMO, Fenwick Robotics · Australia',
  },
  {
    quote: "Handoff between the content team and the outreach team used to be our biggest gap. With Outreach OS it's the same system, so nothing falls through.",
    initials: 'AO', name: 'Amara Okafor', role: 'RevOps Lead, Kepler Data Co. · Europe',
  },
  {
    quote: "What sold us was the qualification step. Every lead that reaches our AEs has already been read by a human, so we stopped wasting calls.",
    initials: 'DO', name: 'Daniel Ortiz', role: 'Director of Sales, BrightPath SaaS · United States',
  },
  {
    quote: "Our LinkedIn presence went from an afterthought to something prospects mention on discovery calls. That's the part I didn't expect.",
    initials: 'SK', name: 'Sarah Kim', role: 'Co-Founder, Vertex Cloud Systems · Canada',
  },
];

function Stars() {
  return (
    <span className="t-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => <Icon key={i} id="i-star" size={13} />)}
    </span>
  );
}

function TCard({ t }) {
  const [ref, inView] = useReveal();
  return (
    <figure ref={ref} className={`t-card ${t.featured ? 't-featured' : ''} reveal ${inView ? 'in' : ''}`}>
      <svg className="t-quote" width={t.featured ? 30 : 26} height={t.featured ? 22 : 19}><use href="#i-quote" /></svg>
      <blockquote>{t.quote}</blockquote>
      <figcaption>
        <span className="t-avatar">{t.initials}</span>
        <span className="t-who"><strong>{t.name}</strong><span>{t.role}</span></span>
        <Stars />
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const [headRef, headIn] = useReveal();
  return (
    <section className="section section-paper" id="testimonials">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`}>
          <p className="eyebrow eyebrow-dark">Signal received</p>
          <h2 className="h2">What outbound teams are saying.</h2>
          <p className="section-sub">A few notes from teams running their pipeline through Outreach OS.</p>
        </div>
        <div className="wall">
          {TESTIMONIALS.map((t) => <TCard key={t.initials} t={t} />)}
        </div>
      </div>
    </section>
  );
}