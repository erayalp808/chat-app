import styles from './styles.module.css'
import ChatItem from './ChatItem';
import { useChat } from '../context/ChatContext'

function ChatList() {
  const {messages} = useChat();

  return (
    <div className={styles.chatlist}>
      <div>
      {
      messages.map((item, index) => (
        <ChatItem key={index} item={item}/>
      ))
      }
      </div>
    </div>
  )
}

export default ChatList