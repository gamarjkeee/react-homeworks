import AdvertisingComp from './lessons-tasks/AdvertisingComp';
import BlinkBall from './lessons-tasks/BlinkBall/BlinkBall';
import CarsList from './lessons-tasks/CarsList';
import ChargeIndicator from './lessons-tasks/ChargeIndicator/ChargeIndicator';
import NumList from './lessons-tasks/NumList';
import ProductManager from './lessons-tasks/ProductMagager';
import QueueManager from './lessons-tasks/QueueManager';
import StartBlock from './lessons-tasks/StartBlock';
import TitleComponent from './TitleComponent';

function PracticeTasks() {
  const numbers = [1, 3, 5, 7, 9];
  const cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, brand: 'Tesla', model: 'Model 3', year: 2022 },
    { id: 4, brand: 'Ford', model: 'Focus', year: 2018 },
    { id: 5, brand: 'BMW', model: 'X5', year: 2021 },
  ];
  return (
    <>
      <TitleComponent title="Практичні завдання з уроку №2" />
      <QueueManager />
      <ChargeIndicator />
      <StartBlock />
      <AdvertisingComp />
      <BlinkBall />
      <NumList numbers={numbers} />
      <CarsList cars={cars} />
      <ProductManager />
    </>
  );
}

export default PracticeTasks;
