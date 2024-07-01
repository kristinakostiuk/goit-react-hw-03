import { useId } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
  const id = useId();

  const handlesubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (name && number) {
      onAdd({ id: Date.now(), name, number });
    }
    e.target.reset();
  };
  return (
    <div className={css.form}>
      <form onSubmit={handlesubmit} className={css.form}>
        <label htmlFor={`contactName-${id}`} className={css.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id={`contactName-${id}`}
          className={css.input}
        />
        <label htmlFor={`contactNumber-${id}`} className={css.label}>
          Number
        </label>
        <input
          type="text"
          name="number"
          id={`contactNumber-${id}`}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}
