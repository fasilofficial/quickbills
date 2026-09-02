import { useEffect } from "react";

const BASE_URL = "https://quickbills.vercel.app";

const SeoMeta = ({
  title,
  description,
  canonicalPath = "",
  keywords,
  schema
}) => {
  useEffect(() => {
    // Title
    const fullTitle = title.includes("QuickBills")
      ? title
      : `${title} | QuickBills`;
    document.title = fullTitle;

    // Helper for meta tags
    const updateMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const [attrName, attrVal] = selector
          .replace("meta[", "")
          .replace("]", "")
          .split("=");
        element.setAttribute(attrName, attrVal.replace(/['"]/g, ""));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    if (description) {
      updateMetaTag('meta[name="description"]', "content", description);
      updateMetaTag('meta[name="title"]', "content", fullTitle);
      updateMetaTag('meta[property="og:title"]', "content", fullTitle);
      updateMetaTag('meta[property="og:description"]', "content", description);
      updateMetaTag('meta[property="twitter:title"]', "content", fullTitle);
      updateMetaTag('meta[property="twitter:description"]', "content", description);
    }

    if (keywords) {
      updateMetaTag('meta[name="keywords"]', "content", keywords);
    }

    const currentUrl = `${BASE_URL}${canonicalPath}`;
    updateMetaTag('meta[property="og:url"]', "content", currentUrl);
    updateMetaTag('meta[property="twitter:url"]', "content", currentUrl);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // Structured data (JSON-LD)
    let schemaScript = document.getElementById("page-structured-data");
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "page-structured-data";
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, canonicalPath, keywords, schema]);

  return null;
};

export default SeoMeta;
