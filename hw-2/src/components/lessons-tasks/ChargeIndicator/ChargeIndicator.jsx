//  У залежності від заряду батареї застосовувати відповідний колір фону
//  Заряд > 80 – зелений
//  30 <= Заряд <= 80 - жовтий
//  Заряд < 30 - червоний

import { useState } from 'react';
import styles from './ChargeIndicator.module.scss';

function ChargeIndicator() {
  const [chargeValue, setChargeValue] = useState(100);

  function changeChargeValueHandler(e) {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      setChargeValue(val);
    }
  }

  function getCurrentClass() {
    let currentClass;
    if (chargeValue > 80) {
      currentClass = styles.full;
    } else if (chargeValue >= 30) {
      currentClass = styles.middle;
    } else {
      currentClass = styles.low;
    }
    return currentClass;
  }

  return (
    <div className="container">
      <div className="task">
        <div className="task__condition">
          У залежності від заряду батареї застосовувати відповідний колір фону.
          Заряд &gt; 80 – зелений, 30 &lt;= Заряд &lt;= 80 - жовтий, Заряд &lt;
          30 - червоний.
        </div>
        <div className="task__solution">
          <label>
            Введіть % заряду батареї:
            <input
              type="number"
              className={getCurrentClass()}
              min={0}
              max={100}
              value={chargeValue}
              onChange={changeChargeValueHandler}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ChargeIndicator;
