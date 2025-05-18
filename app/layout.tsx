
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";
import { Toaster } from "@/components/ui/toaster";
import { OtpProvider } from "@/contexts/OtpContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OTP Generator Dashboard",
  description: "Generate and manage OTPs efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OtpProvider>
          <main>{children}</main>
        </OtpProvider>
        <Toaster />
      </body>
    </html>
  );
}
