import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-bebas" 
});

export const metadata: Metadata = {
  title: 'Life Lab | Centro de Entrenamiento & Salud',
  description: 'Gym, Kinesiología, Nutrición. Entrenamiento personalizado y asesorías expertas. Tratamiento de ECNT en Curicó, Chile.',
  keywords: ['gimnasio', 'kinesiología', 'nutrición', 'entrenamiento', 'Curicó', 'Chile', 'Life Lab'],
  authors: [{ name: 'Life Lab' }],
  openGraph: {
    title: 'Life Lab | Centro de Entrenamiento & Salud',
    description: 'Gym, Kinesiología, Nutrición. Entrenamiento personalizado y asesorías expertas.',
    type: 'website',
    locale: 'es_CL',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#8b5cf6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
