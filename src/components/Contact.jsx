import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const contacts = [
  { icon: <FiMail size={18} />, label: 'sanjaisanjo46@gmail.com', href: 'mailto:sanjaisanjo46@gmail.com', color: '#00f5d4' },
  { icon: <FiPhone size={18} />, label: '+91 7904193510', href: 'tel:+917904193510', color: '#f72585' },
  { icon: <FiGithub size={18} />, label: 'GitHub', href: 'https://github.com/sanjai-dev46', color: '#7209b7' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanjai-e-785890369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#4cc9f0' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 5% 60px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'block', textAlign: 'center' }}
        >
          Let's <span className="accent">Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }} viewport={{ once: true }}
          style={{ color: 'var(--muted)', marginBottom: 14, lineHeight: 1.8, fontSize: '1rem' }}
        >
          Open to full-stack developer roles, collaborations, and interesting projects.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }} viewport={{ once: true }}
          style={{ color: 'var(--muted)', marginBottom: 56, lineHeight: 1.8 }}
        >
          Based in <span style={{ color: 'var(--accent)' }}>Chennai, India</span> — available for remote & on-site opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }} viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '14px 24px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 10, color: 'var(--text)',
                textDecoration: 'none', fontSize: '0.88rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = c.color;
                e.currentTarget.style.color = c.color;
                e.currentTarget.style.boxShadow = `0 0 20px ${c.color}30`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {c.icon} {c.label}
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }} viewport={{ once: true }}
          style={{
            color: 'rgba(255,255,255,0.12)', marginTop: 100,
            fontFamily: 'Space Mono', fontSize: '0.72rem', letterSpacing: 2
          }}
        >
          © 2025 SANJAI E · BUILT WITH REACT JS + THREE.JS
        </motion.p>
      </div>
    </section>
  );
}
