"use client";

import styles from './Technical.module.css';

export default function Technical() {
    return (
        <section id="technical" className={styles.technicalSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    <i className="fas fa-laptop-code"></i> Technical Expertise
                </h2>
                <p className={styles.description}>
                    Proficient in a wide range of modern technologies, focusing on building scalable and efficient web applications
                </p>

                <div className={styles.gridContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <i className="fas fa-code"></i>
                        </div>
                        <h3 className={styles.cardTitle}>Languages</h3>
                        <p className={styles.cardText}>
                            JavaScript, TypeScript, and C#
                        </p>
                        <div className={styles.techIcons}>
                            <i className="fab fa-js"></i>
                            <i className="fab fa-typescript"></i>
                            <i className="fab fa-microsoft"></i>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <i className="fas fa-desktop"></i>
                        </div>
                        <h3 className={styles.cardTitle}>Frontend Development</h3>
                        <p className={styles.cardText}>
                            React.js, Angular, Next.js and Bootstrap
                        </p>
                        <div className={styles.techIcons}>
                            <i className="fab fa-react"></i>
                            <i className="fab fa-angular"></i>
                            <i className="fab fa-bootstrap"></i>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <i className="fas fa-server"></i>
                        </div>
                        <h3 className={styles.cardTitle}>Backend Development</h3>
                        <p className={styles.cardText}>
                            Node.js, Express.js, and REST APIs
                        </p>
                        <div className={styles.techIcons}>
                            <i className="fab fa-node-js"></i>
                            <i className="fas fa-network-wired"></i>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <i className="fas fa-database"></i>
                        </div>
                        <h3 className={styles.cardTitle}>Database</h3>
                        <p className={styles.cardText}>
                            MongoDB, working with NoSQL databases
                        </p>
                        <div className={styles.techIcons}>
                            <i className="fas fa-leaf"></i>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <i className="fas fa-tools"></i>
                        </div>
                        <h3 className={styles.cardTitle}>Tools & DevOps</h3>
                        <p className={styles.cardText}>
                            Git, Postman, and development tools
                        </p>
                        <div className={styles.techIcons}>
                            <i className="fab fa-git-alt"></i>
                            <i className="fas fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}