
function TaskStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="stats">
      Razem: {total}, Ukończone: {completed}, Pozostałe: {total - completed} ({percent}%)
    </div>
  );
}

export default TaskStats;
