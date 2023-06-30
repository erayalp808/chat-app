import {useState} from 'react'
import styles from './styles.module.css'

function ChatForm() {
  const [message, setMessages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessages("")
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input 
        className={styles.textInput}
        value={message}
        onChange={(e) => setMessages(e.target.value)}
        />
      </form>
    </div>
  )
}

export default ChatForm