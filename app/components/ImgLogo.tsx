"use client"

import { FC } from "react"
import Image from "next/image"

interface LogoProps {
  src: string | null | undefined
}

const ImgLogo: FC<LogoProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Image logo"
      src={src || "/img/image-logo.jpeg"}
    />
  )
}

export default ImgLogo
