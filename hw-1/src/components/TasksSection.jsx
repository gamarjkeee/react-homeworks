import BusManager from './BusManager';
import LoginTask from './LoginTask';
import RandomNumberGenerator from './RandomNumberGenerator';
import SeasonsManager from './SeasonsManager';

function TasksSection() {
  return (
    <div className="tasks-container">
      <BusManager />
      <SeasonsManager />
      <RandomNumberGenerator />
      <LoginTask />
    </div>
  );
}

export default TasksSection;
