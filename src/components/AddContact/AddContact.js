import { useState } from "react";
import "./addContact.css";
import addOneContact from "../../services/addContactService";
import { useNavigate } from "react-router-dom";

const AddContact = ({ history }) => {
  const navigate = useNavigate();

  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fields are mandatory !");
      return;
    }
    e.preventDefault();
    try {
      await addOneContact(contact);
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {}
  };

  return (
    <form onSubmit={submitForm}>
      <div className="formControl">
        <label>name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <label>email</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
