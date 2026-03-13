import React from "react";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor"; // Import the cursor

function App() {
  return (
    <>
      <CustomCursor /> {/* Place it at the top level */}
      <Home />
    </>
  );
}

export default App;
