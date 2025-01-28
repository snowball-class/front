import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Boram3",
  description: "This is Boram3 Content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
