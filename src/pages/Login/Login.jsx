import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./Login.module.css";
import DocumentTitle from "../../components/DocumentTitle";
import toast from "react-hot-toast";

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        form.reset();
      })
      .catch(() => {
        toast(`Error on login`);
      });
  };
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.element}>
          Email
          <input name="email"></input>
        </label>
        <label className={css.element}>
          Password
          <input name="password" type="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
