import React from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import styles from '../components/styles.module.css'

function Container() {
  return (
    <div className={styles.container}>
      <ChatList />
      <ChatForm />
    </div>
  )
}

export default Container