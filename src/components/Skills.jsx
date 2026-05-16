import { motion } from 'framer-motion';

const skills = [
  {
    cat: 'Frontend',
    icon: '⚛️',
    color: '#00f5d4',
    items: ['React JS', 'JavaScript ES6+', 'HTML5 / CSS3', 'React Hooks', 'React Router', 'Responsive Design'],
  },
  {
    cat: 'Backend',
    icon: '☕',
    color: '#f72585',
    items: ['Java', 'Spring Boot', 'REST API Development', 'OOP Concepts'],
  },
  {
    cat: 'Database',
    icon: '🗄️',
    color: '#7209b7',
    items: ['MySQL', 'Snowflake', 'SQL', 'Relational DB Design', 'Normalization (3NF)'],
  },
  {
    cat: 'Tools & Others',
    icon: '🛠️',
    color: '#4cc9f0',
    items: ['Git & GitHub', 'VS Code', 'Data Structures', 'CRUD Operations', 'UI/UX Principles', 'Agile'],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 5%', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical <span className="accent">Skills</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {skills.map((s, i) => (
            <motion.div
              key={s.cat}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                background: 'var(--card)',
                border: `1px solid ${s.color}25`,
                borderRadius: 16, padding: 28,
                backdropFilter: 'blur(10px)',
                position: 'relative', overflow: 'hidden'
              }}
            >
              {/* Glow top-right */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 80, height: 80,
                background: `radial-gradient(circle, ${s.color}20, transparent)`,
                borderRadius: '0 0 0 80%'
              }} />

              <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{s.icon}</div>
              <p style={{
                fontFamily: 'Space Mono', color: s.color,
                fontSize: '0.72rem', letterSpacing: 3, marginBottom: 20
              }}>
                {s.cat.toUpperCase()}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {s.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: '6px 14px',
                      background: `${s.color}10`,
                      border: `1px solid ${s.color}30`,
                      borderRadius: 20, fontSize: '0.82rem',
                      color: 'var(--text)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
