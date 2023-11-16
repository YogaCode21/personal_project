import { Inter } from "next/font/google";
import FormDataProvider from "./context/FormDataContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pomolife",
  description: "Pomodoro Technique for productivity",
};

export default function RootLayout({ children }) {
  return (
    <FormDataProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </FormDataProvider>
  );
}
