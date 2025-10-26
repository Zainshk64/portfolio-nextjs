import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { portfolioConfig } from "@/config/portfolio.config";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),

  title: {
    default: `${portfolioConfig.name} | MERN Stack Developer Portfolio`,
    template: `%s - ${portfolioConfig.name} | MERN Stack Developer`,
  },

  description:
    "Explore the portfolio of Zain Ejaz — a passionate MERN Stack Developer skilled in React.js, Next.js, Node.js, Express, MongoDB, and Tailwind CSS. Building responsive, scalable, and modern full-stack web applications.",

  keywords: [
    "Zain Ejaz",
    "Zain Sheikh",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Tailwind CSS Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Modern Web Developer",
    "Portfolio",
    "Web Design",
    "Software Engineer",
    "Freelance Developer",
    "Frontend Engineer",
    "Rawalpindi Developer",
    "Pakistan Developer",
  ],

  authors: [{ name: "Zain Ejaz", url: "https://github.com/Zainshk64" }],
  creator: "Zain Ejaz",
  publisher: "Zain Ejaz",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioConfig.seo.url,
    title: `${portfolioConfig.name} | MERN Stack Developer`,
    description:
      "Official portfolio of Zain Ejaz — showcasing React, Next.js, and MERN Stack development projects.",
    images: [
      {
        url: `${portfolioConfig.seo.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Zain Ejaz Portfolio",
      },
    ],
    siteName: portfolioConfig.name,
  },

  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.name} | MERN Stack Developer`,
    description:
      "Portfolio of Zain Ejaz — React.js, Next.js, Node.js, Express, MongoDB, Tailwind CSS.",
    images: [`${portfolioConfig.seo.url}/og-image.png`],
    creator: "@ZainEjaz", // optional handle
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: portfolioConfig.seo.url,
  },

  category: "Technology",
  icons: { icon: "/my icon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <Toaster position="bottom-right"
        toastOptions={{
          className:
            "backdrop-blur-xl bg-white/10 text-white border border-white/20 shadow-md rounded-xl px-4 py-2",
          style: {
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "14px 20px",
            marginLeft: "10px",
            marginBottom: "10px",
            color: "#fff",
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.08)",
            // fontSize: "18px",
            borderRadius: "0.75rem",
          }
         ,
        }}

        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main
            className={cn(
              "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 transition-colors duration-300",
              "bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#919191,transparent_1px)] dark:[background-size:16px_16px]"
            )}
          >
            {/* NAVBAR */}
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
