import {useEffect} from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import styles from '../components/styles.module.css'
import { init, subscribeChat } from '../socketApi'
import {useChat} from '../context/ChatContext'

function Container() {
  const { messages, setMessages } = useChat();

  useEffect(() => {
    init()

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, {message}])
    })
  }, [])

  return (
    <div className={styles.container}>
      <ChatList />
      <ChatForm />
    </div>
  )
}

export default Container