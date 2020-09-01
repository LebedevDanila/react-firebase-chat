import React from 'react';

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