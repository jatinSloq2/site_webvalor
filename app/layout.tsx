import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Webvalor - Premium Web Development Agency",
  description: "We build confident websites. Crafting premium digital experiences that convert visitors into customers for ambitious brands.",
  keywords: "web development, web design, premium websites, digital agency, Next.js, React",
  authors: [{ name: "Webvalor" }],
  creator: "Webvalor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webvalor.com",
    title: "Webvalor - Premium Web Development Agency",
    description: "We build confident websites. Crafting premium digital experiences that convert visitors into customers.",
    siteName: "Webvalor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webvalor - Premium Web Development Agency",
    description: "We build confident websites. Crafting premium digital experiences that convert visitors into customers.",
    creator: "@webvalor",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}