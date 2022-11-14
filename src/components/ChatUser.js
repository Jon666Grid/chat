import React from "react";
import { Link } from 'react-router-dom';
import rectangle from "../images/rectangle.jpg";

function ChatUser(props) {

   const options = { month: 'short', day: 'numeric' };

   return (
      <section className="avatar">
         <ul className="avatar__lists">
            {props.items.map((item) => (
               <li key={item.id} className="avatar__list">
                  <div className="avatar__container">
                     <Link to='/profile' className="avatar__link">
                        <img  className="avatar__img"
                           src={!item.avatarUrl ? rectangle : item.avatarUrl}
                           alt="avatar"
                           onClick={() => props.onAvatarClick(item)} />
                     </Link>
                     <h2 className="avatar__title">{item.firstName} {item.lastName}</h2>
                     <span className="avatar__other">{item.userTag}</span>
                     <p className="avatar__subtitle">{item.department}</p>
                     <span className="avatar__age">{props.choice === 'birthday' 
                     ? new Date(item.birthday.split("-").join(" ")).toLocaleDateString('ru-RU', options).split(".") : ''}
                     </span>
                  </div>
               </li>
            ))}
         </ul>
      </section>
   );
}

export default ChatUser;
