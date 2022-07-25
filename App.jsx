import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? (
        <Form isreg={true} show="true" />
      ) : (
        <Form isreg={false} show="false" />
      )}
    </div>
  );
}

export default App;
