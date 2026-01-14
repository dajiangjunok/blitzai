import Image from 'next/image'
import styles from './HeroContainer.module.css'
import { ArrowUpLeft, ArrowUpRight, Plus, X } from 'lucide-react'

export const HeroContainer = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hostRow}>
        <div className={styles.hostGroup}>
          <Image
            width={600}
            height={50}
            src="/home/logo/hero_logo.png"
            alt=""
          ></Image>
        </div>
      </div>

      <div className={styles.titleBlock}>
        <p className={styles.title}>Rebel in Paradise</p>
        <p className={styles.title}>AI Hackathon</p>
      </div>

      <div className={styles.subtitleRow}>
        <div className={styles.arrowCluster}>
          <div>
            <ArrowUpLeft />
            <ArrowUpLeft />
          </div>
          <div>
            <Plus />
            <Plus />
          </div>
        </div>
        <p className={styles.subtitle}>
          Jan 19 - Feb 28, 2026 | Monad Blitz Pro Series
        </p>
        <div className={`${styles.arrowCluster}`}>
          <div>
            <Plus />
            <Plus />
          </div>
          <div>
            <ArrowUpRight />
            <ArrowUpRight />
          </div>
        </div>
      </div>

      <div className={styles.partnerArea}>
        <div className={styles.hostGroup}>
          <span className={styles.hostLabel}>Co-host</span>
          <span className={styles.hostLogo}>segmentfault</span>
          <span className={styles.hostX}>x</span>
          <span className={styles.hostLogoOutline}>VibeFriends</span>
        </div>
        <div className={styles.partnerCharacters} aria-hidden="true">
          <Image
            width={300}
            height={300}
            className={`${styles.partnerCharacter} ${styles.partnerCharacterLeft}`}
            src="/home/manga-girl/manga_girl_1.png"
            alt=""
          />
          <Image
            width={300}
            height={300}
            className={`${styles.partnerCharacter} ${styles.partnerCharacterCenterLeft}`}
            src="/home/manga-girl/manga_girl_2.png"
            alt=""
          />
          <Image
            width={300}
            height={300}
            className={`${styles.partnerCharacter} ${styles.partnerCharacterCenterRight}`}
            src="/home/manga-girl/manga_girl_4.png"
            alt=""
          />
          <Image
            width={300}
            height={300}
            className={`${styles.partnerCharacter} ${styles.partnerCharacterRight}`}
            src="/home/manga-girl/manga_girl_3.png"
            alt=""
          />
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
      </div>
    </section>
  )
}
