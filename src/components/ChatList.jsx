import styles from './styles.module.css'
import ChatItem from './ChatItem';
import { useChat } from '../context/ChatContext'
import ScrollableFeed from 'react-scrollable-feed'

function ChatList() {
  const {messages} = useChat();

  return (
    <div className={styles.chatlist}>
        <ScrollableFeed className={styles.messages} forceScroll={true}>
          {
          messages.map((item, index) => (
            <ChatItem key={index} item={item}/>
          ))
          }
        </ScrollableFeed>
    </div>
  )
}

export default ChatList