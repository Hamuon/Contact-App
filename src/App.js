import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import { Routes, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import EditContact from "./components/EditContact/EditContact";

function App() {
  return (
    <main className="App">
      <h1>Contact App </h1>
      <Routes>
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
      </Routes>
    </main>
  );
}

export default App;
