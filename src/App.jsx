import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";
import { useState } from "react";

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevItem) => {
      return [...prevItem, note];
    });
    console.log(note);
  };
  const delNote = (id) => {
    setAddItem((prevItem) => {
      return prevItem.filter((item, idx) => idx != id);
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((item, idx) => {
        return (
          <Note
            key={idx}
            id={idx}
            title={item.title}
            content={item.content}
            passDel={delNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
