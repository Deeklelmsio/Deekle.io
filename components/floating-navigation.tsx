"use client"

import { useState, useEffect } from "react"
import { NavigationPortal } from "@/components/navigation-portal"

export function FloatingNavigation() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating navigation after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="bg-white rounded-full shadow-lg p-3">
        <NavigationPortal />
      </div>
    </div>
  )
}
