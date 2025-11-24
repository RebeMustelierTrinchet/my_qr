import React, { useState } from "react";
import styles from "./secc2.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is generating QR codes free?",
      answer:
        "Yes! Our QR generator is completely free to use. You can create and download unlimited QR codes without signing up.",
    },
    {
      question: "Do QR codes expire?",
      answer:
        "No. Once you download your QR code, it never expires. It works forever as long as the link or data you encoded remains valid.",
    },
    {
      question: "Can I download the QR in high quality?",
      answer:
        "Yes! You can download your QR code in high‑resolution PNG, with options for white background or transparent background.",
    },
    {
      question: "Can I customize the colors and style?",
      answer:
        "Absolutely. You can change colors, shapes, borders, and even add icons to match your brand or aesthetic.",
    },
    {
      question: "Do I need an account?",
      answer:
        "No account needed. Everything works instantly and privately in your browser.",
    },
  ];

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className={styles.faqWrapper}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>

      <div className={styles.faqList}>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.faqItem} onClick={() => toggleFAQ(i)}>
            <div className={styles.question} >
              {faq.question}
              <span className={styles.icon}>{openIndex === i ? "−" : "+"}</span>
            </div>

            {openIndex === i && <p className={styles.answer}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
