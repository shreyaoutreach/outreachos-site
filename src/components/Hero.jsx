import { useEffect, useRef, useState } from 'react';
import { Icon } from './IconSprite.jsx';
import { useReveal } from '../useReveal.js';

const SEQUENCE = [
  { text: 'scanning target accounts', status: 'match found' },
  { text: 'prospect identified', name: 'Maya R. — Head of Growth' },
  { text: 'connection request sent', status: 'accepted' },
  { text: 'reply received', quote: '"Interested — send more info"' },
  { text: 'meeting booked', status: 'Tue · 10:00 AM' },
];

function TerminalLine({ item }) {
  if (!item) return null;

  return (
    <p className="term-line">
      <span className="term-prompt">&gt;</span>
      {item.text}
      {item.name && (
        <span style={{ color: '#7C8AA0' }}>
          {' — ' + item.name}
        </span>
      )}
      {item.quote && (
        <span style={{ color: '#22D3A6' }}>
          {' ' + item.quote}
        </span>
      )}
      {item.status && (
        <span className="term-status ok">
          {item.status}
        </span>
      )}
    </p>
  );
}

export default function Hero() {
  const [heroRef, heroIn] = useReveal();
  const [lines, setLines] = useState([]);
  const [settled, setSettled] = useState(false);

  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduceMotion) {
      setLines(SEQUENCE);
      setSettled(true);
      return;
    }

    let cancelled = false;

    const step = () => {
      if (cancelled) return;

      if (indexRef.current >= SEQUENCE.length) {
        setSettled(true);

        timeoutRef.current = setTimeout(() => {
          if (cancelled) return;

          indexRef.current = 0;
          setLines([]);
          setSettled(false);

          timeoutRef.current = setTimeout(step, 500);
        }, 2600);

        return;
      }

      const nextItem = SEQUENCE[indexRef.current];

      if (nextItem) {
        setLines(prev => {
          const next = [...prev, nextItem];
          return next.length > 6 ? next.slice(-6) : next;
        });
      }

      indexRef.current++;

      timeoutRef.current = setTimeout(
        step,
        indexRef.current === 1 ? 500 : 950
      );
    };

    timeoutRef.current = setTimeout(step, 600);

    return () => {
      cancelled = true;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      indexRef.current = 0;
    };
  }, [reduceMotion]);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div
          ref={heroRef}
          className={`hero-copy reveal ${heroIn ? 'in' : ''}`}
        >
          <p className="eyebrow">Outbound Operating System</p>

          <h1 className="h1">
            Outreach OS runs the outbound
            <br />
            your team <em>doesn't have time for.</em>
          </h1>

          <p className="hero-sub">
            Lead generation, LinkedIn content, AI-driven sequencing, and
            newsletters — running as one connected system instead of five
            disconnected tools. Built for B2B teams across the US, Canada, UK,
            Europe and Australia.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-solid">
              Book a call <Icon id="i-arrow" size={16} />
            </a>

            <a href="#process" className="btn btn-ghost">
              See how it runs
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="term">
            <div className="term-bar">
              <span className="dot dot-r"></span>
              <span className="dot dot-y"></span>
              <span className="dot dot-g"></span>
              <span className="term-title">
                outreach-os — pipeline.live
              </span>
            </div>

            <div className="term-body">
              {lines
                .filter(Boolean)
                .map((item, i) => (
                  <TerminalLine key={i} item={item} />
                ))}

              {settled && (
                <p className="term-line">
                  <span className="term-prompt">$</span>
                  <span className="term-cursor"></span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="ticker" role="presentation">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} style={{ display: 'contents' }}>
              <span>OPERATING IN — UNITED STATES</span>
              <span>CANADA</span>
              <span>UNITED KINGDOM</span>
              <span>EUROPE</span>
              <span>AUSTRALIA</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}