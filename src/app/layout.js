import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/theme.css"

const inter = Inter({
  subsets: ["latin"], // required// optional: creates a CSS variable
  display: "swap", // avoids layout shifts
});

export const metadata = {
  title: "Web & App Development Company in US",
  description: "Web & App Development Company in US",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
