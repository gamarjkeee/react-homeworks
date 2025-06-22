// Вводиться інтервал. Після запуску відобразити таймер відліку
// (через секунду  відображати і забирати червоний круг)

import { useEffect, useState } from 'react';
import Ball from './Ball';

function BlinkBall() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const ballInterval = setInterval(() => {
      setIsVisible((v) => !v);
    }, 1000);
    return () => clearInterval(ballInterval);
  }, []);

  return (
    <div className="container">
      <div className="task">
        <div className="task__condition">
          Вводиться інтервал. Після запуску відобразити таймер відліку (через
          секунду відображати і забирати червоний круг)
        </div>
        <div className="task__solution">
          <div
            style={{
              opacity: isVisible ? '1' : '0',
            }}>
            <Ball />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlinkBall;
