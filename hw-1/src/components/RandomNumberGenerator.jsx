// Задача 3. Задано початок та кінець діапазону.
// При натисканні на кнопку випадковим чином генерувати
// значення з вказаного діапазону та відображати його.

import { useState } from 'react';

function RandomNumberGenerator() {
  const [minNum, setMinNum] = useState(1);
  const [maxNum, setMaxNum] = useState(100);
  const [randomNum, setRandomNum] = useState(null);

  function changeMinNumHandler(e) {
    const val = parseInt(e.target.value);
    setMinNum(val);
  }

  function changeMaxNumHandler(e) {
    const val = parseInt(e.target.value);
    setMaxNum(val);
  }

  function generateRandomNumber() {
    const randomNum =
      Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    setRandomNum(randomNum);
  }
  return (
    <div className="task">
      <div className="task__main">
        <label>
          Введіть мінімальне значення
          <input type="number" value={minNum} onChange={changeMinNumHandler} />
        </label>
        <label>
          Введіть максимальне значення
          <input type="number" value={maxNum} onChange={changeMaxNumHandler} />
        </label>
        <button type="button" onClick={generateRandomNumber}>
          Згенерувати рандомне число
        </button>
      </div>

      {!!randomNum && (
        <div className="task__result">Рандомне число: {randomNum}</div>
      )}
    </div>
  );
}

export default RandomNumberGenerator;
