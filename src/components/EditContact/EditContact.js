import { useEffect, useState } from "react";
import getOnContact from "../../services/getOneContact";
import updateContact from "../../services/updateContact";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("All fields are mandatory !");
      return;
    }
    e.preventDefault();
    try {
      await updateContact(id, contact);
      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    const localFetch = async (id) => {
      try {
        const { data } = await getOnContact(id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);

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
      <button type="submit">Update Contact</button>
    </form>
  );
};

export default EditContact;
