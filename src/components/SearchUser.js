import { useState } from 'react';

function SearchUser(props) {

  const [activeTab, setActiveTab] = useState('all');

  const handleInput = (e) => {
    props.onChange(e.target.value);
  }

  const depo = (e) => {
    props.onChangeDepo(e.target.value);
    setActiveTab(e.target.value);
  }

  const activeClass = (data) => {
    return activeTab === (data) ? "navigation__active" : "navigation__list-button";
  }

  const activeIcon = props.choice === 'birthday' ? 'navigation__filter-button_active' : ''

  return (
    <section className="navigation">
      <h1 className="navigation__title">Поиск
      </h1>
      <div className="navigation__content">
        <input className="navigation__input"
          autoFocus
          autoComplete="off"
          type="text"
          placeholder="Введи имя, тег, почту..."
          onChange={handleInput}
        />
        <div className="navigation__icon"
        />
        <button className={`navigation__filter-button ${activeIcon}`}
          onClick={props.onClickModal}
          type="button" />
      </div>
      <nav>
        <ul className="navigation__lists">
          <li>
            <button className={activeClass('all')}
              value={'all'}
              onClick={depo}
              type="button">Все</button></li>
          <li>
            <button className={activeClass('design')}
              value={'design'}
              onClick={depo}
              type="button">Designers</button></li>
          <li>
            <button className={activeClass('analytics')}
              value={'analytics'}
              onClick={depo}
              type="button">Analysts</button></li>
          <li>
            <button className={activeClass('management')}
              value={'management'}
              onClick={depo}
              type="button">Managers</button></li>
          <li>
            <button className={activeClass('ios')}
              value={'ios'}
              onClick={depo}
              type="button">iOS</button></li>
          <li>
            <button className={activeClass('android')}
              value={'android'}
              onClick={depo}
              type="button">Android</button></li>
        </ul>
      </nav>
    </section>
  );
}

export default SearchUser;