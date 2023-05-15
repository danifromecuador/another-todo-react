import Task from '../components/Task';
import Navbar from './Navbar';
const Tasks = () => {
  const TasksArray = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Task 1 description',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Task 2 description',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Task 3 description',
    },
  ];
  return (
    <div>
      {
        TasksArray.map((task) => (
          <Task key={task.id} id={task.id} task={task.title} />
        ))
      }
    </div>
  );
};

export default Tasks;