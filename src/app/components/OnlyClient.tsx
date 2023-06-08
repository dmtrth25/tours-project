"use client"

import { FC, ReactNode, useEffect, useState } from "react"

interface OnlyClientProps {
  children: ReactNode
}

const OnlyClient: FC<OnlyClientProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <>{children}</>
}

export default OnlyClient
