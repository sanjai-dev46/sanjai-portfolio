import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 5%',
        background: 'rgba(5,10,14,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,245,212,0.1)'
      }}
    >
      <span style={{
        fontFamily: 'Space Mono', fontWeight: 700, fontSize: '1.1rem',
        color: 'var(--accent)', letterSpacing: 2
      }}>
        SANJAI.DEV
      </span>

      <div className="nav-links" style={{ display: 'flex', gap: '32px' }}>
        {links.map((l) => (
          <Link
            key={l}
            to={l.toLowerCase()}
            smooth
            duration={600}
            offset={-80}
            style={{
              cursor: 'pointer', fontSize: '0.85rem', letterSpacing: 2,
              color: 'var(--muted)', textTransform: 'uppercase',
              transition: 'color 0.3s', textDecoration: 'none'
            }}
            onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.target.style.color = 'var(--muted)')}
          >
            {l}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
