import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { lazy, useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import {
  getContactItemsSelector,
  getErrorSelector,
  getIsLoadingSelector,
} from "./redux/contacts/selectors";

const HomePage = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Register'));
const PhoneBookPage = lazy(() => import('./pages/Phonebook'));


const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingSelector);
  const error = useSelector(getErrorSelector);
  const contacts = useSelector(getContactItemsSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {contacts && contacts.length > 0 && (
        <div className="container">
          <h1>PhoneBook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      )}
    </>
  );
};

export default App;
