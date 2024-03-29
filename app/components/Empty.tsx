"use client"

import { useRouter } from "next/navigation"
import { FC } from "react"
import Heading from "./Heading"
import Button from "./Button"

interface EmptyProps {
  title?: string
  subtitle?: string
  showReset?: boolean
}

const Empty: FC<EmptyProps> = ({
  title = "No exact mathes",
  subtitle = "Try changing or removing some filters",
  showReset,
}) => {
  const router = useRouter()
  return (
    <div
      className="
        h-[60vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
      "
    >
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  )
}

export default Empty
