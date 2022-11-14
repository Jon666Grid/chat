import React, { useState } from 'react';

function FilterPopup(props) {

   const openedClass = props.isOpen && 'popup_active';

   const [checked, setChecked] = useState(true);

   const chengeCheckbox = (e) => {
      props.onClickCheck(e.target.value)
      setChecked(!checked);
   }

   return <div className={`popup ${openedClass}`}>
      <div className='popup__container'>
         <h2 className='popup__title'>Сортировка</h2>
         <div className='popup__block'>
            <input className='popup__checkbox'
               type="radio" id="color-1" checked={checked}
               name="color" value={'alphabet'}
               onChange={chengeCheckbox}
               onClick={!checked ? props.onClickClose : null} />
            <label className='popup__text' htmlFor="color-1">По алфавиту</label>
         </div>
         <div className='popup__block'>
            <input className='popup__checkbox'
               type="radio" id="color-2" checked={!checked}
               name="color" value={'birthday'}
               onChange={chengeCheckbox}
               onClick={checked ? props.onClickClose : null} />
            <label className='popup__text' htmlFor="color-2">По дню рождения</label>
         </div>
         <button className='popup__close'
            type='button'
            onClick={props.onClickClose}
         />
      </div>
   </div>;
}

export default FilterPopup;