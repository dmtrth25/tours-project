"use client"

import { FC } from "react"

interface IMenuItem {
  label: string
  onClick: () => void
}

const MenuItem: FC<IMenuItem> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  )
}

export default MenuItem
