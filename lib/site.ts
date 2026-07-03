export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://printlayouttoolkit.com";

// Replace this address before publishing if you want visitor email to go elsewhere.
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "kharhystudio@gmail.com";

export const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const adsensePublisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
export const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
