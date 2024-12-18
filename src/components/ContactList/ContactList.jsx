import Contact from "../Contact/Contact"
import css from './ContactList.module.css'


export default function ContactList ({contacts, onDeleteContact}){
    return(
        <div className={css.contacts}>
            <ul className={css.list}>
                {contacts.map(({id, name, number}) => (
                    <Contact key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact} />

                ))}
               
            </ul>
        </div>
    )
}