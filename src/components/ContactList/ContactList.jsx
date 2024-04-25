import { nanoid } from "@reduxjs/toolkit";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);
  const contactsFiltered = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      <ul className={css.list}>
        {contactsFiltered.map((contact) => (
          <li className={css.item} key={nanoid()}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
