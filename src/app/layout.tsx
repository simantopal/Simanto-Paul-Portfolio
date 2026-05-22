import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import BackgroundEffects from "@/components/BackgroundEffects";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Simanto | Web Developer Portfolio",
  description: "Specializing in high-performance web applications, React, and Node.js. Experience in building scalable, modern web solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} dark scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md selection:bg-accent selection:text-white bg-bg-primary text-text-primary">
        <LenisProvider>
          <CustomCursor />
          <BackgroundEffects />
          <div className="relative z-10">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
