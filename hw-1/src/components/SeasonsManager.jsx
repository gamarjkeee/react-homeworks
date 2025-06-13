// Задача 2. Вводиться номер місяця. Автоматично виводити рекомендований
// одяг (зима – пальто, літо – шорти ….). Також автоматично виводити
// зображення з відповідним зображенням лісу (зима – ліс зі снігом, осінь – жовтий ліс, …).

import { useState } from 'react';

function SeasonsManager() {
  const seasons = [
    {
      monthNums: [12, 1, 2],
      title: 'Зима',
      clothing: 'пуховик, теплі штани, черевики',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Haanja_2010_01_1.jpg/960px-Haanja_2010_01_1.jpg',
    },
    {
      monthNums: [3, 4, 5],
      title: 'Весна',
      clothing: 'пальто, штани, кросівки',
      imgUrl:
        'https://img.freepik.com/free-photo/beautiful-shot-green-field-covered-with-yellow-flowers-near-cherry-blossom-trees_181624-24215.jpg',
    },
    {
      monthNums: [6, 7, 8],
      title: 'Літо',
      clothing: 'футболка, шорти, босоніжки',
      imgUrl:
        'https://sichnews.ua/wp-content/uploads/2025/05/photo_2025-05-12_18-07-30.jpg',
    },
    {
      monthNums: [9, 10, 11],
      title: 'Осінь',
      clothing: 'куртка, штани, парасолька',
      imgUrl: 'https://tsystem.com.ua/wp-content/uploads/2024/09/autumn.jpg',
    },
  ];

  const [currentMonth, setCurrentMonth] = useState(null);

  const currentMonthData = seasons.find((el) =>
    el.monthNums.includes(currentMonth)
  );

  function changeCurrentMonthHandler(e) {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1 && val <= 12) {
      setCurrentMonth(val);
    }
  }

  return (
    <div className="task">
      <div className="task__main">
        <label>
          Введіть номер місяця
          <input
            onChange={changeCurrentMonthHandler}
            type="number"
            min="1"
            max="12"
          />
        </label>
      </div>
      {!!currentMonthData && (
        <div className="task__result">
          <ul>
            <li>{`Пора року - ${currentMonthData.title}`}</li>
            <li>{`Рекомендований одяг: ${currentMonthData.clothing}`}</li>
          </ul>
          <img src={currentMonthData.imgUrl} alt="currentMonthData.title" />
        </div>
      )}
    </div>
  );
}

export default SeasonsManager;
