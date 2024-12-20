/* eslint-disable react/prop-types */
const SendMessage = ({ messages, userName, setMessages, socket, chatId }) => {

  const sendMessage = () => {

    const msgTxt = document.getElementById('message-input').value

    if (msgTxt && msgTxt.length > 0) {
      document.getElementById('message-input').value = ''

      const message = {
        id: messages.length + 1,
        text: msgTxt,
        timestamp: new Date(),
        sender: userName,
        chatId
      }
      console.log(message);

      socket.emit('message', message)

      setMessages([...messages, message])
    }
  }

  return (
    <>
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

    </>

  )

}

export default SendMessage