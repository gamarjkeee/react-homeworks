//  Користувача заходить на сайт і вводить свій вік. Якщо вік більше 18, то вивсти текст реклами
// (інакше нічого не треба робити).

import { useState } from 'react';

function AdvertisingComp() {
  const [userAge, setUserAge] = useState(null);

  function changeUserAgeHandler(e) {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      setUserAge(val);
    }
  }

  return (
    <div className="container">
      <div className="task">
        <div className="task__condition">
          Користувача заходить на сайт і вводить свій вік. Якщо вік більше 18,
          то вивсти текст реклами (інакше нічого не треба робити).
        </div>
        <div className="task__solution">
          <label>
            Введіть Ваш вік:
            <input type="number" onChange={changeUserAgeHandler} />
          </label>
          {!!userAge && userAge > 18 && (
            <div className="task__solution-result">
              Купіть пиво! Дуже добре воно.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdvertisingComp;
