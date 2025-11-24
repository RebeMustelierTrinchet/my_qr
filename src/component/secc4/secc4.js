import React from "react";
import styles from "./secc4.module.css";

export default function SafeQR() {
  return (
    <section className={styles.safeSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Safe QR — Your Security Matters</h2>
        <p className={styles.subtitle}>
          Our QR codes are reliable, secure, and private. We never store your data
          and your QR will always work.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>No Expiration</h3>
            <p>
              Your QR code will never expire. Once generated, it stays valid
              forever unless you manually change the URL or content.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No Data Storage</h3>
            <p>
              We don’t store links, personal information, analytics, or scans.
              Everything is generated instantly in your browser.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Privacy First</h3>
            <p>
              Your QR is created locally, ensuring that your information remains
              safe and private at all times.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Secure Process</h3>
            <p>
              Our tool uses a safe and lightweight generator with zero external
              tracking, ensuring reliability for personal and business use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
