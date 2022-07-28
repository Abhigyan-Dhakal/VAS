import React, { useContext, useState } from "react";
// import { AuthContext } from "../../context";
import { Auth, AuthContext, useAuth } from "../../context/AuthContext";
import styles from "./login.module.css";

type Props = {};

interface ILoginData {
  email: string;
  password: string;
}

export const Login: React.FC<Props> = ({}: Props) => {
  const { loggedIn, setLoggedIn } = useAuth();
  console.log(loggedIn);

  const [loginData, setLoginData] = useState<ILoginData>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoggedIn(true);
    console.log(loginData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((curr) => ({ ...curr, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles["form-container"]}>
      <div>
        <h1 className={styles["login-title"]}>Login!</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles["label-container"]}>
            <label>Email</label>
          </div>
          <div>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleChange}
              className={styles["login-input"]}
            />
          </div>
          <div className="label-container">
            <label>Password</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              className={styles["login-input"]}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className={styles["login-btn"]} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
