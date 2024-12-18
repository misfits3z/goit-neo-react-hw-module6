import { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from './redux/contactSlice'; 
import { changeFilter } from './redux/filtersSlice'; 

function App() {

  const [filter, setFilter] = useState('');

  const contacts = useSelector((state) => state.contacts.items);

  const nameFilter = useSelector((state) => state.filters.name);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      dispatch(setContacts(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (evt) => {
    setFilter(evt.target.value);
    dispatch(changeFilter(evt.target.value)); 
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox type="text" value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;


