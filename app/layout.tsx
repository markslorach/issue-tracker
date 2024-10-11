import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Container from "./components/shared/Container";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/shared/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Full-stack issue tracking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.className} antialiased`}>
          <Header />
          <Container className="pt-12">{children}</Container>
          <Toaster position="top-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}
