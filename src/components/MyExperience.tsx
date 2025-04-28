"use client";

import styles from './MyExperience.module.css';

export default function MyExperience() {
    return (
        <section id="experience" className={styles.experienceSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    <i className="fas fa-briefcase"></i> Work Experience
                </h2>

                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <div className={styles.date}>July 2023 - Present</div>
                            <h3 className={styles.role}>Software Developer</h3>
                            <div className={styles.company}>Digitkode Software Pvt. Ltd.</div>
                            <p className={styles.description}>
                                Maintaining and developing new features for invoicetemple.com using Node.js, React.js, and Express.js REST API. 
                                Working with modern web technologies to create responsive and visually stunning interfaces.
                            </p>
                            <div className={styles.skills}>
                                <span className={styles.skill}>Node.js</span>
                                <span className={styles.skill}>React.js</span>
                                <span className={styles.skill}>Express.js</span>
                                <span className={styles.skill}>TypeScript</span>
                                <span className={styles.skill}>SCSS</span>
                            </div>
                        </div>
                        <div className={styles.timelineDot}></div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <div className={styles.date}>May 2021 - July 2023</div>
                            <h3 className={styles.role}>Angular Developer</h3>
                            <div className={styles.company}>Kuttyveni Computing</div>
                            <p className={styles.description}>
                                Developed web applications for Windows and Android platforms using Angular Framework.
                                Built 20+ interactive SPAs and architected 25+ AWS Instances flexible Component APIs.
                                Created enterprise-level software experiences at debesis.tech.
                            </p>
                            <div className={styles.skills}>
                                <span className={styles.skill}>Angular</span>
                                <span className={styles.skill}>TypeScript</span>
                                <span className={styles.skill}>AWS</span>
                                <span className={styles.skill}>HTML5/CSS3</span>
                            </div>
                        </div>
                        <div className={styles.timelineDot}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}