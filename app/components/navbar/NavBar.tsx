"use client"

import { User } from "@prisma/client"

import Container from "../Container"
import Logo from "./Logo"
import Menu from "./Menu"
import Search from "./Search"
import { FC } from "react"

interface NavBarProps {
  currentUser?: User | null
}

const NavBar: FC<NavBarProps> = ({ currentUser }) => {
  console.log({ currentUser })
  return (
    <div className="fixed w-full bg-white z-10 shadow-md">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <Menu />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default NavBar
