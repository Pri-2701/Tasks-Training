import React, { Suspense, Profiler } from "react";
import "./App.css";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Patients = React.lazy(() => import("./pages/Patients"));

function onRender(id, phase, actualDuration) {
  console.log(id, phase, actualDuration);
}

function App() {
  return (
    <Profiler id="App" onRender={onRender}>
      <Suspense fallback={<p>Loading page...</p>}>
        <Dashboard />
        <Patients />
      </Suspense>
    </Profiler>
  );
}

export default App;


