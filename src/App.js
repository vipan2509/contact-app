import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY ="contacts";
  
  const AddContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])
  };
   
  const removeContactHandler = (id) => {
     const newContactList = contacts.filter((contact) => {
       return contact.id !== id;
     });
     setContacts(newContactList);
  }

  useEffect(() => {
  // Retrieve Data
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []);

  // Store Data
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
   <div className="ui container">
     <Header />
     <AddContact AddContactHandler={AddContactHandler}/>
     <ContactList  contacts={contacts} getContactId={removeContactHandler}/></div>
  );
}

export default App;
