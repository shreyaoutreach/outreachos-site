import { useEffect, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { Icon } from './IconSprite.jsx';
import { useReveal } from '../useReveal.js';
import { CAL_LINK, LINKEDIN_URL, CONTACT_EMAIL } from '../config.js';

const isConfigured = CAL_LINK && !CAL_LINK.startsWith('your-username');

export default function BookCall() {
  const [ref, inView] = useReveal();
  const [ready, setReady] = useState(false);
  const [showCal, setShowCal] = useState(false);

  useEffect(() => {
    if (!isConfigured || !showCal) return;
    (async () => {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#22D3A6' } },
        hideEventTypeDetails: false,
      });
      setReady(true);
    })();
  }, [showCal]);

  return (
    <section className="cta-final" id="contact">
      <div className="wrap cta-final-inner">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`} style={{ width: '100%' }}>
          <h2 className="h2 h2-light" style={{ textAlign: 'center' }}>Let's build your pipeline.</h2>
          <p className="section-sub section-sub-light" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
            Pick a time that works for you — details go straight into our calendar and inbox, no back-and-forth emails.
          </p>

          <div className={`book-panel${showCal ? ' book-panel-open' : ''}`}>
            {isConfigured ? (
              showCal ? (
                <Cal
                  calLink={CAL_LINK}
                  style={{ width: '100%', height: '100%', minHeight: '600px' }}
                  config={{ layout: 'month_view' }}
                />
              ) : (
                <div className="book-trigger">
                  <button className="btn-book" onClick={() => setShowCal(true)}>
                    <Icon id="i-calendar" size={20} />
                    Schedule a 30-min call
                    <Icon id="i-arrow" size={16} />
                  </button>
                  <div className="book-trigger-features">
                    <span><Icon id="i-check" size={14} /> Free consultation</span>
                    <span><Icon id="i-check" size={14} /> No commitment</span>
                    <span><Icon id="i-check" size={14} /> 30 minutes</span>
                  </div>
                </div>
              )
            ) : (
              <div className="book-placeholder">
                <span className="book-placeholder-icon"><Icon id="i-calendar" size={26} /></span>
                <h3>Calendar not connected yet</h3>
                <p>
                  Add your free Cal.com scheduling link in <code>src/config.js</code> (the
                  <code>CAL_LINK</code> constant) to turn this into a live booking calendar.
                  Once connected, every booking lands in your calendar and your inbox automatically.
                </p>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-solid"
                  style={{ marginTop: '18px' }}
                >
                  Set up Cal.com — it's free<Icon id="i-arrow" size={16} />
                </a>
              </div>
            )}
          </div>

          <div className="hero-cta" style={{ justifyContent: 'center', marginTop: '34px' }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-ghost">Message us instead</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Follow on LinkedIn
            </a>
          </div>
          <p className="cta-fineprint" style={{ textAlign: 'center' }}>
            {CONTACT_EMAIL} &nbsp;·&nbsp; Advertising &amp; B2B Growth Services
          </p>
        </div>
      </div>
    </section>
  );
}