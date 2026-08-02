import { Icon } from './IconSprite.jsx';
import { useReveal } from '../useReveal.js';

const REGIONS = ['United States', 'Canada', 'United Kingdom', 'Europe', 'Australia'];

export default function Reach() {
  const [headRef, headIn] = useReveal();
  const [rowRef, rowIn] = useReveal();
  const [noteRef, noteIn] = useReveal();

  return (
    <section className="section section-ink section-reach" id="reach">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`}>
          <p className="eyebrow">Coverage</p>
          <h2 className="h2 h2-light">Wherever your buyers are.</h2>
        </div>
        <div ref={rowRef} className={`reach-row reveal ${rowIn ? 'in' : ''}`}>
          {REGIONS.map((r) => (
            <div className="reach-chip" key={r}><Icon id="i-pin" size={16} />{r}</div>
          ))}
        </div>
        <p ref={noteRef} className={`reach-note reveal ${noteIn ? 'in' : ''}`}>
          <Icon id="i-globe" size={16} /> 20+ companies run their outbound through Outreach OS across five regions.
        </p>
      </div>
    </section>
  );
}