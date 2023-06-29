"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  const { push } = useRouter()
  return (
    <Image
      onClick={() => push("/")}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src="/next.svg"
    />
  )
}

export default Logo
