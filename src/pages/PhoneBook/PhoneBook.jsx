import { useDispatch, useSelector } from "react-redux";
import { getContactItemsSelector, getErrorSelector, getIsLoadingSelector } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList'
import DocumentTitle from "../../components/DocumentTitle";

const PhoneBookPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoadingSelector);
    const error = useSelector(getErrorSelector);
    const contacts = useSelector(getContactItemsSelector);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

    return (
    <>
     <DocumentTitle>Phone Book</DocumentTitle>
    {isLoading && <div>Loading...</div>}
    {error && <div>Error: {error}</div>}
    {contacts && (
      <div className="container">
        <h1>Phone Book</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    )}
  </>
)}
export default PhoneBookPage;