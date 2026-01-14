import Toggle from "./Toggle";

function App() {
  return (
    <div style={{ margin: "40px" }}>
      <h2>Render Props Toggle</h2>

      <Toggle>
        {({ isOn, toggle }) => (
          <div>
            <p>Status: {isOn ? "ON" : "OFF"}</p>
            <button onClick={toggle}>
              {isOn ? "Turn OFF" : "Turn ON"}
            </button>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default App;
