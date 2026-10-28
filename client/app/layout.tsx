import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const roboto = Montserrat_Alternates({
  weight: "500",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Mirjanic Studio",
  icons: {
    apple: "icons1.jpg",
    icon: "icons1.jpg",
  },
  description:
    "Treba ti dobar video editor. Mirjanic Studio ti nudi tacno ono sto ti treba, kreirano onako kako ste zamisljali.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.className} h-full antialiased bg-neutral-900 text-neutral-200 select-none`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
