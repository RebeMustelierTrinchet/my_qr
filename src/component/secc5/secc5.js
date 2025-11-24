import React from "react";
import styles from "./secc5.module.css";

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>QR Blog — Tips & Inspiration</h2>
        <p className={styles.subtitle}>Quick articles to help you get the most out of your QR codes.</p>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>10 Creative Uses for a QR Code</h3>
            <p>
              From digital menus to interactive posters, QR codes can turn any offline moment
              into a dynamic experience. Use them for events, feedback, payments, or even gifts.
            </p>
         
          </article>

          <article className={styles.card}>
            <h3>How to Add QR Codes to Your Social Media</h3>
            <p>
              QR codes make it easy for people to find your profiles instantly. Add them to
              Instagram stories, Facebook posts, business cards, or your WhatsApp contact link.
            </p>
           
          </article>

          <article className={styles.card}>
            <h3>Pros & Cons of QR Codes</h3>
            <p>
              QR codes are fast, free, and universal — but require internet access and may not
              work on very old devices. Still, they remain one of the best tools for sharing info.
            </p>
           
          </article>
        </div>
      </div>
    </section>
  );
}