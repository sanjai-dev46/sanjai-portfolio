import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Platform',
    emoji: '🛒',
    desc: 'Full-stack platform supporting 500+ product listings with cart management, secure order processing, and 8+ RESTful APIs. React JS frontend with dynamic routing.',
    tech: ['Java', 'Spring Boot', 'React JS', 'MySQL'],
    color: '#00f5d4',
  },
  {
    title: 'Job Portal Web App',
    emoji: '💼',
    desc: 'Responsive portal with 15+ reusable components, multi-role support (3 user types), job listing, search, filtering, and real-world form validation.',
    tech: ['React JS', 'React Router', 'React Hooks'],
    color: '#f72585',
  },
  {
    title: 'Airline Reservation System',
    emoji: '✈️',
    desc: 'Normalized relational database managing 10,000+ flight and booking records. Applied 3NF normalization achieving 25% data redundancy reduction.',
    tech: ['SQL', 'Snowflake', 'DB Design', '3NF'],
    color: '#7209b7',
  },
  {
    title: 'AI Text-to-Image App',
    emoji: '🎨',
    desc: 'Integrated external AI API with async JavaScript, reducing response latency by 40%. Fully responsive UI with improved user interaction scores.',
    tech: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
    color: '#4cc9f0',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 5%', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="accent">Projects</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              style={{
                background: 'var(--card)',
                border: `1px solid ${p.color}25`,
                borderRadius: 16, padding: 32,
                position: 'relative', overflow: 'hidden',
                cursor: 'default'
              }}
            >
              {/* Corner glow */}
              <div style={{
                position: 'absolute', top: 0, right: 0, width: 120, height: 120,
                background: `radial-gradient(circle, ${p.color}18, transparent)`,
                borderRadius: '0 0 0 120%'
              }} />

              {/* Bottom line accent */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 2, background: `linear-gradient(to right, ${p.color}, transparent)`
              }} />

              <div style={{ fontSize: '2.2rem', marginBottom: 16 }}>{p.emoji}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.87rem', lineHeight: 1.75, marginBottom: 20 }}>{p.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {p.tech.map((t) => (
                  <span key={t} style={{
                    padding: '4px 12px',
                    background: `${p.color}12`,
                    border: `1px solid ${p.color}35`,
                    borderRadius: 20, fontSize: '0.75rem',
                    color: p.color, fontFamily: 'Space Mono'
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/sanjaisanjo46"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: 'var(--muted)', textDecoration: 'none', fontSize: '0.83rem',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = p.color)}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                <FiGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
