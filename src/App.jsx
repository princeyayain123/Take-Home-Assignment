import { useState } from "react";
import input from "./data/input";
import StatCard from "./components/StatCard";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [selectedStat, setSelectedStat] = useState(null);

  return (
    <div style={{ padding: 40 }}>
      {input.map((input) => (
        <StatCard key={input.name} input={input} onClick={() => setSelectedStat(input)} />
      ))}

      {selectedStat && <Modal setSelectedStat={setSelectedStat} selectedStat={selectedStat}></Modal>}
    </div>
  );
}

export default App;
