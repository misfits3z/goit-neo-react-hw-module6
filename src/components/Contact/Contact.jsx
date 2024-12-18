import { FaUser, FaPhone} from 'react-icons/fa'
import css from './Contact.module.css'
// import ContactList from '../ContactList/ContactList';

export default function Contact({ id, name, number, onDeleteContact }) {


    return (
        <div className={css.contact}>
        <li className={css.card}>
            <p><FaUser className={css.icon}/>{name}</p>
            <p><FaPhone className={css.icon}/>{number}</p>
        </li>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
    </div>
    );
}