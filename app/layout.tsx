import { Nunito } from "next/font/google"

import OnlyClient from "./components/OnlyClient"
import RegisterModal from "./components/modals/RegisterModal"
import NavBar from "./components/navbar/NavBar"

import ToasterProvider from "./providers/ToasterProvider"
import getCurrentUser from "./actions/getCurrentUser"

import LoginModal from "./components/modals/LoginModal"
import RentModal from "./components/modals/RentModal"
import "./globals.css"

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
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser={currentUser} />
        </OnlyClient>
        {children}
      </body>
    </html>
  )
}
