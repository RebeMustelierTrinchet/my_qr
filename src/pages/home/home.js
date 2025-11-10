import React from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleGenerate = () => {
    navigate("/generator");
  };

  return (
    <div className={styles.home}>
        <div className={styles.imageSection}>
        {/* Placeholder for image */}
      </div>
      <div className={styles.textSection}>
        <h1>Create your own QR code</h1>
        <p>
          Generate free, customizable QR codes for links, text, Wi-Fi, events,
          and more — all in one place ✨
        </p>
        <button onClick={handleGenerate} className={styles.button}>
          Generate QR Code
        </button>
      </div>

      
    </div>
  );
}
