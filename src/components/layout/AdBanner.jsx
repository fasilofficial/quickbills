import React, { useEffect, useRef } from "react";

const AdBanner = ({ slot = "1234567890", format = "auto", responsive = "true", className = "" }) => {
  const adRef = useRef(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // Only attempt push once per mount and if in browser environment
    if (!pushedRef.current && window.adsbygoogle && adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      } catch (err) {
        // Suppress benign adsbygoogle already filled errors
        console.debug("AdSense push:", err.message);
      }
    }
  }, []);

  return (
    <div className={`qb-ad-container my-4 text-center ${className}`}>
      <span className="qb-ad-label d-block text-uppercase text-muted mb-2">Advertisement</span>
      <div className="qb-ad-inner bg-light border rounded p-2 mx-auto" style={{ minHeight: "100px", maxWidth: "728px" }}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6821531199235214"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      </div>
    </div>
  );
};

export default AdBanner;
