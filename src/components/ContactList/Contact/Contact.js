import userImage from "../../../assets/images/user.png";
import { Link, useParams } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div key={id} className="item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={userImage} alt="user" />
        <Link to={`user/${id}`} state={{ contact }}>
          <div className="user">
            <p> name : {name}</p>
            <p> email : {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="editBtn">Edit</button>
        </Link>
        <button onClick={() => onDelete(id)}>delete</button>
      </div>
    </div>
  );
};

export default Contact;
