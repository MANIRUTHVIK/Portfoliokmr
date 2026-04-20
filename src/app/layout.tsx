import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://maniruthvik.vercel.app";
const profileImage =
  `${siteUrl}/katkuri-maniruthvik.jpg`;
const description =
  "Katkuri Maniruthvik is a software engineer and full-stack developer building scalable web applications, efficient systems, healthcare automation tools, and AI-powered products.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Katkuri Maniruthvik | Portfolio",
  description,
  keywords: [
    "Katkuri Maniruthvik",
    "katkurimaniruthvik",
    "Maniruthvik",
    "maniruthvik",
    "Ruthvik",
    "ruthvik",
    "software engineer",
    "full stack developer",
    "web developer",
    "portfolio",
    "JavaScript",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Katkuri Maniruthvik" }],
  creator: "Katkuri Maniruthvik",
  publisher: "Katkuri Maniruthvik",
  icons: {
    icon: [
      {
        url: "/portfoliofacion.webp",
        type: "image/webp",
      },
    ],
    shortcut: [{ url: "/portfoliofacion.webp", type: "image/webp" }],
    apple: [{ url: "/portfoliofacion.webp", type: "image/webp" }],
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Katkuri Maniruthvik | Portfolio",
    description,
    url: siteUrl,
    siteName: "Katkuri Maniruthvik Portfolio",
    type: "website",
    images: [
      {
        url: profileImage,
        alt: "Katkuri Maniruthvik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katkuri Maniruthvik | Portfolio",
    description,
    images: [profileImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Katkuri Maniruthvik",
  url: siteUrl,
  image: profileImage,
  jobTitle: "Software Engineer",
  sameAs: [
    "https://www.linkedin.com/in/katkuri-mani-ruthvik-245834319",
    "https://github.com/MANIRUTHVIK",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
