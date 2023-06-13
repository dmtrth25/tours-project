"use client"

import { FC } from "react"

interface IHeading {
  center?: boolean
  title: string
  subtitle?: string
}

const Heading: FC<IHeading> = ({ center, title, subtitle }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  )
}

export default Heading
