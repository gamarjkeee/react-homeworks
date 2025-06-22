//  Дано масив з авто. Відобразити його.

function CarsList({ cars }) {
  return (
    <div className="container">
      <div className="task">
        <div className="task__condition">
          Дано масив з авто. Відобразити його.
        </div>
        <div className="task__solution">
          <ul>
            {cars.map((car) => (
              <li
                key={car.id}>{`${car.brand} - ${car.model} (${car.year})`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CarsList;
