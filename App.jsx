import { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import TaskStats from './components/TaskStats';
import { fetchTasks, saveTasks } from './api/tasksApi';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const loaded = await fetchTasks();
        setTasks(loaded || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    if (!loading) {
      const save = async () => {
        setSaving(true);
        try {
          await saveTasks(tasks);
        } catch (e) {
          console.error(e);
        } finally {
          setSaving(false);
        }
      };
      save();
    }
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: crypto.randomUUID(), ...newTask, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const updateTask = (id, updates) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  const changePriority = (id, priority) => updateTask(id, { priority });
  const clearAll = () => {
    if (confirm('Wyczyść wszystkie?')) setTasks([]);
  };

  const filteredTasks = tasks
    .filter(t => filter === 'all' || (filter === 'active' ? !t.completed : t.completed))
    .filter(t => categoryFilter === 'all' || t.category === categoryFilter)
    .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'priority') {
        const prio = { high: 3, medium: 2, low: 1 };
        return prio[b.priority] - prio[a.priority];
      }
      if (sort === 'alpha') return a.title.localeCompare(b.title);
      return 0;
    });

  if (loading) return <div>Ładowanie...</div>;

  return (
    <div className="app">
      <Header />
      <TaskForm addTask={addTask} />
      <FilterButtons filter={filter} setFilter={setFilter} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
      <input type="text" placeholder="Szukaj..." value={search} onChange={e => setSearch(e.target.value)} />
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="default">Domyślnie</option>
        <option value="priority">Priorytet</option>
        <option value="alpha">Alfabetycznie</option>
      </select>
      {saving && <div>Zapisywanie...</div>}
      <TaskStats tasks={filteredTasks} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} onPriorityChange={changePriority} />
      <button onClick={clearAll}>Wyczyść wszystko</button>
    </div>
  );
}

export default App;
