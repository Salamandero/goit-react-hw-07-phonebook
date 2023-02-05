import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { MainWrapper, HeaderPhone, HeaderContacts } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainWrapper>
      <HeaderPhone>Phonebook</HeaderPhone>
      <ContactForm />

      <HeaderContacts>Contacts</HeaderContacts>
      <Filter />

      <ContactList />
    </MainWrapper>
  );
};

export default App;
