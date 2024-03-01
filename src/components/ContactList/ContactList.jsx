import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  getContactItemsSelector,
} from "../../redux/contacts/selectors";
import { getFilterSelector } from "../../redux/filter/selectors";

export const ContactList = () => {
  const contacts = useSelector(getContactItemsSelector);
  const searchMessage = useSelector(getFilterSelector);

  const filterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchMessage.toLowerCase())
    );
  };
  return (
    <div>
      <ul className={css.contacts}>
        {filterContacts(contacts).map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
};
