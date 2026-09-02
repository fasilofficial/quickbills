import React, { useEffect, useRef } from "react";

const AdBanner = ({
  slot = "1234567890",
  format = "auto",
  responsive = "true",
  className = ""
}) => {
  const adRef = useRef(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // Only attempt push once per mount in client browser environment
    if (!pushedRef.current && window.adsbygoogle && adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      } catch (err) {
        console.debug("AdSense push:", err.message);
      }
    }
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className={`qb-ad-wrapper my-4 text-center ${className}`}
    >
      <div className="qb-ad-slot d-inline-block w-100" style={{ maxWidth: "728px" }}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client="ca-pub-6821531199235214"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      </div>
    </aside>
  );
};

export default AdBanner;
