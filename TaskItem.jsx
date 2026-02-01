
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete, onPriorityChange }) {
  if (tasks.length === 0) return <div>Brak zadań lub nie znaleziono.</div>;
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onPriorityChange={onPriorityChange} />
      ))}
    </ul>
  );
}

export default TaskList;
