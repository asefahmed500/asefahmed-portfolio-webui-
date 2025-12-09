import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { WelcomeModal } from "@/components/welcome-modal"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Asef Ahmed - Full Stack Developer",
  description: "Portfolio showcasing full-stack development projects and skills",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${geistSans.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <WelcomeModal />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}