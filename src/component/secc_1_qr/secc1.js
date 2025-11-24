import React from "react";
import styles from "./secc_1.module.css";
import vars from "./../../var/colors.module.css";
import { PiFlowerFill } from "react-icons/pi";

export default function SectionComponent1() {
  return (
    <div className={styles.wrapper}>
      {/* Section 1 */}
      <section className={styles.hero}>
        <h1>Create Free Aesthetic QR Codes — Fast, Simple, and Customized</h1>
        <p>
          Generate beautiful pastel-style QR codes with custom colors, shapes,
          borders, and icons. No sign-up required — download instantly in high
          quality.
        </p>
      </section>

      {/* Section 2 */}
      <section className={styles.features}>
        <h2>Why Use Our Cute QR Generator?</h2>
        <ul>
          <li><PiFlowerFill className={styles.icon} />Pastel color palette for aesthetic QR codes</li>
          <li><PiFlowerFill className={styles.icon} />Transparent or white PNG download options</li>
          <li><PiFlowerFill className={styles.icon} />Custom borders and shapes</li>
          <li><PiFlowerFill className={styles.icon} />Optimized for small businesses and personal branding</li>
          <li><PiFlowerFill className={styles.icon} />No login required — totally free to use</li>
        </ul>
      </section>
    </div>
  );
}
