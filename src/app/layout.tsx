import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ronakkumar.dev"),
  title: "Ronak Kumar | Software Engineer & Competitive Programmer",
  description:
    "Portfolio of Ronak Kumar — IIT Roorkee B.Tech student specializing in Software Engineering, Competitive Programming, Machine Learning, and Quantitative Finance. Building scalable applications and solving complex algorithmic problems.",
  keywords: [
    "Ronak Kumar",
    "IIT Roorkee",
    "Software Engineer",
    "Competitive Programming",
    "Machine Learning",
    "Quantitative Finance",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Ronak Kumar", url: "https://github.com/ronak-kumar06" }],
  creator: "Ronak Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ronak Kumar | Software Engineer & Competitive Programmer",
    description:
      "IIT Roorkee B.Tech student building scalable applications, solving complex algorithms, and exploring ML & Quant Finance.",
    siteName: "Ronak Kumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ronak Kumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronak Kumar | Software Engineer & Competitive Programmer",
    description:
      "IIT Roorkee B.Tech student building scalable applications, solving complex algorithms, and exploring ML & Quant Finance.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ronak Kumar",
              url: "https://ronakkumar.dev",
              jobTitle: "Software Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Indian Institute of Technology Roorkee",
              },
              knowsAbout: [
                "Software Engineering",
                "Competitive Programming",
                "Machine Learning",
                "Quantitative Finance",
              ],
              sameAs: [
                "https://github.com/ronak-kumar06",
                "https://linkedin.com/in/ronak-kumar06",
                "https://leetcode.com/ronak-kumar06",
                "https://codeforces.com/profile/ronak-kumar06",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
