import React, { useState, useRef, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import styles from "./generador.module.css";

import { FaHeart, FaWifi, FaUser, FaLink, FaStar } from "react-icons/fa";

export default function Generator() {
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({});
  const [qrValue, setQrValue] = useState("");
  const [qrColor, setQrColor] = useState("#000000");
  const [qrShape, setQrShape] = useState("square"); // "dots", "square", "rounded"
  const [qrBorder, setQrBorder] = useState(false);
  const [qrIcon, setQrIcon] = useState("");

  const qrRef = useRef(null);

  // Crear QR una sola vez
  const qrCode = useRef(
    new QRCodeStyling({
      width: 180,
      height: 180,
      data: "",
      dotsOptions: { type: qrShape, color: qrColor },
      backgroundOptions: { color: "#ffffff" },
    })
  ).current;

//   qrCode.update({
//   data: qrValue,
//   width: 200, // más grande para dejar espacio al borde
//   height: 200,
//   dotsOptions: { type: qrShape, color: qrColor },
//   backgroundOptions: { color: qrBorder ? qrColor : "#ffffff" },
//   margin: qrBorder ? 10 : 0, // espacio alrededor del QR
// });


  // Actualizar QR cuando cambie el valor, color o forma
  useEffect(() => {
    qrCode.update({
      data: qrValue,
      dotsOptions: { type: qrShape, color: qrColor },
    });

    if (qrRef.current) {
      qrRef.current.innerHTML = "";
      qrCode.append(qrRef.current);
    }
  }, [qrValue, qrColor, qrShape]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    if (!selectedType) return alert("Please select a QR type first!");
    let data = "";

    switch (selectedType) {
      case "Text":
        data = formData.text || "";
        break;
      case "Link / URL":
        data = formData.url
          ? formData.url.startsWith("http")
            ? formData.url
            : `https://${formData.url}`
          : "";
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

  return (
    <div className={styles.generator}>
      {/* LEFT SECTION */}
      <div className={styles.leftSection}>
        <h2>Create your QR Code</h2>

        <div className={styles.formArea}>{renderForm()}</div>

        {selectedType && (
          <button className={styles.generateBtn} onClick={handleGenerate}>
            Generate QR
          </button>
        )}

        {/* QR PREVIEW */}
        {qrValue && (
          <div
            className={`${styles.qrPreview}  : ""}`}
          >
            {/* <h4>Preview:</h4> */}
            <div className={`${styles.qrWrapper} ${qrBorder ? styles.qrWithBorder : ""}`} style={{ color: qrColor }} ref={qrRef}></div>
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

            <div className={styles.optionGroup}>
              <label>QR Color:</label>
              <input
                type="color"
                value={qrColor}
                onChange={(e) => setQrColor(e.target.value)}
              />
            </div>

            <div className={styles.optionGroup}>
              <label>Shape:</label>
              <select
                value={qrShape}
                onChange={(e) => setQrShape(e.target.value)}
              >
                <option value="dots">Dots</option>
                <option value="square">Squares</option>
                <option value="rounded">Rounded</option>
              </select>
            </div>

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

            {/* <div className={styles.optionGroup}>
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
            </div> */}

            
          </div>
        )}
      </div>
    </div>
  );
}
