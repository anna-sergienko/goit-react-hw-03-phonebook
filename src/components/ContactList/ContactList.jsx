import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItem,
  ContactsName,
  DelContactBtn,
} from './ContactList.styled';

const ContactList = ({ contacts, onDelContact }) => (
  <ContactsList>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem key={id}>
        <ContactsName>
          {name}: {number}
        </ContactsName>
        <DelContactBtn type="button" onClick={() => onDelContact(id)}>
          Delete
        </DelContactBtn>
      </ContactsItem>
    ))}
  </ContactsList>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelContact: PropTypes.func.isRequired,
};
