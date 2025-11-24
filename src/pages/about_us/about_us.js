import React from "react";
import styles from "./about_us.module.css";
import { FaHeart, FaUsers, FaLightbulb } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.subtitle}>
          We are passionate about making QR codes simple, fun, and safe for everyone.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}><FaHeart /></div>
            <h3>Our Mission</h3>
            <p>Provide an easy and secure QR code generator accessible to all users worldwide.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}><FaUsers /></div>
            <h3>Our Team</h3>
            <p>Just a bored college student who decided to make a page to generate free QR codes.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}><FaLightbulb /></div>
            <h3>Our Vision</h3>
            <p>Inspire creativity and innovation by making QR codes an everyday tool for everyone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}