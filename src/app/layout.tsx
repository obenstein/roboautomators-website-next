import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import Aoscompo from "@/utils/aos";

export const metadata: Metadata = {
  title: "Roboautomators - Empowering Future Builders",
  description: "Hands-on robotics, AI, and coding education for students through engaging projects and real-world applications.",
  icons: {
    icon: "/images/logo/logo2.png",
  },
};
const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <FloatingWhatsApp />
          <ScrollToTop />
      </body>
    </html>
  );
}
