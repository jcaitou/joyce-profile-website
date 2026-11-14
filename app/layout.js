import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../data/site";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
