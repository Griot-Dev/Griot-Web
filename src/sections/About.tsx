// GRIOT TECH — About Section with Authentic Workspace Photography
import React from 'react'
import { MapPin, Target, Code2, MessageSquare, Users2 } from 'lucide-react'
import { useScrollAnimation } from '@/hooks'
import styles from './About.module.css'

export function About() {
  const sectionRef = useScrollAnimation<HTMLElement>((el, tl) => {
    tl.from(el.querySelectorAll(`.${styles.statCard}`), {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out',
    })
  })

  return (
    <section id="about" ref={sectionRef} className={`section ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="eyebrow">ABOUT THE TEAM</div>
          <h2 className="section-heading">Small Team. Serious Engineering.</h2>
          <p className="section-subheading">
            Full-cycle software engineering studio and digital architecture consultancy based in Kanyakumari, Tamil Nadu.
          </p>
        </div>

        <div className={styles.contentSplit}>
          <div className={styles.narrativeCol}>
            <p>
              At <strong>GRIOT TECH</strong>, we avoid unnecessary layers, inflated roadmaps, and bloated architectures. We treat software engineering as an exacting craft—translating genuine business problems into reliable, modular, and maintainable systems.
            </p>
            <p>
              Operating from the coastal southern tip of India, we partner directly with founders, growing businesses, and technical leads who value clarity, direct communication, and pragmatic delivery over agency bureaucracy.
            </p>
            <p>
              Every system we engineer is backed by clean code standards, comprehensive database schemas, robust APIs, and performant web interfaces built to sustain long-term business growth.
            </p>

            {/* Authentic Studio Photography Gallery */}
            <div className={styles.photoGrid}>
              <div className={styles.photoCard}>
                <img
                  src="/assets/images/studio-office.webp"
                  alt="GRIOT TECH Engineering Studio Office in Kanyakumari"
                  className={styles.photoImg}
                />
                <div className={styles.photoMeta}>
                  <span className={styles.photoLabel}>ENGINEERING STUDIO</span>
                  <span className={styles.photoCaption}>Kanyakumari, Tamil Nadu</span>
                </div>
              </div>

              <div className={styles.photoCard}>
                <img
                  src="/assets/images/team-collaboration.webp"
                  alt="GRIOT TECH Software Engineers in Architecture Session"
                  className={styles.photoImg}
                />
                <div className={styles.photoMeta}>
                  <span className={styles.photoLabel}>COLLABORATION</span>
                  <span className={styles.photoCaption}>Pair Programming &amp; Code Reviews</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.technicalGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <MapPin size={20} />
              </div>
              <div className={styles.statLabel}>Location</div>
              <div className={styles.statValue}>Kanyakumari, India</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Target size={20} />
              </div>
              <div className={styles.statLabel}>Core Focus</div>
              <div className={styles.statValue}>Business &amp; Web Systems</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Code2 size={20} />
              </div>
              <div className={styles.statLabel}>Primary Stack</div>
              <div className={styles.statValue}>React, Python, Node.js</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <MessageSquare size={20} />
              </div>
              <div className={styles.statLabel}>Collaboration</div>
              <div className={styles.statValue}>Direct Developer Access</div>
            </div>

            {/* Human Team Commitment Note */}
            <div className={styles.studioNoteCard}>
              <Users2 size={24} color="var(--electric-orange)" style={{ flexShrink: 0 }} />
              <div className={styles.studioNoteText}>
                <strong>Direct Senior Developer Access:</strong> You collaborate directly with the engineers designing your data schemas, writing your APIs, and deploying your code.
              </div>
            </div>
          </div>
        </div>

        {/* Principles / Engineering Values */}
        <div className={styles.principlesSection}>
          <h3 className={styles.principlesHeading}>Engineering Principles</h3>
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <span className={styles.principleNum}>01 / ARCHITECTURE</span>
              <h4 className={styles.principleTitle}>Modularity First</h4>
              <p className={styles.principleText}>
                We design services and UI layers with low coupling and high cohesion, ensuring systems scale without compounding technical debt.
              </p>
            </div>

            <div className={styles.principleCard}>
              <span className={styles.principleNum}>02 / PERFORMANCE</span>
              <h4 className={styles.principleTitle}>Measurable Efficiency</h4>
              <p className={styles.principleText}>
                From optimized database queries to sub-second UI render passes, performance is built into the foundation, not patched later.
              </p>
            </div>

            <div className={styles.principleCard}>
              <span className={styles.principleNum}>03 / TRANSPARENCY</span>
              <h4 className={styles.principleTitle}>No Guesswork</h4>
              <p className={styles.principleText}>
                Clear specifications, verified timelines, and continuous delivery loops give you full visibility into technical progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
