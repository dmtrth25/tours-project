"use client"

import Image from "next/image"

const ImgLogo = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Image logo"
      src="/img/image-logo.jpeg"
    />
  )
}

export default ImgLogo
