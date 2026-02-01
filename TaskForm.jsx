import { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('Inne');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (title.length < 3) newErrors.title = 'Min. 3 znaki';
    if (title.length > 100) newErrors.title = 'Max. 100 znaków';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addTask({ title, priority, category });
    setTitle('');
    setPriority('medium');
    setCategory('Inne');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Tytuł zadania"
        className={errors.title ? 'error' : ''}
        maxLength={100}
      />
      <span>{title.length}/100</span>
      {errors.title && <div>{errors.title}</div>}
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="low">Niski</option>
        <option value="medium">Średni</option>
        <option value="high">Wysoki</option>
      </select>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Praca</option>
        <option>Dom</option>
        <option>Zakupy</option>
        <option>Inne</option>
      </select>
      <button type="submit" disabled={!!errors.title}>Dodaj</button>
    </form>
  );
}

export default TaskForm;
