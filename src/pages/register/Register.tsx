import React from "react";
import { UserRegistrationForm } from "../../components";
import Styles from "./Register.module.css";

type Props = {};

export const Register = (props: Props) => {
  return (
    <div>
      <UserRegistrationForm />
    </div>
  );
};
