
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "FARMS & FIELD",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NextUIProvider>
          <Toaster />
          {/* Wrap children with AuthContextProvider to provide context */}
          
            {children}
          
        </NextUIProvider>
      </body>
    </html>
  );
}