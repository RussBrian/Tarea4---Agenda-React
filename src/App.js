import { useEffect, useState } from 'react';
import { listOfContacts, addContact } from './services/contactService';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';
import './css/styles.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const data = await listOfContacts();
      setContacts(data);
    };
    getContacts();
  }, []);

  const handleAddContact = async (newContact) => {
    await addContact(newContact);
    const updatedContacts = await listOfContacts();
    setContacts(updatedContacts);
  };

  return (
    <div className="container">
      <header>
        <div className="container header-image"></div>
      </header>
      <AddContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
