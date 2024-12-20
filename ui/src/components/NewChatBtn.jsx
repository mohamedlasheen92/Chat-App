import { v4 as uuidv4 } from 'uuid';

const NewChatButton = () => {

  const genrateNewChatId = () => {
    const newChatId = uuidv4();
    window.location.href = `/?chatId=${newChatId}`;
  }

  return (
    <>
      <button onClick={() => genrateNewChatId()} className="absolute right-6 top-6 md:text-xl italic w-fit bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
        New Chat
      </button>
    </>
  )
}

export default NewChatButton