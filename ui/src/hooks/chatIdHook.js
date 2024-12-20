import { useState } from "react";

const useChatIdHook = () => {
  const query = new URLSearchParams(window.location.search);
  const [chatId, setChatId] = useState(query.get('chatId'))


  return chatId
}

export default useChatIdHook;