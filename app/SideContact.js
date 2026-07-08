"use client";

import { useEffect, useState } from "react";

const contactPhone = "+381600000000";
const contactPhonePlain = contactPhone.replace(/\D/g, "");

export default function SideContact({ logoSrc }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 24);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <details className={`side-contact${isVisible ? " is-visible" : ""}`}>
      <summary aria-label="Otvorite kontakt opcije">
        <img src={logoSrc} alt="" />
        <span>Pozovite nas</span>
      </summary>
      <div className="side-contact__panel">
        <a href={`tel:${contactPhone}`}>Telefon</a>
        <a href={`viber://chat?number=%2B${contactPhonePlain}`}>Viber</a>
        <a href={`https://wa.me/${contactPhonePlain}`}>WhatsApp</a>
      </div>
    </details>
  );
}
