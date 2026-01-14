import styles from "./HeroContainer.module.css"

export const HeroContainer = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.gridLayer} aria-hidden="true" />
      <div className={styles.gridAccent} aria-hidden="true" />

      <div className={styles.hostRow}>
        <div className={styles.hostGroup}>
          <span className={styles.hostLabel}>Host</span>
          <span className={styles.hostLogo}>OpenBuild</span>
          <span className={styles.hostX}>x</span>
          <span className={styles.hostLogo}>MONAD</span>
        </div>
        <div className={styles.hostGroup}>
          <span className={styles.hostLabel}>Co-host</span>
          <span className={styles.hostLogo}>segmentfault</span>
          <span className={styles.hostX}>x</span>
          <span className={styles.hostLogoOutline}>VibeFriends</span>
        </div>
      </div>

      <div className={styles.titleBlock}>
        <h1 className={styles.title}>
          Rebel in Paradise
          <br />
          AI Hackathon
        </h1>
      </div>

      <div className={styles.subtitleRow}>
        <div className={styles.arrowCluster}>
          <span className={styles.arrow} />
          <span className={`${styles.arrow} ${styles.arrowOffset}`} />
          <span className={styles.plus} />
        </div>
        <p className={styles.subtitle}>Jan 19 - Feb 28, 2026 | Monad Blitz Pro Series</p>
        <div className={`${styles.arrowCluster} ${styles.arrowClusterRight}`}>
          <span className={styles.plus} />
          <span className={styles.arrow} />
          <span className={`${styles.arrow} ${styles.arrowOffset}`} />
        </div>
      </div>

      <div className={styles.characterLayer} aria-hidden="true">
        <div className={`${styles.character} ${styles.characterLeft}`} />
        <div className={`${styles.character} ${styles.characterCenterLeft}`} />
        <div className={`${styles.character} ${styles.characterCenterRight}`} />
        <div className={`${styles.character} ${styles.characterRight}`} />
      </div>

      <div className={styles.partnerBlock}>
        <div className={styles.partnerRow}>
          <span className={styles.partnerLabel}>Technology Partners</span>
          <div className={styles.partnerLogos}>
            <span>KIMI</span>
            <span>Zhitu</span>
            <span>YouWare</span>
            <span>StepFun</span>
            <span>Rokid</span>
            <span>SiliconFlow</span>
          </div>
        </div>
        <div className={styles.partnerRow}>
          <span className={styles.partnerLabel}>Community Support</span>
          <div className={styles.partnerLogos}>
            <span>Hackathon Weekly</span>
            <span>Datawhale</span>
            <span>WaytoAGI</span>
            <span>Epic</span>
            <span>AIGC Open</span>
            <span>Rust.cc</span>
            <span>PyChina</span>
            <span>RTE Dev</span>
          </div>
        </div>
      </div>
    </section>
  )
}

 
