import "~/styles/globals.css";
import { Titillium_Web } from "next/font/google";

const f1Font = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-neutral-900 text-[#f1f1f1]">
      <body>{children}</body>
    </html>
  );
}
