import './globals.css'
import { Titillium_Web, IBM_Plex_Sans, Inter } from 'next/font/google'

const titilliumWeb = Titillium_Web({ subsets: ['latin'], weight: ['700'] });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700']});

titilliumWeb.style;
ibmPlexSans.style;

export const metadata = {
  title: 'Formulario Multi Steps',
  description: "Formulário Multistepes feito React, Next e CSS"}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-titillium'>{children}
      
      </body>
    </html>
  )
}
