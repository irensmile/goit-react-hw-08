import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getContactItemsSelector } from "../../redux/selectors";
import { addContact } from "../../redux/operations";

// Form validation schema
const FormValidationSchema = object({
  name: string().required().min(3).max(50),
  number: string().required().min(3).max(50),
});

export const ContactForm = () => {
  const nameFieldId = nanoid();
  const nameNumberId = nanoid();
  const contactList = useSelector(getContactItemsSelector);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const newContact = { id: nanoid(), name: name, number: number };
    if (
      contactList.some(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FormValidationSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.row}>
            <div>
              <label htmlFor={nameFieldId}>Name</label>
            </div>
            <Field type="text" id={nameFieldId} name="name" />
            {touched.name && errors.name && <div>{errors.name}</div>}
          </div>
          <div className={css.row}>
            <div>
              <label htmlFor={nameNumberId}>Number</label>
            </div>
            <Field type="text" id={nameNumberId} name="number" />
            {touched.number && errors.number && (
              <div className={css.error}>{errors.number}</div>
            )}
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};
