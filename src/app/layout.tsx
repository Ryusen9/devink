import type { Metadata } from "next";
import { Karla, Macondo } from "next/font/google";
import "./globals.css";
import {
  Box,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { Footer, Navbar } from "@/Layouts";
import { SmoothScroll } from "@/Components";

const karla = Karla({
  variable: "--font-karla",
  weight: ["400", "700"],
  subsets: ["latin"],
});
const macondo = Macondo({
  variable: "--font-macondo",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEVINK",
  description: "A modern blogging platform for developers.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>

      <body className={`${karla.variable} ${macondo.variable} antialiased`}>
        <MantineProvider>
          <Box>
            <SmoothScroll />
            <Navbar />
            {children}
            <Footer />
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
