import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import SearchUser from './SearchUser';
import ChatUser from './ChatUser';
import { getUserByItems } from '../utils/Api'
import ErrorInfo from "./ErrorInfo";
import FilterPopup from "./FilterPopup";
import ProfileUser from "./ProfileUser";


function App() {

  const [userInfo, setUserInfo] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [department, setDepartment] = useState('');
  const [checkbox, setCheckbox] = useState('alphabet');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [errorInfo, setErrorInfo] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);

  const getData = async (word) => {
    try {
      const data = await getUserByItems(word);
      setUserInfo(data.data.items);
      setErrorInfo(false);
    } catch (e) {
      if (e.name === 'AxiosError') {
        setErrorInfo(true);
      }
    }
  }

  useEffect(() => {
    getData(!department ? 'all' : department);
  }, [department]);

  const inputFilter = userInfo.filter(user => {
    return user.firstName.toLowerCase().includes(searchWord.toLowerCase())
      || user.lastName.toLowerCase().includes(searchWord.toLowerCase())
      || user.userTag.toLowerCase().includes(searchWord.toLowerCase())
  });

  const filtered = checkbox === 'birthday' ?
    (inputFilter.sort((a, b) => {
      const obj1 = a.birthday.substring(5, 10);
      const obj2 = b.birthday.substring(5, 10);
      return obj1 > obj2 ? 1 : -1;
    }))
    : inputFilter.sort((a, b) => a.firstName.localeCompare(b.firstName));

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const loading = filtered.length === 0 || errorInfo;

  return (
    <div className="page">
      <Routes>
        <Route path="/chat"
          element={
            <>
              <SearchUser
                onChange={setSearchWord}
                onChangeDepo={setDepartment}
                onClickModal={setIsOpenModal}
                choice={checkbox}
              />
              {loading ?
                <ErrorInfo
                  onClickReboot={() => getData(department)}
                  choice={errorInfo}
                />
                : <ChatUser
                  items={filtered}
                  choice={checkbox}
                  onAvatarClick={setSelectedCard}
                />}
            </>
          } />
        < Route path="/profile"
          element={<ProfileUser
            card={selectedCard}
          />}
        />
      </Routes>
      <FilterPopup
        isOpen={isOpenModal}
        onClickClose={closeModal}
        onClickCheck={setCheckbox}
      />
    </div>
  );
}

export default App;
