// Задача 1. Вводиться кількість пасажирів. Вивести:
//     • скільки потрібно автобусів (кожен автобус на 20 місць)
//     • скільки пляшок води (кожному пасажиру 2 пляшки)
//     • скільки бутербродів (кожному пасажиру 3 бутерброди)

import { useRef, useState } from 'react';

function BusManager() {
  const [passengersNumber, setPassengersNumber] = useState(null);

  const passengersNumberInput = useRef(null);

  function changePassengersNumberHandler() {
    const val = parseInt(passengersNumberInput.current.value);
    if (!isNaN(val) && val >= 0) {
      setPassengersNumber(val);
    }
  }

  function calcBussesNumber() {
    return Math.ceil(passengersNumber / 20);
  }

  function calBottlesNumber() {
    return passengersNumber * 2;
  }

  function calcSandwichesNumber() {
    return passengersNumber * 3;
  }

  return (
    <div className="task">
      <div className="task__main">
        <label>
          Введіть кількість пасажирів
          <input ref={passengersNumberInput} type="number" min="0" />
        </label>
        <button type="button" onClick={changePassengersNumberHandler}>
          Показати результат
        </button>
      </div>
      <div
        className="task__result"
        style={{ display: passengersNumber > 0 ? 'flex' : 'none' }}>
        <ul>
          <li>{`потрібно автобусів: ${calcBussesNumber()}`}</li>
          <li>{`потрібно пляшок води: ${calBottlesNumber()}`}</li>
          <li>{`потрібно бутербродів: ${calcSandwichesNumber()}`}</li>
        </ul>
      </div>
    </div>
  );
}

export default BusManager;
