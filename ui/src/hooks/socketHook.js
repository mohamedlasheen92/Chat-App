import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const useSocketHook = ({ chatId }) => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {

    setSocket(io('/', { query: { chatId } }))

  }, [])

  return socket

}

export default useSocketHook