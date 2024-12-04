import { useEffect, useState } from "react"


function App() {
  // States
  const [messages, setMessages] = useState([

  ])
  const [userName, setUserName] = useState('')

  const sendMessage = () => {
    const msgTxt = document.getElementById('message-input').value

    if (msgTxt && msgTxt.length > 0) {
      document.getElementById('message-input').value = ''

      const message = {
        id: messages.length + 1,
        text: msgTxt,
        timestamp: new Date(),
        sender: userName
      }
      setMessages([...messages, message])
    }
  }

  useEffect(() => {
    const sender = prompt('Please enter your name', "USER")

    setUserName(sender)
  }, [])


  return (
    <>

      <div className="grid grid-cols-1 gap-4 m-4 bg-gray-100 rounded-lg shadow-lg p-4">
        <div className="h-[70vh] overflow-y-auto border border-gray-300 rounded-lg p-4 bg-white">
          {messages.map(message => {
            return (
              <div key={message.id} className="mb-4">
                <div className="text-[10px] text-gray-600"><span className="text-sm font-semibold italic">{message.sender}</span> - {message.timestamp.toLocaleTimeString()}</div>
                <div className="text-base text-green-800 bg-green-300 px-2 rounded-md w-fit">{message.text}</div>
              </div>
            );
          })}
        </div>

        <div className="p-4 flex justify-between items-center gap-2">
          <input
            type="text"
            id="message-input"
            placeholder="Type your message..."
            className="border border-green-500 rounded-lg p-3 w-full outline-none focus:border-green-700 transition duration-200 ease-in-out"
          />
          <button
            type="submit"
            className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition duration-200 ease-in-out"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>



    </>
  )
}

export default App
