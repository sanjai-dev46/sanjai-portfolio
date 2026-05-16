import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Front-End Web Developer Intern',
    company: 'Go-Course Solutions',
    period: 'Aug 2024 — Sep 2024',
    color: '#00f5d4',
    emoji: '💻',
    points: [
      'Engineered 10+ responsive web pages using HTML5, CSS3, and JavaScript — reducing UI inconsistencies by 30%.',
      'Built 5+ reusable React components with Hooks (useState, useEffect) and React Router, cutting code duplication by ~40%.',
      'Accelerated page load performance by 20% through front-end debugging and modern UI/UX design principles.',
    ],
  },
  {
    role: 'IoT Intern',
    company: 'RE-Tech Solutions',
    period: 'Jun 2023 — Jul 2023',
    color: '#f72585',
    emoji: '🔌',
    points: [
      'Integrated hardware devices with cloud services across 3+ distributed IoT systems enabling real-time data monitoring.',
      'Contributed to system design discussions and troubleshooting, improving data collection reliability for 2 live projects.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 5%', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work <span className="accent">Experience</span>
        </motion.h2>

        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 12, top: 10, bottom: 10, width: 2,
            background: 'linear-gradient(to bottom, var(--accent), var(--accent2))',
            borderRadius: 2
          }} />

          {experiences.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              style={{ marginBottom: 56, position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: -34, top: 6,
                width: 20, height: 20, borderRadius: '50%',
                background: e.color, boxShadow: `0 0 20px ${e.color}80`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.6rem'
              }}>
                ●
              </div>

              <div style={{
                background: 'var(--card)',
                border: `1px solid ${e.color}25`,
                borderRadius: 16, padding: 28,
                position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: 80, height: 80,
                  background: `radial-gradient(circle, ${e.color}15, transparent)`,
                  borderRadius: '0 0 0 80%'
                }} />

                <p style={{
                  fontFamily: 'Space Mono', color: e.color,
                  fontSize: '0.72rem', letterSpacing: 2, marginBottom: 8
                }}>
                  {e.period}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: '1.4rem' }}>{e.emoji}</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{e.role}</h3>
                </div>
                <p style={{ color: 'var(--muted)', marginBottom: 20, fontSize: '0.88rem' }}>{e.company}</p>

                <ul style={{ listStyle: 'none' }}>
                  {e.points.map((pt, j) => (
                    <li key={j} style={{
                      color: 'var(--muted)', fontSize: '0.87rem',
                      marginBottom: 10, paddingLeft: 20,
                      position: 'relative', lineHeight: 1.7
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: e.color, fontWeight: 700 }}>›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
