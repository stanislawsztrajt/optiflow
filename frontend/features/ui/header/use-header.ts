import { useState } from "react"

const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return {
    isMenuOpen,
    setIsMenuOpen
  }
}

export default useHeader
  