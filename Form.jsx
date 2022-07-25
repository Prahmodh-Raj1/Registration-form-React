import React from "react";
import Input from "./Input";

function check(chk) {
  var temp = chk;
  if (temp === "false") {
    return <Input text="password" placeholder="Confirm Password" />;
  }
}
function Form(props) {
  return (
    <form className="form">
      <Input text="text" placeholder="Username" />
      <Input text="password" placeholder="Password" />
      {check(props.show)}
      <button type="submit">{props.isreg ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
