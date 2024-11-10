import localFont from "next/font/local";
import "./globals.css";
import BootstrapClient from "./components/BootsrapClient";
import "bootstrap/dist/css/bootstrap.css";


export const metadata = {
  title: "Watch api ",
  description: "by shashi awari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient/>
      </body>
    </html>
  );
}
