import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";

const tajawal = localFont({
  src: "./fonts/Tajawal-Bold.woff",
  variable: "--font-tajawal",
  weight: "200 300 400 500 600 700 800 900",
});
const amiri = localFont({
  src: "./fonts/Amiri-Bold.woff",
  variable: "--font-amiri",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Nemo App",
  description: "Nemo is An E-commerce app that helping you buy decoration fish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ar" dir="rtl" suppressHydrationWarning>
        <body className={`${tajawal.variable} ${amiri.variable} antialiased`}>
          <Providers>
            <Navbar />
            <Container className="py-20">{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
