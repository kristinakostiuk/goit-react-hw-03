import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  const id = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={`findContact-${id}`} className={css.label}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        id={`findContact-${id}`}
        value={value}
        onChange={(e) => {
          onFilter(e.target.value);
        }}
      />
    </div>
  );
}
