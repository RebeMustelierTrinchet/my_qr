import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import styles from "./generador.module.css";

import { FaHeart, FaWifi, FaUser, FaLink, FaStar } from "react-icons/fa";

export default function Generator() {
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({});
  const [qrValue, setQrValue] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = () => {
    if (!selectedType) return alert("Please select a QR type first!");
    let data = "";

    switch (selectedType) {
      case "Text":
        data = formData.text || "";
        break;
      case "Link / URL":
        data = formData.url ? (formData.url.startsWith("http") ? formData.url : `https://${formData.url}`) : "";
        break;
      case "Phone Number":
        data = formData.phone ? `tel:${formData.phone}` : "";
        break;
      case "Email":
        data = formData.email ? `mailto:${formData.email}` : "";
        break;
      case "SMS":
        data = formData.smsNumber
          ? `SMSTO:${formData.smsNumber}:${formData.smsText || ""}`
          : "";
        break;
      case "vCard":
        data = `BEGIN:VCARD\nVERSION:3.0\nFN:${formData.name || ""}\nTEL:${
          formData.vphone || ""
        }\nEMAIL:${formData.vemail || ""}\nEND:VCARD`;
        break;
      case "Wi-Fi":
        data = `WIFI:T:WPA;S:${formData.ssid || ""};P:${
          formData.wifiPassword || ""
        };;`;
        break;
      case "Event":
        data = `BEGIN:VEVENT\nSUMMARY:${formData.event || ""}\nDTSTART:${
          formData.date || ""
        }\nEND:VEVENT`;
        break;
      case "Social Media":
        data = formData.social || "";
        break;
      default:
        data = "";
    }

    if (!data.trim()) return alert("Please fill out the form before generating!");
    setQrValue(data);
  };

  const renderForm = () => {
    switch (selectedType) {
      case "Text":
        return (
          <>
            <label>Enter your text:</label>
            <textarea
              name="text"
              rows="4"
              onChange={handleChange}
              placeholder="Type the text you want in your QR code..."
            />
          </>
        );
      case "Link / URL":
        return (
          <>
            <label>Enter your link:</label>
            <input
              type="url"
              name="url"
              onChange={handleChange}
              placeholder="https://example.com"
            />
          </>
        );
      case "Phone Number":
        return (
          <>
            <label>Enter phone number:</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              placeholder="+1 555 123 4567"
            />
          </>
        );
      case "Email":
        return (
          <>
            <label>Enter email:</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </>
        );
      case "SMS":
        return (
          <>
            <label>Phone number:</label>
            <input
              type="tel"
              name="smsNumber"
              onChange={handleChange}
              placeholder="+1 555 123 4567"
            />
            <label>Message:</label>
            <textarea
              name="smsText"
              rows="3"
              onChange={handleChange}
              placeholder="Type the message to send..."
            />
          </>
        );
      case "vCard":
        return (
          <>
            <label>Full name:</label>
            <input name="name" onChange={handleChange} placeholder="John Doe" />
            <label>Phone:</label>
            <input
              name="vphone"
              onChange={handleChange}
              placeholder="+1 555 000 1111"
            />
            <label>Email:</label>
            <input
              name="vemail"
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </>
        );
      case "Wi-Fi":
        return (
          <>
            <label>Network name (SSID):</label>
            <input name="ssid" onChange={handleChange} placeholder="MyWifi" />
            <label>Password:</label>
            <input
              type="password"
              name="wifiPassword"
              onChange={handleChange}
              placeholder="••••••••"
            />
          </>
        );
      case "Event":
        return (
          <>
            <label>Event name:</label>
            <input
              name="event"
              onChange={handleChange}
              placeholder="Birthday Party"
            />
            <label>Date:</label>
            <input type="date" name="date" onChange={handleChange} />
          </>
        );
      case "Social Media":
        return (
          <>
            <label>Profile or page link:</label>
            <input
              name="social"
              onChange={handleChange}
              placeholder="https://instagram.com/yourprofile"
            />
          </>
        );
      default:
        return <p>Select a type from the right to start.</p>;
    }
  };

  const [qrColor, setQrColor] = useState("#000000");
  const [qrShape, setQrShape] = useState("squares");
  const [qrBorder, setQrBorder] = useState(false);
  const [qrIcon, setQrIcon] = useState("");


  return (
  <div className={styles.generator}>
    {/* LEFT SECTION */}
    <div className={styles.leftSection}>
      <h2>Create your QR Code</h2>

      {/* FORM AREA */}
      <div className={styles.formArea}>{renderForm()}</div>

      {/* GENERATE BUTTON */}
      {selectedType && (
        <button className={styles.generateBtn} onClick={handleGenerate}>
          Generate QR
        </button>
      )}

      {/* STYLE OPTIONS */}
     

      {/* QR PREVIEW */}
      {qrValue && (
        <div
          className={`${styles.qrPreview} ${
            qrBorder ? styles.qrWithBorder : ""
          }`}
        >
          <h4>Preview:</h4>
          <div className={styles.qrWrapper}>
            <QRCodeCanvas
              value={qrValue}
              size={180}
              fgColor={qrColor}
              style={{
                borderRadius: qrShape === "rounded" ? "20%" : "0",
              }}
            />
            {qrIcon && (
              <div className={styles.iconCenter}>
                {qrIcon === "FaHeart" && <FaHeart color={qrColor} size={32} />}
                {qrIcon === "FaWifi" && <FaWifi color={qrColor} size={32} />}
                {qrIcon === "FaUser" && <FaUser color={qrColor} size={32} />}
                {qrIcon === "FaLink" && <FaLink color={qrColor} size={32} />}
                {qrIcon === "FaStar" && <FaStar color={qrColor} size={32} />}
              </div>
            )}
          </div>
        </div>
      )}
    </div>

    {/* RIGHT SECTION */}
    <div className={styles.rightSection}>
      <div className={styles.optionList}>
        <h3>QR Type</h3>
        <ul>
          {[
            "Text",
            "Link / URL",
            "Phone Number",
            "Email",
            "SMS",
            "vCard",
            "Wi-Fi",
            "Event",
            "Social Media",
          ].map((type) => (
            <li
              key={type}
              className={selectedType === type ? styles.active : ""}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>

       {qrValue && (
        <div className={styles.styleOptions}>
          <h4>Customize Style</h4>

          {/* Color Picker */}
          <div className={styles.optionGroup}>
            <label>QR Color:</label>
            <input
              type="color"
              value={qrColor}
              onChange={(e) => setQrColor(e.target.value)}
            />
          </div>

          {/* Shape Selector */}
          <div className={styles.optionGroup}>
            <label>Shape:</label>
            <select
              value={qrShape}
              onChange={(e) => setQrShape(e.target.value)}
            >
              <option value="dots">Dots</option>
              <option value="squares">Squares</option>
              <option value="rounded">Rounded</option>
            </select>
          </div>

          {/* Border Toggle */}
          <div className={styles.optionGroup}>
            <label>
              <input
                type="checkbox"
                checked={qrBorder}
                onChange={() => setQrBorder(!qrBorder)}
              />
              Add Border
            </label>
          </div>

          {/* Icon Selector */}
          <div className={styles.optionGroup}>
            <label>Center Icon:</label>
            <select
              value={qrIcon}
              onChange={(e) => setQrIcon(e.target.value)}
            >
              <option value="">None</option>
              <option value="FaHeart">❤️ Heart</option>
              <option value="FaWifi">📶 Wi-Fi</option>
              <option value="FaUser">👤 User</option>
              <option value="FaLink">🔗 Link</option>
              <option value="FaStar">⭐ Star</option>
            </select>
          </div>
        </div>
      )}
    </div>
  </div>
);

}
