import BusManager from './BusManager';
import SeasonsManager from './SeasonsManager';

function TasksSection() {
  return (
    <div className="tasks-container">
      <BusManager />
      <SeasonsManager />
    </div>
  );
}

export default TasksSection;
