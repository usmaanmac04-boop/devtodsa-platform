import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "DevToDsa - Master DSA",
  description: "Practice Data Structures & Algorithms - Free coding platform",
};

import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-gray-900 text-white py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-gray-400">
                © 2025 DevToDsa. Made with ❤️ for learners worldwide.
              </p>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}