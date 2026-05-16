import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import photo from '../assets/sanjai.jpg';

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 5%', position: 'relative', zIndex: 1
    }}>
      <div
        className="hero-flex"
        style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%', maxWidth: 1200, margin: '0 auto',
          flexWrap: 'wrap', gap: 40
        }}
      >
        {/* Left Text */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <motion.p
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'Space Mono', color: 'var(--accent)',
              fontSize: '0.9rem', letterSpacing: 4, marginBottom: 16
            }}
          >
            FULL STACK DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
              lineHeight: 1, marginBottom: 24, letterSpacing: -2
            }}
          >
            SANJAI<br /><span style={{ color: 'var(--accent)' }}>E.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              color: 'var(--muted)', maxWidth: 500, lineHeight: 1.8,
              marginBottom: 16, fontSize: '1rem'
            }}
          >
            Results-driven developer crafting scalable web applications with
            <span style={{ color: 'var(--accent)' }}> React JS</span>,
            <span style={{ color: 'var(--accent)' }}> Java</span> &
            <span style={{ color: 'var(--accent)' }}> Spring Boot</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 }}
            style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}
          >
            {[
              { label: 'CGPA', value: '8.4' },
              { label: 'Projects', value: '4+' },
              { label: 'Location', value: 'Chennai' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Space Mono', fontSize: '1.4rem', color: 'var(--accent)', fontWeight: 700 }}>{s.value}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: 2 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <Link to="projects" smooth duration={600} offset={-80}>
              <button
                style={{
                  padding: '14px 32px', background: 'var(--accent)', color: '#050a0e',
                  border: 'none', borderRadius: 4, fontFamily: 'Syne', fontWeight: 700,
                  fontSize: '0.9rem', cursor: 'pointer', letterSpacing: 1,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 0 30px rgba(0,245,212,0.3)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(0,245,212,0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,212,0.3)';
                }}
              >
                VIEW PROJECTS →
              </button>
            </Link>

            <a href="mailto:sanjaisanjo46@gmail.com" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  padding: '14px 32px', background: 'transparent', color: 'var(--accent)',
                  border: '1px solid var(--accent)', borderRadius: 4, fontFamily: 'Syne',
                  fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', letterSpacing: 1,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,245,212,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                CONTACT ME
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div
            className="photo-wrap"
            style={{
              width: 320, height: 320, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              padding: 4, boxShadow: '0 0 80px rgba(0,245,212,0.25)'
            }}
          >
            <div style={{
              width: '100%', height: '100%', borderRadius: '50%',
              overflow: 'hidden', background: '#0c1821'
            }}>
              <img
                src={photo}
                alt="Sanjai E"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </div>

          {/* Orbit ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: -20, borderRadius: '50%',
              border: '2px dashed rgba(0,245,212,0.25)'
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: -44, borderRadius: '50%',
              border: '1px dashed rgba(247,37,133,0.2)'
            }}
          />

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: 10, right: -20,
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '10px 18px',
              fontFamily: 'Space Mono', fontSize: '0.72rem',
              color: 'var(--accent)', whiteSpace: 'nowrap',
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
            }}
          >
            🎓 B.E. CSE · CGPA 8.4
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
