import { useEffect, useState } from "react"

import useUsernameHook from './hooks/usernameHook'
import useChatIdHook from './hooks/chatIdHook'
import useSocketHook from './hooks/socketHook'

import NewChatButton from './components/NewChatBtn'
import Messages from './components/Messages'
import SendMessage from './components/SendMessage'

function App() {
  // States
  const [messages, setMessages] = useState([])
  const userName = useUsernameHook()

  const chatId = useChatIdHook()
  console.log(chatId);


  const socket = useSocketHook({ chatId })

  useEffect(() => {

    if (socket !== null) {
      socket.on('message', message => {
        setMessages([...messages, message])
      })
    }

  }, [socket, messages, setMessages])





  return (
    <>

      <div className="grid grid-cols-1 gap-4 m-4 bg-gray-100 rounded-lg shadow-lg p-4">

        <NewChatButton />

        <div className="h-[70vh] overflow-y-auto border border-gray-300 rounded-lg p-4 bg-white">

          <Messages messages={messages} />


        </div>

        <div className="p-4 flex justify-between items-center gap-2">

          <SendMessage messages={messages} setMessages={setMessages} userName={userName} socket={socket} chatId={chatId} />


        </div>

      </div>



    </>
  )
}

export default App
