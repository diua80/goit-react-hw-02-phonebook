import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid';

export class App extends Component { 
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    number: '',
    filter: ''
  }

  handleFilter = (evt) => {
    this.setState({ filter: evt.target.value });
  }

  addContact = (contactName, number) => {
    const newContact = {
    id: nanoid(),
    name: contactName,
    number: number,
  }
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact],
    // number: ''
  }));
};
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}/>
        <h2>Contacts</h2>
        <ContactList contacts={contacts} filter={this.state.filter} handleFilterChange={ this.handleFilter} />
      </div>
    )
  }
}
 