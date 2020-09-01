import React, { useState, useEffect } from 'react';
import Message from './Message';
import { db, auth } from '../services/firebase';

function Chat() {
  const [messages, setMessages] = useState([])
  const [fieldValue, setFieldValue] = useState('')
  const [uid, setUid] = useState('')

  const login = () => {
    auth.onAuthStateChanged(async (user) => {
      if(!user) {
        await auth.signInAnonymously();
      }

      setUid(auth.currentUser.uid)
    });
  }

  const fetchMessages = () => {
    db.ref("messages").on("value", snapshot => {
      let chat = [];
      snapshot.forEach((snap) => {
        chat.push(snap.val());
      });

      setMessages(chat);
    });
  }

  useEffect(() => {
    login();

    fetchMessages();
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if(!fieldValue) {
      alert('Введите сообщение!');
      return false;
    }

    await db.ref("messages").push({
      createdBy: uid,
      text: fieldValue,
    });

    setFieldValue('');
  } 
  
  return (
    <div id="app">
      <div className="header">
        <div className="header-title">CHAT</div>
      </div>
      <div className="chat">
        <div className="chat__messages">
          {messages.map((message, idx) => (
            <Message
              user={uid === message.createdBy ?  'me' : 'interlocutor'}
              text={message.text} key={idx}
            />
          ))}
        </div>
        <form className="form" onSubmit={handlerSubmit}>
          <input
              type="text"
              placeholder="Введите свое сообщение..."
              className="form__input"
              value={fieldValue}
              onChange={(e) => setFieldValue(e.target.value)}
            />
          <button type="submit" className="form__submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
