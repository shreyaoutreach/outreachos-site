import { Icon } from './IconSprite.jsx';
import { useReveal } from '../useReveal.js';

const STEPS = [
  { num: '01', icon: 'i-db', title: 'Data Enrichment', desc: 'Verified firmographic and intent data feeds every campaign before a single message goes out.' },
  { num: '02', icon: 'i-spark', title: 'AI Personalization', desc: "Every message adapts to the prospect's role, industry, and recent activity — automatically." },
  { num: '03', icon: 'i-clock', title: 'Automated Sequencing', desc: 'Multi-touch outreach runs on schedule across channels, without anyone babysitting a spreadsheet.' },
  { num: '04', icon: 'i-usercheck', title: 'Human-in-the-Loop', desc: 'Our team reviews every reply and manages the conversation once a prospect shows interest.' },
];

function Step({ s }) {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className={`process-step reveal ${inView ? 'in' : ''}`}>
      <span className="process-num">{s.num}</span>
      <span className="process-icon"><Icon id={s.icon} size={20} /></span>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
    </div>
  );
}

export default function Process() {
  const [headRef, headIn] = useReveal();
  return (
    <section className="section section-ink" id="process">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`}>
          <p className="eyebrow">How the engine runs</p>
          <h2 className="h2 h2-light">Four stages. Always running.</h2>
          <p className="section-sub section-sub-light">
            Automation handles the volume. Our team keeps the judgment calls — every reply is
            read by a person before it's treated like a lead.
          </p>
        </div>
        <div className="process-flow">
          {STEPS.map((s) => <Step key={s.num} s={s} />)}
        </div>
      </div>
    </section>
  );
}