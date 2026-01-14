import { useState } from "react";
import Modal from "./Components/Modal";


function App() {
  const[isModalOpen, setISModalOpen] = useState(false); //state to control whether modal isopem or closed

  return (
    <div style={{padding: "40pxn"}}>
    <h1>Reusable Modal </h1>

    <button onClick={() => setISModalOpen(true)}>Modal Open</button> 

    <Modal isOpen={isModalOpen} onClose={() =>setISModalOpen(false)} title="Hello Modal">
      <p>This is Resuble Modal Content</p>
    </Modal>
    </div>
  );
}

export default App;