import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hades - Expense Tracker",
  description: "Created By: Logan Roche",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <Toaster
        className="bg-white"
        />
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
