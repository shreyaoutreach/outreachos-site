import { useState, useEffect } from 'react';
import { Icon } from './IconSprite.jsx';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#modules', label: 'Services' },
    { href: '#process', label: 'How it works' },
    { href: '#testimonials', label: 'Results' },
    { href: '#reach', label: 'Coverage' },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="wrap nav-inner">
        <a href="#top" className="logo" aria-label="Outreach OS home" onClick={closeMenu}>
          <span className="logo-mark">OS</span>
          <span className="logo-word">Outreach<em>OS</em></span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Book a call</a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          style={{ zIndex: 101, position: 'relative' }}
        >
          <Icon id={open ? 'i-close' : 'i-menu'} size={22} />
        </button>
      </div>
    </header>
  );
}