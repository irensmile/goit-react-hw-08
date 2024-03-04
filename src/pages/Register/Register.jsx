import { useDispatch } from "react-redux";
import { signup } from "../../redux/auth/operations";
import css from "./Register.module.css";
import DocumentTitle from "../../components/DocumentTitle";

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        form.reset();
      })
      .catch(() => {
        toast(`Error on register`);
      });
  };
  return (
    <>
      <DocumentTitle>Register</DocumentTitle>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.element}>
          Name
          <input name="name"></input>
        </label>
        <label className={css.element}>
          Email
          <input name="email"></input>
        </label>
        <label className={css.element}>
          Password
          <input name="password" type="password"></input>
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default Register;
