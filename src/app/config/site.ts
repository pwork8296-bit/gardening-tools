export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Ricca",
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "Ricca - Online Plant Nursery in Delhi NCR | Fresh Plants Delivery",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[EMAIL_ADDRESS]",
  phone1: process.env.NEXT_PUBLIC_CONTACT_PHONE_1 || "+91 77084 90676",
  phone2: process.env.NEXT_PUBLIC_CONTACT_PHONE_2 || "+91 93614 85680",
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Tiruchirappalli, Tamil Nadu, India",
  currency: "₹",
  logo: {
    src: "/assets/logo.jpeg",
    alt: "Ricca Logo",
    width: 80,
    height: 80,
  },
  favicon: "/assets/logo.jpeg",
};
