import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { Title} from "./App.styled";

class App extends Component{

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  
}




  formSubmitHandler = ({ name, number }) => {
    const nameToLowerCase = name.toLowerCase();
    const filterName = this.state.contacts.find(contact =>
      contact.name.toLowerCase() === nameToLowerCase,
    );

    if (filterName) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [{name, number, id: nanoid()}, ...contacts],
    }))
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };
  


  filterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value })
  };

  getExsistContacts = () => {
    const { filter, contacts } = this.state;
    const generalFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(generalFilter),
    )}

 
  

  render(){
    const  { filter } = this.state;
    return (
      <div>
      <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.filterChange}/>
        <ContactList contacts={this.getExsistContacts()} onDelContact={this.deleteContact} />
      </div>
    );
   
  }
}

export default App;
