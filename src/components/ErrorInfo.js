import React from "react";
import ifo from "../images/ifo.jpg";
import errorUser from "../images/errorUser.jpg";

function ErrorInfo(props) {

   return (
      <div className="error">
         <img className="error__img"
            src={props.choice ? ifo : errorUser}
            alt={props.choice ? 'нло' :' лупа'} />
         <h2 className="error__title">{props.choice ? 'Какой-то сверхразум все сломал' : 'Мы никого не нашли'}</h2>
         <p className="error__subtitile">{props.choice ? 'Постараемся быстро починить' : 'Попробуй скорректировать запрос'}</p>
         <button className="error__button"
            onClick={props.onClickReboot}
            type="button">{props.choice ? 'Попробовать снова' : ''}</button>
      </div>
   );
}

export default ErrorInfo;