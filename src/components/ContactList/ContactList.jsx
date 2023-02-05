import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { List, ContactItem, Info, BtnInfoDelete } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContacts = id => {
    dispatch(deleteContacts(id));
  };
  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts && (
        <List>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id}>
              <Info>{contact.name}:</Info>
              <Info>{contact.phone}</Info>
              <BtnInfoDelete
                type="button"
                onClick={() => onDeleteContacts(contact.id)}
              >
                Delete
              </BtnInfoDelete>
            </ContactItem>
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
