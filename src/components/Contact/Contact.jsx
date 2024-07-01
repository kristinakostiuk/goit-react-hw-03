import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contact}>
      <div>
        <p className={css.name}>👤 {name}</p>
        <p className={css.number}>📞 {number}</p>
      </div>
      <button onClick={() => onDelete(id)} className={css.button}>
        Delete
      </button>
    </div>
  );
}
