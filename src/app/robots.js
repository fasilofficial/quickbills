export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://quickbills.vercel.app/sitemap.xml",
  };
}
