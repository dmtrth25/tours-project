"use client"

import { FC } from "react"
import { IContainerProps } from "../types"

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2500px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  )
}

export default Container
