export const ContactItem = ({ contacts, HandleDeleteContact }) => {
  return (
    <div>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={()=>HandleDeleteContact(contact.id)}> delete</button>
        </li>
      ))}
    </div>
  );
};
