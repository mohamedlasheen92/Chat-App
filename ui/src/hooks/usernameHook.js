import { useEffect, useState } from "react"

const useUsernameHook = () => {
  const [userName, setUserName] = useState('')

  useEffect(() => {

    if (localStorage.getItem('username')) {
      setUserName(localStorage.getItem('username'));
    } else {
      const sender = prompt('Please enter your name', "Muhammed Alaa Lasheen")
      setUserName(sender)
      localStorage.setItem('username', sender)
    }


  }, [])

  return userName
}

export default useUsernameHook