import { Link, useLocation } from "react-router-dom";
const ContactDetail = () => {
  const location = useLocation();
  const { state } = location;

  //   console.log(props.location.state.contact);
  return (
    <div>
      <p> user name is : {state.contact.name}</p>
      <p> user email is : {state.contact.email}</p>
      <Link to="/"> go to contact List</Link>
    </div>
  );
};

export default ContactDetail;
