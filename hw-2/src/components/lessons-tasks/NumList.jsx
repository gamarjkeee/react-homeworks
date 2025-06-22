// Потрібно відобразити список з N випадкових чисел

function NumList({ numbers }) {
  return (
    <div className="container">
      <div className="task">
        <div className="task__condition">
          Потрібно відобразити список з N випадкових чисел
        </div>
        <div className="task__solution">
          <ul>
            {numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NumList;
