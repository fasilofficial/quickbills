import { templatesData } from "../data/templatesData";
import { guidesData } from "../data/guidesData";

const BASE_URL = "https://quickbills.vercel.app";

export default function sitemap() {
  const currentDate = new Date().toISOString();

  // Static routes
  const staticRoutes = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/invoice`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/templates`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Dynamic templates routes
  const templateRoutes = templatesData.map((template) => ({
    url: `${BASE_URL}/templates/${template.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic guides routes
  const guideRoutes = guidesData.map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...templateRoutes, ...guideRoutes];
}
