"use client"

import { FC, useCallback, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import ImgLogo from "../ImgLogo"
import MenuItem from "./MenuItem"

import useRegisterModal from "../../hooks/useRegisterModal"
import useLoginModal from "@/app/hooks/useLoginModal"
import { signOut } from "next-auth/react"
import { SafeUser } from "@/app/types"

interface MenuProps {
  currentUser?: SafeUser | null
}

const Menu: FC<MenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isShow, setIsShow] = useState(false)

  const toggleShow = useCallback(() => {
    setIsShow((prevState) => !prevState)
  }, [])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Your Home
        </div>
        <div
          onClick={toggleShow}
          className="p-4 md:py-1 md:px-2 border-[1px] bg-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <ImgLogo src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isShow && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My trips" />
                <MenuItem onClick={() => {}} label="My favorites" />
                <MenuItem onClick={() => {}} label="My reservations" />
                <MenuItem onClick={() => {}} label="My home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
