import { ContactItem } from 'components/ContactItem/ContactItem';


export const ContactList = ({ contacts,HandleDeleteContact, filter, handleFilterChange }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>          
      <ul>
        <ContactItem contacts={filteredContacts} HandleDeleteContact={HandleDeleteContact} />
      </ul>
    </div>
  );
};
