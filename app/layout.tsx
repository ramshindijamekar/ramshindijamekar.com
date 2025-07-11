import type { ReactNode } from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Space_Mono as SpaceMono, Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const spaceMono = SpaceMono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "Ram | AI Engineer",
  description: "AI Engineer specializing in Generative AI and Agentic Systems",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          spaceMono.variable,
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}






// import type React from "react"
// import "@/app/globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { Space_Mono as SpaceMono, Inter } from "next/font/google"
// import { cn } from "@/lib/utils"

// const spaceMono = SpaceMono({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-space-mono",
//   display: "swap",
// })

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// })

// export const metadata = {
//   title: "Ram | AI Engineer",
//   description: "AI Engineer specializing in Generative AI and Agentic Systems",
//     // generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning className="dark">
//       <head>
//         <link rel="icon" href="/public/favicon.ico" />
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               try {
//                 if (localStorage.getItem('portfolio-theme') === 'light' || (!localStorage.getItem('portfolio-theme') && window.matchMedia('(prefers-color-scheme: light)').matches)) {
//                   document.documentElement.classList.remove('dark')
//                 } else {
//                   document.documentElement.classList.add('dark')
//                 }
//               } catch (_) {}
//             `,
//           }}
//         />
//       </head>
//       <body className={cn("min-h-screen bg-background font-sans antialiased", spaceMono.variable, inter.variable)}>
//         <ThemeProvider>
//           <div className="relative flex min-h-screen flex-col">
//             <Navbar />
//             <div className="flex-1">{children}</div>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

