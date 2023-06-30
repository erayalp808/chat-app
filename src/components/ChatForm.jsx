import {useState} from 'react'
import styles from './styles.module.css'
import { sendMessage } from '../socketApi';
import { useChat } from '../context/ChatContext';

function ChatForm() {
  const [message, setMessage] = useState("");

  const {messages, setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message || /^\s*$/.test(message)) {
      setMessage('');
      return;
    }

    setMessages([...messages, {message, fromMe: true}])
    sendMessage(message);
    setMessage("")
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input 
        className={styles.textInput}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='message...'
        />
      </form>
    </div>
  )
}

export default ChatForm