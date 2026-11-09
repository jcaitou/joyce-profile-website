import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Ryan Lo",
    template: "%s",
  },
  description:
    "Ryan Lo is an urban planner, designer, and community engagement strategist, and Co-Executive Director of Urban Minds.",
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
