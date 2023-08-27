export const ContactList = ({ contacts, filter, handleFilterChange }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <input
  type="text"
  placeholder="Search contacts.."
  value={filter}
  onChange={handleFilterChange}
/>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};
