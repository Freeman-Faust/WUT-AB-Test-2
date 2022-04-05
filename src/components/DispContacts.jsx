import DispListItem from "./DispListItem";

function DispContacts (props)
{  return(
        props.contacts.map((contact) => {
        return(
                <DispListItem contact={contact}/>
            )}
        )
)}


export default DispContacts;