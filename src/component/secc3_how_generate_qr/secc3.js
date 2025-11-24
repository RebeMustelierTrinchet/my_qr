import React from "react";
import styles from "./secc3.module.css";
import { FaBullhorn, FaStore, FaCalendarAlt, FaUtensils } from "react-icons/fa";

export default function Benefits() {
  const items = [
    {
      icon: <FaBullhorn />,
      title: "Marketing",
      text: "QR codes help brands connect quickly with users, boost engagement, and track campaign performance.",
    },
    {
      icon: <FaStore />,
      title: "Business",
      text: "They simplify payments, product information, and customer interactions for all types of businesses.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Events",
      text: "E-tickets, registrations, and schedules are easily accessible by scanning a QR code.",
    },
    {
      icon: <FaUtensils />,
      title: "Restaurants",
      text: "Menus, ordering systems, and promotions become touch-free, fast, and convenient.",
    },
  ];

  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.title}>Benefits of Using QR Codes</h2>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
