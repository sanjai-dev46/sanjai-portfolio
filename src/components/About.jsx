import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 5%', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About <span className="accent">Me</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }} viewport={{ once: true }}
          >
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '1rem', marginBottom: 24 }}>
              I'm a <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Full Stack Developer</span> with a 
              Bachelor of Engineering in Computer Science from Sri Ramanujar Engineering College (CGPA: 8.4).
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '1rem', marginBottom: 24 }}>
              I'm passionate about building end-to-end web applications that are both 
              <span style={{ color: 'var(--accent)' }}> scalable</span> and 
              <span style={{ color: 'var(--accent)' }}> user-friendly</span>. 
              With hands-on experience in React JS, Java, Spring Boot, and SQL, I bring ideas to life from frontend to database.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '1rem' }}>
              I've interned as a Front-End Developer at Go-Course Solutions and as an IoT Engineer at RE-Tech Solutions, 
              giving me real-world exposure to both web and hardware-integrated systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }} viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {[
              { label: 'Education', value: 'B.E. CSE', sub: 'Sri Ramanujar Engineering College' },
              { label: 'CGPA', value: '8.4 / 10', sub: '2021 — 2025' },
              { label: 'Experience', value: '2 Internships', sub: 'Frontend & IoT' },
              { label: 'Projects', value: '4+ Built', sub: 'Full Stack & DB' },
            ].map((item) => (
              <div key={item.label} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 12, padding: 20
              }}>
                <p style={{ fontFamily: 'Space Mono', color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: 2, marginBottom: 6 }}>
                  {item.label.toUpperCase()}
                </p>
                <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{item.value}</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{item.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }} viewport={{ once: true }}
          style={{ marginTop: 60 }}
        >
          <p style={{ fontFamily: 'Space Mono', color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: 3, marginBottom: 20 }}>
            CERTIFICATIONS
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              'Java Full-Stack Developer — Besant Technologies',
              'Front-End Web Developer — Go-Course Solutions',
              'Internet Of Things — Re-Tech Solutions',
            ].map((cert) => (
              <div key={cert} style={{
                padding: '10px 20px', background: 'rgba(0,245,212,0.06)',
                border: '1px solid rgba(0,245,212,0.2)', borderRadius: 24,
                fontSize: '0.85rem', color: 'var(--text)'
              }}>
                🏅 {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
