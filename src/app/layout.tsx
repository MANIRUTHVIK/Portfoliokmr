import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://maniruthvik.vercel.app";
const profileImage =
  `${siteUrl}/katkuri-maniruthvik.jpg`;
const description =
  "Katkuri Maniruthvik is a Software Development Engineer specializing in production Voice AI pipelines, low-latency streaming architectures (<300ms), multi-tenant healthcare platforms, and scalable full-stack web applications.";

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
  title: "Katkuri Maniruthvik | Software Development Engineer · Voice AI & Full Stack",
  description,
  keywords: [
    "Katkuri Maniruthvik",
    "katkurimaniruthvik",
    "Maniruthvik",
    "maniruthvik",
    "Ruthvik",
    "ruthvik",
    "Software Development Engineer",
    "SDE",
    "Voice AI",
    "Agentic AI",
    "Healthcare AI",
    "full stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "MongoDB",
    "Vapi",
    "Bolna",
    "Retell",
    "HL7",
    "FHIR",
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
