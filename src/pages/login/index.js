import React from "react";
import Loginpage from "../../components/Loginpage";
import RegisterForm from "../../components/Loginpage/RegisterForm";

function login() {
  return (
    <Loginpage>
      <RegisterForm />
    </Loginpage>
  );
}

export default login;
