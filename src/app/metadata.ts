import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer | Professional Web Development Services",
  description:
    "John Doe is a professional full-stack developer specializing in React, Node.js, and cloud solutions. Offering affordable and scalable web solutions.",
  keywords:
    "full stack developer, web developer, professional developer, freelancer developer, affordable developer, senior developer, web development services",
  openGraph: {
    type: "website",
    url: "https://www.johndoe.com",
    title: "John Doe - Full Stack Developer",
    description:
      "Expert in React, Node.js, and modern web technologies. Offering professional web development services.",
    images: [{ url: "https://www.johndoe.com/profile.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer",
    description:
      "Professional web developer offering affordable and scalable web development solutions.",
    images: ["https://www.johndoe.com/profile.jpg"],
  },
};
