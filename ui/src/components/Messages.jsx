/* eslint-disable react/prop-types */

const Messages = ({ messages }) => {

  return (

    <>


      {messages.map((message, idx) => {

        return (
          <div key={idx} className="mb-4">
            <div className="text-[10px] text-gray-600"><span className="text-sm font-semibold italic">{message.sender}</span> - {new Date(message.timestamp).toLocaleTimeString()}</div>
            <div className="text-base text-green-800 bg-green-300 px-2 rounded-md w-fit">{message.text}</div>
          </div>
        );

      })}


    </>


  )

}

export default Messages;