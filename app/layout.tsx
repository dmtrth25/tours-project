import OnlyClient from "./components/OnlyClient"
import RegisterModal from "./components/modals/RegisterModal"
import NavBar from "./components/navbar/NavBar"
import "./globals.css"
import { Nunito } from "next/font/google"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"

export const metadata = {
  title: "Tours",
  description: "Tours description",
}

const nunitoFont = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={nunitoFont.className}>
        <OnlyClient>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser={currentUser} />
        </OnlyClient>
        {children}
      </body>
    </html>
  )
}
