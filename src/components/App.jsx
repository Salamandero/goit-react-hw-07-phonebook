import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { MainWrapper, HeaderPhone, HeaderContacts } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Loader from './Loader/Loader';

const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
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
      {isLoading ? <Loader /> : <ContactList />}
    </MainWrapper>
  );
};

export default App;
