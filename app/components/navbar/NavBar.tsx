"use client"

import { FC } from "react"

import Container from "../Container"
import Logo from "./Logo"
import Menu from "./Menu"
import Search from "./Search"
import { SafeUser } from "@/app/types"

interface NavBarProps {
  currentUser?: SafeUser | null
}

const NavBar: FC<NavBarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-md">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <Menu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default NavBar
