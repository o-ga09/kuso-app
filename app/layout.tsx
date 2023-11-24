import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./common/provider";

const inter = Inter({ subsets: ["latin"] });
const siteName = "モンハン登場回数ランキング";
const description = "モンハンのモンスターで登場回数を表すランキングです！";
const url = "https://t09-blog.com/";

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    creator: "@o_ga09",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_VERIFICATION,
  },
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
