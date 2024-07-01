import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Reguired'),
  number: Yup.string()
    .matches(/^\d+(-\d+)*$/, 'It should be a number!')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Reguired'),
});

export default function ContactForm({ onAdd }) {
  const id = useId();

  const handlesubmit = (values, actions) => {
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={ContactSchema}
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handlesubmit}
    >
      <Form className={css.form}>
        <label htmlFor={`contactName-${id}`} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={`contactName-${id}`}
          className={css.input}
        />
        <ErrorMessage
          name="name"
          component="span"
          className={css.errorMessage}
        />
        <label htmlFor={`contactNumber-${id}`} className={css.label}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          id={`contactNumber-${id}`}
          className={css.input}
        />
        <ErrorMessage
          name="number"
          component="span"
          className={css.errorMessage}
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
