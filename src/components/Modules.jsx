import { Icon } from './IconSprite.jsx';
import { useReveal } from '../useReveal.js';

const MODULES = [
  { icon: 'i-target', tag: 'leadgen.sys', title: 'Lead Generation', desc: 'Targeted, qualified leads delivered straight into your pipeline — matched to your ideal customer profile, not a rented list.' },
  { icon: 'i-linkedin', tag: 'content.sys', title: 'LinkedIn Content Posting', desc: 'Niche-tailored posts that build authority in your specific market, on a cadence that keeps your brand visible.' },
  { icon: 'i-cpu', tag: 'automate.ai', title: 'AI Automation Lead Gen', desc: 'Smart sequencing that scales outreach volume while keeping every message feeling personal, not templated.' },
  { icon: 'i-mail', tag: 'newsletter.io', title: 'Newsletter', desc: 'Consistent, value-first email touchpoints that keep your brand top of mind long after the first conversation.' },
  { icon: 'i-pen', tag: 'create.sys', title: 'Content Creation', desc: "On-brand written and visual content, repurposed across every channel your buyers actually pay attention to." },
  { icon: 'i-globe', tag: 'global.sys', title: 'Built for Global Teams', desc: 'Operating across the United States, Canada, United Kingdom, Europe and Australia — 20+ companies run their outbound through Outreach OS.' },
];

function ModuleCard({ m }) {
  const [ref, inView] = useReveal();
  return (
    <article ref={ref} className={`module-card reveal ${inView ? 'in' : ''}`}>
      <div className="module-top">
        <span className="module-icon"><Icon id={m.icon} size={22} /></span>
        <span className="module-tag">{m.tag}</span>
      </div>
      <h3>{m.title}</h3>
      <p>{m.desc}</p>
    </article>
  );
}

export default function Modules() {
  const [headRef, headIn] = useReveal();

  return (
    <section className="section section-paper" id="modules">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`}>
          <p className="eyebrow eyebrow-dark">Six modules, one system</p>
          <h2 className="h2">Everything outbound, running together.</h2>
          <p className="section-sub">
            Each module works standalone — but they're built to hand off to each other, so a
            LinkedIn post becomes a warm lead, and a warm lead becomes a newsletter subscriber.
          </p>
        </div>

        <div className="modules-grid">
          {MODULES.map((m) => <ModuleCard key={m.tag} m={m} />)}
        </div>
      </div>
    </section>
  );
}