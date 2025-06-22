// Приклад. Вводиться номер місця пацієнта у черзі.. Відображати кольром:
// зелений – він у трійці перших
//  жовтий – інакше

import { useState } from 'react';

function QueueManager() {
  const [place, setPlace] = useState(1);
  function changePlaceHandler(e) {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      setPlace(val);
    }
  }

  return (
    <div className="container">
      <div className="task">
        <div className="task__condition">
          Вводиться номер місця пацієнта у черзі.. Відображати кольром: зелений
          – він у трійці перших, жовтий – інакше.
        </div>
        <div className="task__solution">
          <label>
            Введіть номер місця пацієнта:
            <input
              type="number"
              style={{
                backgroundColor: place <= 3 ? 'green' : 'orange',
              }}
              min={1}
              max={100}
              value={place}
              onChange={changePlaceHandler}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default QueueManager;
