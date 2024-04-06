import React from "react";
import { ChecklistProvider, Checklist } from "./Checklist";

function App() {
  return (
    <ChecklistProvider>
      <div>
        <Checklist />
      </div>
    </ChecklistProvider>
  );
}

export default App;
