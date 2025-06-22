// Користувача заходить на сайт і вводить свій вік. Якщо вік менше 16, то вивсти повідомлення про
// заборону користування сайтом, інакше вивести зображення товару.

import { useState } from 'react';

function StartBlock() {
  const [userAge, setUserAge] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const isUserAge = !!userAge ? true : false;

  function changeUserAgeHandler(e) {
    const val = parseInt(e.target.value);
    setUserAge(val);
  }

  let content;
  if (userAge < 16) {
    content = <h2>Доступ заборонено!!!</h2>;
  } else {
    content = (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkHw2cvmb15YPRKh0fvtWa_fCSLWl4VzvEg&s"
        alt="product"
      />
    );
  }

  return (
    <div className="container">
      <div className="task">
        <div className="task__condition">
          Користувача заходить на сайт і вводить свій вік. Якщо вік менше 16, то
          вивeсти повідомлення про заборону користування сайтом, інакше вивести
          зображення товару.
        </div>
        <div className="task__solution">
          <label>
            Введіть Ваш вік:
            <input type="number" onBlur={changeUserAgeHandler} />
          </label>

          <div
            style={{
              display: !isUserAge ? 'none' : 'block',
            }}
            className="task__solution-result">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartBlock;
