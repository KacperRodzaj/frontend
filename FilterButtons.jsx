function FilterButtons({ filter, setFilter, categoryFilter, setCategoryFilter }) {
  return (
    <>
      <div>
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Wszystkie</button>
        <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Aktywne</button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Ukończone</button>
      </div>
      <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
        <option value="all">Wszystkie kategorie</option>
        <option>Praca</option>
        <option>Dom</option>
        <option>Zakupy</option>
        <option>Inne</option>
      </select>
    </>
  );
}

export default FilterButtons;