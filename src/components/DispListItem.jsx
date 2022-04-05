import AddBtn from "./AddBtn";
import DelBtn from "./DelBtn";
import EditBtn from "./EditBtn";

function DispListItem (props)
{
    console.log(props)
        return(
                <div>
                <li>{props.contact.image}, {props.contact.firstName}, {props.contact.lastName}, {props.contact.email}, {props.contact.phone}</li>
                <AddBtn/>
                <EditBtn/>
                <DelBtn/>
                </div>);
}


export default DispListItem;