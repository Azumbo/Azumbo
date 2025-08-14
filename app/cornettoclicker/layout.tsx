import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "tiktok-developers-site-verification":
      "xALZu5Vzk4n3cZx80f6uIEpTEBZIs1MS",
  },
};

export default function CornettoClickerLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}
