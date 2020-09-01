import React from 'react';

/**
 * В компонент сообщения мы получаем статус нашего пользователя, а так же текст сообщения
 * @param {user} user - статус пользователя
 * @param {text} text - текст сообщения
 */
function Message({user, text}) {
  return (
    <div className={`message ${user}`}>
      <div className="message-content">
        <div className={`message-text ${user}`}>
          {text}
        </div>
        <div className="message-date">
          {user === 'me' ? 'You' : user}
        </div>
      </div>
    </div>
  );
}

export default Message;