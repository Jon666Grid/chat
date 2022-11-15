import React from "react";
import star from "../images/star.svg";
import phone from "../images/phone.svg";
import { Link } from 'react-router-dom';

function ProfileUser(props) {

   const years = new Date().toJSON().substring(0, 4) - (props.card.birthday).substring(0, 4);
   const yo = (y) => /\d*1\d$/.test(y) || /[05-9]$/.test(y) ? 'лет' : (/1$/.test(y) ? 'год' : 'года');
   const options = { month: 'short', day: 'numeric', year: 'numeric' };

   return (
      <section className="profile">
         <div className="profile__container">
            <img className="profile__img"
               src={props.card.avatarUrl}
               alt="аватар" />
            <h2 className="profile__title">{props.card.firstName} {props.card.lastName}</h2>
            <span className="profile__other">{props.card.userTag}</span>
            <p className="profile__subtitle">{props.card.department}</p>
            <Link to='/chat' className="profile__out" />
         </div>
         <ul className="profile__data">
            <li className="profile__data-container">
               <img className="profile__icon" src={star} alt="звезда" />
               <p className="profile__info">{
                  new Date(props.card.birthday.split("-").join(" ")).toLocaleDateString('ru-RU', options).split(".")}</p>
               <span className="profile__age">{years} {yo(years)}</span>
            </li>
            <li className="profile__data-container">
               <img className="profile__icon" src={phone} alt="телефон" />
               <p className="profile__info">{props.card.phone}</p>
            </li>
         </ul>
      </section>

   );
}

export default ProfileUser;
