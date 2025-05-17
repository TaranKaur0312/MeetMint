import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import CreateEventDrawer from "@/components/create-event";
import ClerkWrapper from "@/components/ClerkWrapper"; // 👈 import your wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "meetWay",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkWrapper>
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-purple-300 to-white">
            {children}
          </main>
          <footer className="bg-white py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by Taran</p>
            </div>
          </footer>
          <CreateEventDrawer />
        </ClerkWrapper>
      </body>
    </html>
  );
}
