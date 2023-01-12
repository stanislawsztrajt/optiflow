import { useState } from "react"

const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return {
    isMenuOpen,
    setIsMenuOpen
  }
}

export default useHeader