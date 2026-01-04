import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import styles from "./page.module.css"

export default function Tracks() {
  const tracks = [
    {
      title: "Track 1: Agent-native Payments & Infrastructure",
      subtitle: "Native capabilities emerging from 'how services are deployed and monetized'",
      description:
        "In the era of Agents and Vibe coding, service supply is rapidly growing. Whether for consumer-facing 2C products or domain-specific 2B/professional services, the most applicable and lowest-friction commercialization path is becoming: deploy on-chain and use the chain as the settlement layer.",
      problems: [
        "Can any AI service use on-chain settlement as the default billing method?",
        "How can Agents discover services and complete subscriptions or pay-per-use transactions?",
        "Can payment/trading/investment be encapsulated as directly callable agent capabilities?",
      ],
      builds: [
        "AI services using blockchain as settlement layer (2C or 2B)",
        "Agent-callable payment, subscription and settlement protocols",
        "Payment middleware inspired by x402/facilitator",
        "Modular trading, investment, and settlement agentic infrastructure",
      ],
    },
    {
      title: "Track 2: Living with Agents & Intelligent Markets",
      subtitle: "How smarter Agent commerce truly takes off",
      description:
        "Future agents must be highly personalized, executable, and collaborative. Agent intelligence depends not just on model capabilities, but on the context they're given, stable and developable workflows, and execution ability within real systems.",
      problems: [
        "How can Agents acquire long-term, massive, and effective context? What are the best entry points?",
        "How to design agent workflows and execution flows, not just conversations?",
        "How can data, perception, execution and incentives work together so agents truly generate value?",
        "In crypto and native digital environments, how can agents better complete transactions, decisions and collaboration?",
      ],
      builds: [
        "Highly personalized, long-running agents or robots",
        "Context acquisition, management and update solutions for specific scenarios",
        "Agent workflows with strong execution capabilities (not just chat)",
        "Data collection, feedback and incentive mechanisms around agent intelligence",
        "AI-driven crypto-native products (smarter wallets, browsers, trading or research tools)",
      ],
    },
    {
      title: "Track 3: Agent-powered Applications",
      subtitle: "When Agents themselves become the core of products and entertainment",
      description:
        "When Agents are sufficiently autonomous and intelligent, they can become the core of products. In some scenarios, watching Agents compete and cooperate is itself a strong user experience and business model. Making Agent decision logic public or competitive on-chain can achieve high-discreteness data verifiability, reduce oracle risk, and enable low-threshold, gasless user participation.",
      problems: [
        "How can Agent confrontation, competition and collaboration become application forms?",
        "How to combine Agent behavior with prediction markets, betting or similar mechanisms?",
        "In trustless third-party scenarios, how to ensure Agent behavior and outcome verifiability?",
        "In crypto native environments, how can agents better complete transactions, decisions and collaboration?",
      ],
      builds: [
        "Agent-vs-Agent games or simulation systems (Poker, Chess, MOBA, etc.)",
        "Agent competition platforms deeply integrated with prediction markets",
        "Short, high-frequency round simulation or competition environments (5-10 minutes)",
        "Public or on-chain Agent decision logic achieving high-discreteness data verifiability, reducing oracle risk",
        "Low-threshold, gasless user participation (like Arcade Tokens) for observation, interaction or betting goals",
      ],
    },
  ]

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2 className={styles.title}>
                Tracks
                <br />
                <span className={styles.accent}>Which Directions Are Worth Exploring</span>
              </h2>
              <p className={styles.subtitle}>Choose a track and build the future</p>
            </div>

            <div className={styles.tracksList}>
              {tracks.map((track, index) => (
                <div key={track.title} className={styles.trackCard}>
                  <div className={styles.trackContent}>
                    <div className={styles.trackHeader}>
                      <div className={styles.trackHeaderInner}>
                        <span className={styles.trackNumber}>0{index + 1}</span>
                        <div className={styles.trackTitleWrapper}>
                          <h3 className={styles.trackTitle}>{track.title}</h3>
                          <p className={styles.trackSubtitle}>{track.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <p className={styles.trackDescription}>{track.description}</p>

                    <div className={styles.trackSections}>
                      <div>
                        <h4 className={styles.sectionTitle}>Problems this track aims to solve:</h4>
                        <ul className={styles.itemList}>
                          {track.problems.map((problem, idx) => (
                            <li key={idx} className={styles.listItem}>
                              <span className={styles.bullet}>•</span>
                              <span>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={styles.sectionTitle}>What we hope to see built:</h4>
                        <ul className={styles.itemList}>
                          {track.builds.map((build, idx) => (
                            <li key={idx} className={styles.listItem}>
                              <span className={styles.bullet}>•</span>
                              <span>{build}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
