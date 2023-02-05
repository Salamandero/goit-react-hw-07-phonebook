import { Form, Label, Input, Button } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return console.warn(`Type field ${name} don't read `);
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleClick = () => {
    if (!name.trim()) {
      return alert('The field Name is empty, write Name');
    }
    if (!phone.trim()) {
      return alert('The field Phone is empty, write Phone');
    }
    if (phone.length < 3 || phone.length > 24) {
      return alert(
        `You wrote ${phone.length} symbols, but need from 3 to 24   `
      );
    }
    const newName = name.trim();
    const proofName = Object.values(contacts.items).map(
      contact => contact.name
    );
    if (proofName.includes(newName)) {
      reset();
      return alert(`${newName} is already in contacts.`);
    }

    const newContact = { name: name, phone: phone };
    dispatch(addContacts(newContact));

    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Phone
          <Input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit" onClick={handleClick}>
          Add contact
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
