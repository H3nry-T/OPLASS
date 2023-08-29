import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OPLASS",
  description: "OPLASS enterprise app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: "#111",
          colorTextSecondary: "#9CA3AF",
          // fontFamily: ''
        },
      }}
    >
      <html lang="en">
        <body className={`text-gray-200 ${inter.className}`}>
          <header>
            <NavBar />
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
