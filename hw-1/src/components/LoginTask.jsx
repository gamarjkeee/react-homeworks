// Задача 5. Додаток містить масив об’єктів (логін, пароль) --
// існуючі логіни і паролі. Користувач вводить логін і пароль,
// а програма при натисненні на кнопку повідомляє чи може користувач бути авторизованим.

import { useState } from 'react';

function LoginTask() {
  const users = [
    { login: 'andrii.petrenko', password: 'Zx8vL2p9' },
    { login: 'olga.kovalchuk', password: 'Rt7mQ1s4' },
    { login: 'dmytro_ivanov', password: 'Pq9kWe2x' },
    { login: 'svitlana.bondar', password: 'Lm3rT8v1' },
    { login: 'oleh_kravets', password: 'Yt6nU4b3' },
    { login: 'natalia.melnyk', password: 'Hs2xLp9q' },
    { login: 'vitaliy.sydorenko', password: 'Fg7qWz3k' },
    { login: 'iryna.levchenko', password: 'Ko1vXr6m' },
    { login: 'taras.hnatyuk', password: 'Bn9tYs4e' },
    { login: 'kateryna.zelenko', password: 'Dj3pLu7w' },
  ];

  const [userInputData, setUserInputData] = useState(() => ({
    login: '',
    password: '',
  }));

  const [userData, setUserData] = useState(() => ({
    login: '',
    password: '',
  }));

  const [greetingMessage, setGreetingMessage] = useState('');

  function changeUserLoginHandler(e) {
    const userLogin = e.target.value.trim();
    setUserInputData((prevData) => ({ ...prevData, login: userLogin }));
  }

  function changeUserPasswordHandler(e) {
    const userPassword = e.target.value.trim();
    setUserInputData((prevData) => ({ ...prevData, password: userPassword }));
  }

  function createGreetingMessage(text, isUser) {
    !!isUser
      ? setGreetingMessage(`${text} ${userInputData.login}`)
      : setGreetingMessage(text);
  }

  function isUserLoginHandler() {
    const isUserDataCorrect = function () {
      return users.find(
        (user) =>
          user.login === userInputData.login &&
          user.password === userInputData.password
      );
    };
    if (!!isUserDataCorrect()) {
      setUserData((prevData) => ({
        ...prevData,
        login: userInputData.login,
        password: userInputData.password,
      }));
      createGreetingMessage('ласкаво просимо, ', true);
    } else {
      createGreetingMessage(
        'невірно вказаний логін або пароль. Спробуйте ще раз',
        false
      );
    }
  }

  return (
    <div className="task">
      <div className="task__main">
        <label>
          Login
          <input type="text" onBlur={changeUserLoginHandler} />
        </label>
        <label>
          Password
          <input type="password" onBlur={changeUserPasswordHandler} />
        </label>
        <button onClick={isUserLoginHandler} type="button">
          GO
        </button>
      </div>

      {!!greetingMessage && (
        <div className="task__result">{greetingMessage}</div>
      )}
    </div>
  );
}

export default LoginTask;
